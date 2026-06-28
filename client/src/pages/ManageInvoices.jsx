import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import InvoiceFilters from "@/components/manage-invoices/InvoiceFilters";
import InvoiceHeader from "@/components/manage-invoices/InvoiceHeader";
import InvoiceStats from "@/components/manage-invoices/InvoiceStats";
import InvoiceTable from "@/components/manage-invoices/InvoiceTable";
import DraftInvoices from "@/components/manage-invoices/DraftInvoices";
import Loading from "@/components/Loading";
import { getInvoices } from "@/features/invoices/invoiceThunk";

const ManageInvoices = () => {
    const dispatch = useDispatch();
    const { organizations, loading: orgLoading } = useSelector(
        (state) => state.organization,
    );
    const activeOrganization = organizations[0];
    const { invoices, loading: invoiceLoading } = useSelector(
        (state) => state.invoices,
    );
    const [filters, setFilters] = useState({
        search: "",
        status: "all",
        clientId: "all",
        sort: "latest",
    });

    useEffect(() => {
        if (!activeOrganization?._id) return;

        const params = {
            limit: 100,
        };

        if (filters.search.trim()) params.search = filters.search.trim();
        if (filters.status !== "all") params.status = filters.status;
        if (filters.clientId !== "all") params.clientId = filters.clientId;

        dispatch(
            getInvoices({
                organizationId: activeOrganization._id,
                params,
            }),
        );
    }, [activeOrganization?._id, dispatch, filters]);

    const clientOptions = useMemo(() => {
        const clients = new Map();

        invoices.forEach((invoice) => {
            const client = invoice.client;
            const id = client?._id;
            if (!id || clients.has(id)) return;

            clients.set(id, {
                id,
                label: client.companyName || client.name || "Unknown Client",
            });
        });

        return Array.from(clients.values());
    }, [invoices]);

    const sortedInvoices = useMemo(() => {
        const list = [...invoices];
        switch (filters.sort) {
            case "oldest":
                return list.sort(
                    (a, b) =>
                        new Date(a.createdAt || a.issueDate) -
                        new Date(b.createdAt || b.issueDate),
                );
            case "amount-high":
                return list.sort((a, b) => (b.totalAmount || 0) - (a.totalAmount || 0));
            case "amount-low":
                return list.sort((a, b) => (a.totalAmount || 0) - (b.totalAmount || 0));
            case "due-date":
                return list.sort(
                    (a, b) => new Date(a.dueDate || 0) - new Date(b.dueDate || 0),
                );
            case "latest":
            default:
                return list.sort(
                    (a, b) =>
                        new Date(b.createdAt || b.issueDate) -
                        new Date(a.createdAt || a.issueDate),
                );
        }
    }, [invoices, filters.sort]);

    const tableData = sortedInvoices;

    const stats = useMemo(() => {
        const totalInvoices = invoices.length;
        const draftInvoices = invoices.filter(
            (invoice) => invoice.status === "draft",
        );
        const pendingInvoices = invoices.filter((invoice) =>
            ["sent", "viewed", "partially_paid"].includes(invoice.status),
        );
        const paidInvoices = invoices.filter(
            (invoice) => invoice.status === "paid",
        );

        return {
            totalInvoices,
            drafts: draftInvoices.length,
            pending: pendingInvoices.length,
            paid: paidInvoices.length,
        };
    }, [invoices]);

    if (orgLoading || invoiceLoading) return <Loading />;

    if (!activeOrganization) {
        return <Navigate to="/organizations/new" replace />;
    }

    return (
        <div className="space-y-6">
            <InvoiceHeader organizationName={activeOrganization.name} />

            <InvoiceStats stats={stats} />

            <InvoiceFilters
                filters={filters}
                onFiltersChange={setFilters}
                clientOptions={clientOptions}
            />

            <InvoiceTable invoices={tableData} />

            <DraftInvoices invoices={invoices} />
        </div>
    );
};

export default ManageInvoices;
