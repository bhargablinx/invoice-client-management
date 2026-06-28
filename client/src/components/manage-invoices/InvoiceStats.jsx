import { Clock3, FileText, Pencil, CircleDollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const InvoiceStats = () => {
    const { invoices } = useSelector((state) => state.invoices);
    const [stats, setStats] = useState([
        {
            title: "Total Invoices",
            value: 0,
            icon: FileText,
        },
        {
            title: "Drafts",
            value: 0,
            icon: Pencil,
        },
        {
            title: "Pending",
            value: 0,
            icon: Clock3,
        },
        {
            title: "Paid",
            value: 0,
            icon: CircleDollarSign,
        },
    ]);
    useEffect(() => {
        const allDraftInvoices = invoices.filter(
            (invoice) => invoice.status === "draft",
        );
        const allPendingInvoices = invoices.filter(
            (invoice) =>
                invoice.status === "sent" ||
                invoice.status === "viewed" ||
                invoice.status === "partially_paid",
        );
        const allPaidInvoices = invoices.filter(
            (invoice) => invoice.status === "paid",
        );

        setStats([
            {
                title: "Total Invoices",
                value: invoices.length,
                icon: FileText,
            },
            {
                title: "Drafts",
                value: allDraftInvoices.length,
                icon: Pencil,
            },
            {
                title: "Pending",
                value: allPendingInvoices.length,
                icon: Clock3,
            },
            {
                title: "Paid",
                value: allPaidInvoices.length,
                icon: CircleDollarSign,
            },
        ]);
    }, [invoices]);

    return (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                    <Card key={stat.title}>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium">
                                {stat.title}
                            </CardTitle>

                            <Icon className="size-5 text-primary" />
                        </CardHeader>

                        <CardContent>
                            <div className="text-3xl font-bold">
                                {stat.value}
                            </div>
                        </CardContent>
                    </Card>
                );
            })}
        </div>
    );
};

export default InvoiceStats;
