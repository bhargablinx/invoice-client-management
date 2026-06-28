import { Users, UserCheck, Archive, IndianRupee } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
    { title: "Total Clients", key: "total", icon: Users },
    { title: "Active Clients", key: "active", icon: UserCheck },
    { title: "Archived", key: "archived", icon: Archive },
    { title: "Revenue", key: "revenue", icon: IndianRupee },
];

const formatRevenue = (value) => {
    const amount = Number(value ?? 0);

    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
    }).format(amount);
};

const ClientStats = ({ stats: clientStats = {} }) => {
    return (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => {
                const Icon = stat.icon;
                const value =
                    stat.key === "revenue"
                        ? formatRevenue(clientStats[stat.key] ?? 0)
                        : clientStats[stat.key] ?? 0;

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
