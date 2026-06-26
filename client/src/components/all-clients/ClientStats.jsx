import { Building2, DollarSign, TrendingUp, Users } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
    {
        title: "Total Clients",
        value: "48",
        icon: Users,
    },
    {
        title: "Active Clients",
        value: "44",
        icon: Building2,
    },
    {
        title: "Outstanding",
        value: "₹1,24,000",
        icon: DollarSign,
    },
    {
        title: "Revenue",
        value: "₹12,84,000",
        icon: TrendingUp,
    },
];

const ClientStats = () => {
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

export default ClientStats;
