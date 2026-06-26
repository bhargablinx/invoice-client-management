import { FileText, IndianRupee, Clock3, AlertTriangle } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
    {
        title: "Total Invoices",
        value: "284",
        icon: FileText,
    },
    {
        title: "Paid Amount",
        value: "₹12.84L",
        icon: IndianRupee,
    },
    {
        title: "Pending Amount",
        value: "₹2.14L",
        icon: Clock3,
    },
    {
        title: "Overdue Amount",
        value: "₹48,500",
        icon: AlertTriangle,
    },
];

const InvoiceStats = () => {
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
