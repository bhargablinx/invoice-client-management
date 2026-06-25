import { useState } from "react";

import { Building2, Calendar, Mail, UserRound } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const initialInvitations = [
    {
        id: 1,
        organization: "Acme Corporation",
        inviter: "John Smith",
        role: "Admin",
        email: "john@acme.com",
        sent: "2 days ago",
    },
    {
        id: 2,
        organization: "Pixel Studio",
        inviter: "Alice Johnson",
        role: "Member",
        email: "alice@pixelstudio.com",
        sent: "5 hours ago",
    },
    {
        id: 3,
        organization: "TechNova",
        inviter: "Michael Brown",
        role: "Member",
        email: "michael@technova.com",
        sent: "1 week ago",
    },
    {
        id: 4,
        organization: "TechNova",
        inviter: "Brown Mik",
        role: "Member",
        email: "michael@technova.com",
        sent: "1 week ago",
    },
];

const Invitations = () => {
    const [invitations, setInvitations] = useState(initialInvitations);

    const acceptInvitation = (id) => {
        setInvitations((prev) => prev.filter((invite) => invite.id !== id));
    };

    const declineInvitation = (id) => {
        setInvitations((prev) => prev.filter((invite) => invite.id !== id));
    };

    return (
        <div className="space-y-6">
            {/* Header */}

            <div>
                <h1 className="text-3xl font-bold tracking-tight">
                    Invitations
                </h1>

                <p className="text-muted-foreground">
                    Review and respond to your organization invitations.
                </p>
            </div>

            {/* Empty State */}

            {invitations.length === 0 && (
                <Card>
                    <CardContent className="flex flex-col items-center justify-center py-20 text-center">
                        <Mail className="mb-4 size-14 text-muted-foreground" />

                        <h2 className="text-xl font-semibold">
                            No Pending Invitations
                        </h2>

                        <p className="mt-2 max-w-md text-sm text-muted-foreground">
                            You're all caught up. Any new organization
                            invitations will appear here.
                        </p>
                    </CardContent>
                </Card>
            )}

            {/* Invitation Cards */}

            <div className="flex gap-5 flex-wrap">
                {invitations.map((invite) => (
                    <Card key={invite.id} className="w-xs">
                        <CardHeader>
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="rounded-lg bg-primary/10 p-3">
                                        <Building2 className="size-6 text-primary" />
                                    </div>

                                    <div>
                                        <CardTitle>
                                            {invite.organization}
                                        </CardTitle>

                                        <CardDescription>
                                            Organization Invitation
                                        </CardDescription>
                                    </div>
                                </div>

                                <Badge>{invite.role}</Badge>
                            </div>
                        </CardHeader>

                        <CardContent className="space-y-5">
                            <div className="grid gap-3 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <UserRound className="size-4" />
                                    Invited by{" "}
                                    <span className="font-medium text-foreground">
                                        {invite.inviter}
                                    </span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Mail className="size-4" />
                                    {invite.email}
                                </div>

                                <div className="flex items-center gap-2">
                                    <Calendar className="size-4" />
                                    Sent {invite.sent}
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <Button
                                    className="flex-1"
                                    onClick={() => acceptInvitation(invite.id)}
                                >
                                    Accept
                                </Button>

                                <Button
                                    variant="outline"
                                    className="flex-1"
                                    onClick={() => declineInvitation(invite.id)}
                                >
                                    Decline
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Invitations;
