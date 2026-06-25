import { Clock3, Mail, MoreHorizontal } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const invitations = [
    {
        id: 1,
        email: "robert@example.com",
        role: "Admin",
        invitedBy: "Bhargab Bhuyan",
        sent: "2 hours ago",
    },
    {
        id: 2,
        email: "alice@example.com",
        role: "Member",
        invitedBy: "John Smith",
        sent: "Yesterday",
    },
    {
        id: 3,
        email: "emma@example.com",
        role: "Member",
        invitedBy: "Bhargab Bhuyan",
        sent: "3 days ago",
    },
];

const PendingInvitations = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Pending Invitations</CardTitle>

                <CardDescription>
                    Invitations waiting to be accepted.
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
                {invitations.map((invite) => (
                    <div
                        key={invite.id}
                        className="flex flex-col gap-4 rounded-lg border p-4 md:flex-row md:items-center md:justify-between"
                    >
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <Mail className="size-4 text-primary" />

                                <span className="font-medium">
                                    {invite.email}
                                </span>

                                <Badge variant="secondary">{invite.role}</Badge>
                            </div>

                            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                                <span>Invited by {invite.invitedBy}</span>

                                <div className="flex items-center gap-1">
                                    <Clock3 className="size-3.5" />

                                    {invite.sent}
                                </div>
                            </div>
                        </div>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <MoreHorizontal className="size-4" />
                                </Button>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent align="end">
                                <DropdownMenuItem>
                                    Resend Invitation
                                </DropdownMenuItem>

                                <DropdownMenuSeparator />

                                <DropdownMenuItem className="text-destructive">
                                    Cancel Invitation
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
};

export default PendingInvitations;
