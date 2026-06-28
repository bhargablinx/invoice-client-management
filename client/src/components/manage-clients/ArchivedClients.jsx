import { ArchiveRestore, Trash2 } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { getInitials } from "@/lib/helper";

const ArchivedClients = ({ clients = [] }) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Archived Clients</CardTitle>

                <CardDescription>
                    Restore archived clients or permanently remove them.
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
                {clients.length ? (
                    clients.map((client) => (
                        <div
                            key={client._id}
                            className="flex flex-col gap-4 rounded-lg border p-4 lg:flex-row lg:items-center lg:justify-between"
                        >
                            <div className="flex items-center gap-4">
                                <Avatar>
                                    <AvatarFallback>
                                        {getInitials(client.name)}
                                    </AvatarFallback>
                                </Avatar>

                                <div>
                                    <h4 className="font-medium">
                                        {client.name}
                                    </h4>

                                    <p className="text-sm text-muted-foreground">
                                        {client.companyName ?? "—"}
                                    </p>

                                    <p className="mt-1 text-xs text-muted-foreground">
                                        Archived{" "}
                                        {client.updatedAt
                                            ? new Date(
                                                  client.updatedAt,
                                              ).toLocaleDateString("en-US", {
                                                  day: "2-digit",
                                                  month: "short",
                                                  year: "numeric",
                                              })
                                            : "recently"}
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-2">
                                <Button variant="outline">
                                    <ArchiveRestore className="mr-2 size-4" />
                                    Restore
                                </Button>

                                <Button variant="destructive">
                                    <Trash2 className="mr-2 size-4" />
                                    Delete
                                </Button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="rounded-lg border border-dashed p-6 text-sm text-muted-foreground">
                        No archived clients.
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default ArchivedClients;
