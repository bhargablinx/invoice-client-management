import { Users, ShieldCheck, Crown, Mail } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
    {
        title: "Total Members",
        key: "total",
        icon: Users,
    },
    {
        title: "Admins",
        key: "admins",
        icon: ShieldCheck,
    },
    {
        title: "Owners",
        key: "owners",
        icon: Crown,
    },
    {
        title: "Pending Invites",
        key: "pendingInvites",
        icon: Mail,
    },
];

const MemberStats = ({ stats: memberStats = {} }) => {
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
                                {memberStats[stat.key] ?? 0}
                            </div>
                        </CardContent>
                    </Card>
                );
            })}
        </div>
    );
};

export default MemberStats;
