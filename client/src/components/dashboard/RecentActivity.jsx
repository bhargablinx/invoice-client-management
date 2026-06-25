import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { CheckCircle2, FilePlus2, UserPlus, BellRing } from "lucide-react";

const activities = [
    {
        icon: CheckCircle2,
        title: "Invoice INV-1001 marked as paid",
        time: "5 minutes ago",
    },
    {
        icon: UserPlus,
        title: "New client 'Pixel Studio' added",
        time: "32 minutes ago",
    },
    {
        icon: FilePlus2,
        title: "Invoice INV-1005 created",
        time: "1 hour ago",
    },
    {
        icon: BellRing,
        title: "Payment reminder sent to John Doe",
        time: "3 hours ago",
    },
];

const RecentActivity = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>
                    Latest actions across your workspace
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-5">
                {activities.map((activity, index) => {
                    const Icon = activity.icon;

                    return (
                        <div key={index} className="flex items-start gap-4">
                            <div className="rounded-full bg-primary/10 p-2">
                                <Icon className="size-4 text-primary" />
                            </div>

                            <div className="space-y-1">
                                <p className="text-sm font-medium leading-none">
                                    {activity.title}
                                </p>

                                <p className="text-xs text-muted-foreground">
                                    {activity.time}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </CardContent>
        </Card>
    );
};

export default RecentActivity;
