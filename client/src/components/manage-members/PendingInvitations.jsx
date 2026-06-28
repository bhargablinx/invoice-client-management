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

const formatDate = (date) => {
    if (!date) return "Recently";

    return new Date(date).toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });
};

const PendingInvitations = ({ invitations = [] }) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Pending Invitations</CardTitle>

                <CardDescription>
                    Invitations waiting to be accepted.
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
                {invitations.length ? (
                    invitations.map((invite) => (
                        <div
                            key={invite._id}
                            className="flex flex-col gap-4 rounded-lg border p-4 md:flex-row md:items-center md:justify-between"
                        >
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <Mail className="size-4 text-primary" />

                                    <span className="font-medium">
                                        {invite.email}
                                    </span>

                                    <Badge variant="secondary">
                                        {invite.role}
                                    </Badge>
                                </div>

                                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                                    <span>
                                        Invited by{" "}
                                        {invite.invitedBy?.name ??
                                            "Organization member"}
                                    </span>

                                    <div className="flex items-center gap-1">
                                        <Clock3 className="size-3.5" />

                                        {formatDate(invite.createdAt)}
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
                    ))
                ) : (
                    <div className="rounded-lg border border-dashed p-6 text-sm text-muted-foreground">
                        No pending invitations.
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default PendingInvitations;
