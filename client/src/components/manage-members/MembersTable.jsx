import { MoreHorizontal } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
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
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { getInitials } from "@/lib/helper";

const badgeVariant = (role) => {
    switch (role) {
        case "owner":
            return "default";
        case "admin":
            return "secondary";
        default:
            return "outline";
    }
};

const formatDate = (date) => {
    if (!date) return "—";

    return new Date(date).toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });
};

const MembersTable = ({ members = [] }) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Current Members</CardTitle>

                <CardDescription>
                    Manage members and organization roles.
                </CardDescription>
            </CardHeader>

            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Member</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead>Joined</TableHead>
                            <TableHead className="w-14" />
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {members.length ? (
                            members.map((member) => (
                                <TableRow key={member._id}>
                                    <TableCell>
                                        <div className="flex items-center gap-3">
                                            <Avatar>
                                                <AvatarFallback>
                                                    {member.user?.name
                                                        ? getInitials(
                                                              member.user.name,
                                                          )
                                                        : "U"}
                                                </AvatarFallback>
                                            </Avatar>

                                            <div>
                                                <p className="font-medium">
                                                    {member.user?.name ??
                                                        "Unknown user"}
                                                </p>

                                                <p className="text-sm text-muted-foreground">
                                                    Team Member
                                                </p>
                                            </div>
                                        </div>
                                    </TableCell>

                                    <TableCell>{member.user?.email}</TableCell>

                                    <TableCell>
                                        <Badge
                                            variant={badgeVariant(member.role)}
                                        >
                                            {member.role}
                                        </Badge>
                                    </TableCell>

                                    <TableCell>
                                        {formatDate(
                                            member.joinedAt ?? member.createdAt,
                                        )}
                                    </TableCell>

                                    <TableCell>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button
                                                    size="icon"
                                                    variant="ghost"
                                                >
                                                    <MoreHorizontal className="size-4" />
                                                </Button>
                                            </DropdownMenuTrigger>

                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem>
                                                    View Profile
                                                </DropdownMenuItem>

                                                {member.role !== "owner" && (
                                                    <>
                                                        <DropdownMenuSeparator />

                                                        <DropdownMenuItem>
                                                            Make Admin
                                                        </DropdownMenuItem>

                                                        <DropdownMenuItem>
                                                            Make Member
                                                        </DropdownMenuItem>

                                                        <DropdownMenuSeparator />

                                                        <DropdownMenuItem className="text-destructive">
                                                            Remove Member
                                                        </DropdownMenuItem>
                                                    </>
                                                )}

                                                {member.role === "owner" && (
                                                    <DropdownMenuItem disabled>
                                                        Owner permissions cannot
                                                        be changed
                                                    </DropdownMenuItem>
                                                )}
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={5}
                                    className="py-12 text-center text-sm text-muted-foreground"
                                >
                                    No matching members found.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
};

export default MembersTable;
