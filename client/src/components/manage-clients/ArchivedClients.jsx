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

const archivedClients = [
    {
        id: 1,
        name: "Emma Wilson",
        company: "Freelancer",
        archivedOn: "2 weeks ago",
    },
    {
        id: 2,
        name: "Robert Fox",
        company: "Fox Solutions",
        archivedOn: "1 month ago",
    },
    {
        id: 3,
        name: "Sophia Davis",
        company: "Nova Digital",
        archivedOn: "Yesterday",
    },
];

const ArchivedClients = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Archived Clients</CardTitle>

                <CardDescription>
                    Restore archived clients or permanently remove them.
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
                {archivedClients.map((client) => (
                    <div
                        key={client.id}
                        className="flex flex-col gap-4 rounded-lg border p-4 lg:flex-row lg:items-center lg:justify-between"
                    >
                        <div className="flex items-center gap-4">
                            <Avatar>
                                <AvatarFallback>
                                    {client.name
                                        .split(" ")
                                        .map((word) => word[0])
                                        .join("")}
                                </AvatarFallback>
                            </Avatar>

                            <div>
                                <h4 className="font-medium">{client.name}</h4>

                                <p className="text-sm text-muted-foreground">
                                    {client.company}
                                </p>

                                <p className="mt-1 text-xs text-muted-foreground">
                                    Archived {client.archivedOn}
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
                ))}
            </CardContent>
        </Card>
    );
};

export default ArchivedClients;
