import { Users, ShieldCheck, Crown, Mail } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
    {
        title: "Total Members",
        value: 18,
        icon: Users,
    },
    {
        title: "Admins",
        value: 3,
        icon: ShieldCheck,
    },
    {
        title: "Owners",
        value: 1,
        icon: Crown,
    },
    {
        title: "Pending Invites",
        value: 4,
        icon: Mail,
    },
];

const MemberStats = () => {
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

export default MemberStats;
