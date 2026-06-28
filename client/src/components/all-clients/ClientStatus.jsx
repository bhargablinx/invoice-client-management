import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const ClientStatus = ({
    totalClients = 0,
    activeClients = 0,
    archivedClients = 0,
}) => {
    const activePercentage = totalClients
        ? Math.round((activeClients / totalClients) * 100)
        : 0;
    const archivedPercentage = totalClients
        ? Math.round((archivedClients / totalClients) * 100)
        : 0;

    return (
        <Card className="h-full">
            <CardHeader>
                <CardTitle>Client Status</CardTitle>

                <CardDescription>Distribution of clients</CardDescription>
            </CardHeader>

            <CardContent className="space-y-8">
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-medium">Active Clients</p>

                            <p className="text-sm text-muted-foreground">
                                {activeClients} Clients
                            </p>
                        </div>

                        <span className="text-lg font-semibold">
                            {activePercentage}%
                        </span>
                    </div>

                    <Progress value={activePercentage} />
                </div>

                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-medium">Archived Clients</p>

                            <p className="text-sm text-muted-foreground">
                                {archivedClients} Clients
                            </p>
                        </div>

                        <span className="text-lg font-semibold">
                            {archivedPercentage}%
                        </span>
                    </div>

                    <Progress value={archivedPercentage} />
                </div>

                <div className="rounded-lg bg-muted p-4">
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                            Total Clients
                        </span>

                        <span className="text-2xl font-bold">
                            {totalClients}
                        </span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default ClientStatus;
