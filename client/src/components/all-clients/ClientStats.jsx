import { Building2, DollarSign, TrendingUp, Users } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
    { title: "Total Clients", key: "totalClients", icon: Users },
    { title: "Active Clients", key: "activeClients", icon: Building2 },
    { title: "Outstanding", key: "outstandingAmount", icon: DollarSign },
    { title: "Revenue", key: "revenue", icon: TrendingUp },
];

const formatCurrency = (value) =>
    new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
    }).format(Number(value ?? 0));

const ClientStats = ({ stats: clientStats = {} }) => {
    return (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => {
                const Icon = stat.icon;
                const value =
                    stat.key === "totalClients" ||
                    stat.key === "activeClients"
                        ? clientStats[stat.key] ?? 0
                        : formatCurrency(clientStats[stat.key] ?? 0);

                return (
                    <Card key={stat.title}>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium">
                                {stat.title}
                            </CardTitle>

                            <Icon className="size-5 text-primary" />
                        </CardHeader>

                        <CardContent>
                            <div className="text-3xl font-bold">{value}</div>
                        </CardContent>
                    </Card>
                );
            })}
        </div>
    );
};

export default ClientStats;
