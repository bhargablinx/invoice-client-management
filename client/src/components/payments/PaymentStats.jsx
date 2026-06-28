import { CheckCircle2, Clock3, IndianRupee, XCircle } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PaymentStats = ({ stats }) => {
    const cards = [
        {
            title: "Total Payments",
            value: stats.totalAmount,
            icon: IndianRupee,
        },
        {
            title: "Completed",
            value: stats.completedPayments,
            icon: CheckCircle2,
        },
        {
            title: "Pending",
            value: stats.pendingPayments,
            icon: Clock3,
        },
        {
            title: "Failed",
            value: stats.failedPayments,
            icon: XCircle,
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

export default PaymentStats;
