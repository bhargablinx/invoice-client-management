import {
    Plus,
    Receipt,
    Users,
    BriefcaseBusiness,
    BellRing,
} from "lucide-react";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

const actions = [
    {
        title: "New Invoice",
        icon: Receipt,
    },
    {
        title: "Add Client",
        icon: Users,
    },
    {
        title: "New Service",
        icon: BriefcaseBusiness,
    },
    {
        title: "Send Reminder",
        icon: BellRing,
    },
];

const QuickActions = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Frequently used shortcuts</CardDescription>
            </CardHeader>

            <CardContent>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    {actions.map((action) => {
                        const Icon = action.icon;

                        return (
                            <Button
                                key={action.title}
                                variant="outline"
                                className="h-24 flex-col gap-3"
                            >
                                <div className="rounded-full bg-primary/10 p-3">
                                    <Icon className="size-5 text-primary" />
                                </div>

                                <span>{action.title}</span>
                            </Button>
                        );
                    })}

                    <Button className="h-24 flex-col gap-3">
                        <div className="rounded-full bg-primary-foreground/20 p-3">
                            <Plus className="size-5" />
                        </div>

                        <span>Create New</span>
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default QuickActions;
