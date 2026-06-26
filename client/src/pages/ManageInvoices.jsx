import InvoiceFilters from "@/components/manage-invoices/InvoiceFilters";
import InvoiceHeader from "@/components/manage-invoices/InvoiceHeader";
import InvoiceStats from "@/components/manage-invoices/InvoiceStats";
import InvoiceTable from "@/components/manage-invoices/InvoiceTable";
import DraftInvoices from "@/components/manage-invoices/DraftInvoices";

const ManageInvoices = () => {
    return (
        <div className="space-y-6">
            <InvoiceHeader />

            <InvoiceStats />

            <InvoiceFilters />

            <InvoiceTable />

            <DraftInvoices />
        </div>
    );
};

export default ManageInvoices;
