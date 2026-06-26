import { CheckCircle2, Clock3, IndianRupee, XCircle } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
    {
        title: "Total Payments",
        value: "₹18.42L",
        icon: IndianRupee,
    },
    {
        title: "Completed",
        value: "198",
        icon: CheckCircle2,
    },
    {
        title: "Pending",
        value: "14",
        icon: Clock3,
    },
    {
        title: "Failed",
        value: "3",
        icon: XCircle,
    },
];

const PaymentStats = () => {
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

export default PaymentStats;
