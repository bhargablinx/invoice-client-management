import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const recentClients = [
    {
        id: 1,
        name: "Sarah Johnson",
        company: "BrightTech Solutions",
        joined: "Yesterday",
    },
    {
        id: 2,
        name: "Michael Brown",
        company: "Nova Digital",
        joined: "3 days ago",
    },
    {
        id: 3,
        name: "Emily Davis",
        company: "Pixel Studio",
        joined: "Last Week",
    },
    {
        id: 4,
        name: "David Lee",
        company: "Freelance",
        joined: "2 weeks ago",
    },
];

const RecentClients = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Recently Added Clients</CardTitle>

                <CardDescription>
                    New clients added to your organization
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-5">
                {recentClients.map((client) => (
                    <div
                        key={client.id}
                        className="flex items-center justify-between"
                    >
                        <div className="flex items-center gap-3">
                            <Avatar>
                                <AvatarFallback>
                                    {client.name
                                        .split(" ")
                                        .map((word) => word[0])
                                        .join("")}
                                </AvatarFallback>
                            </Avatar>

                            <div>
                                <p className="font-medium">{client.name}</p>

                                <p className="text-sm text-muted-foreground">
                                    {client.company}
                                </p>
                            </div>
                        </div>

                        <span className="text-sm text-muted-foreground">
                            {client.joined}
                        </span>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
};

export default RecentClients;
