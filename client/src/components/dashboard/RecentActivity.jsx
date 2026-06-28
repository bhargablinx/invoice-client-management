import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { CheckCircle2, FilePlus2, UserPlus, BellRing } from "lucide-react";

const iconMap = {
    invoice: FilePlus2,
    paid: CheckCircle2,
    client: UserPlus,
    reminder: BellRing,
};

const RecentActivity = ({ activities }) => {
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
                    const Icon = iconMap[activity.icon] ?? BellRing;

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
