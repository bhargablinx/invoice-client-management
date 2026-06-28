import { Clock3, FileText, Pencil, CircleDollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const InvoiceStats = ({ stats }) => {
    const cards = [
        {
            title: "Total Invoices",
            value: stats.totalInvoices,
            icon: FileText,
        },
        {
            title: "Drafts",
            value: stats.drafts,
            icon: Pencil,
        },
        {
            title: "Pending",
            value: stats.pending,
            icon: Clock3,
        },
        {
            title: "Paid",
            value: stats.paid,
            icon: CircleDollarSign,
        },
    ];

    return (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {cards.map((stat) => {
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
