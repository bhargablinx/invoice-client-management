import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { getInitials } from "@/lib/helper";

const formatDate = (value) => {
    if (!value) return "Recently";

    const date = new Date(value);
    return date.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });
};

const RecentClients = ({ clients = [] }) => {
    const recentClients = [...clients]
        .sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0))
        .slice(0, 4);

    return (
        <Card>
            <CardHeader>
                <CardTitle>Recently Added Clients</CardTitle>

                <CardDescription>
                    New clients added to your organization
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-5">
                {recentClients.length ? (
                    recentClients.map((client) => (
                        <div
                            key={client._id}
                            className="flex items-center justify-between"
                        >
                            <div className="flex items-center gap-3">
                                <Avatar>
                                    <AvatarFallback>
                                        {getInitials(client.name)}
                                    </AvatarFallback>
                                </Avatar>

                                <div>
                                    <p className="font-medium">
                                        {client.name}
                                    </p>

                                    <p className="text-sm text-muted-foreground">
                                        {client.companyName ?? "—"}
                                    </p>
                                </div>
                            </div>

                            <span className="text-sm text-muted-foreground">
                                {formatDate(client.createdAt)}
                            </span>
                        </div>
                    ))
                ) : (
                    <div className="rounded-lg border border-dashed p-6 text-sm text-muted-foreground">
                        No recent clients.
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default RecentClients;
