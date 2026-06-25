import {
    DollarSign,
    FileText,
    Users,
    AlertCircle,
    TrendingUp,
} from "lucide-react";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const stats = [
    {
        title: "Total Revenue",
        value: "₹2,48,450",
        change: "+18.2% from last month",
        icon: DollarSign,
    },
    {
        title: "Invoices",
        value: "124",
        change: "+12 this month",
        icon: FileText,
    },
    {
        title: "Clients",
        value: "48",
        change: "+3 new clients",
        icon: Users,
    },
    {
        title: "Outstanding",
        value: "₹32,500",
        change: "8 overdue invoices",
        icon: AlertCircle,
    },
];

const StatCards = () => {
    return (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                    <Card key={stat.title}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <div>
                                <CardDescription>{stat.title}</CardDescription>
                                <CardTitle className="mt-1 text-2xl">
                                    {stat.value}
                                </CardTitle>
                            </div>

                            <div className="rounded-lg bg-primary/10 p-2">
                                <Icon className="size-5 text-primary" />
                            </div>
                        </CardHeader>

                        <CardContent className="flex items-center gap-2 text-sm text-muted-foreground">
                            <TrendingUp className="size-4 text-green-500" />
                            {stat.change}
                        </CardContent>
                    </Card>
                );
            })}
        </div>
    );
};

export default StatCards;
