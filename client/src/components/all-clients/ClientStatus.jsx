import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Progress } from "@/components/ui/progress";

const statuses = [
    {
        title: "Active Clients",
        count: 44,
        percentage: 91,
    },
    {
        title: "Archived Clients",
        count: 4,
        percentage: 9,
    },
];

const ClientStatus = () => {
    return (
        <Card className="h-full">
            <CardHeader>
                <CardTitle>Client Status</CardTitle>

                <CardDescription>Distribution of clients</CardDescription>
            </CardHeader>

            <CardContent className="space-y-8">
                {statuses.map((status) => (
                    <div key={status.title} className="space-y-3">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium">{status.title}</p>

                                <p className="text-sm text-muted-foreground">
                                    {status.count} Clients
                                </p>
                            </div>

                            <span className="text-lg font-semibold">
                                {status.percentage}%
                            </span>
                        </div>

                        <Progress value={status.percentage} />
                    </div>
                ))}

                <div className="rounded-lg bg-muted p-4">
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                            Total Clients
                        </span>

                        <span className="text-2xl font-bold">48</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default ClientStatus;
