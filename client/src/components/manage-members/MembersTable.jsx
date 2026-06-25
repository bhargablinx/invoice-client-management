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

const members = [
    {
        id: 1,
        name: "Bhargab Bhuyan",
        email: "bhargab@example.com",
        role: "Owner",
        joined: "12 Jan 2026",
    },
    {
        id: 2,
        name: "John Smith",
        email: "john@example.com",
        role: "Admin",
        joined: "18 Jan 2026",
    },
    {
        id: 3,
        name: "Alice Johnson",
        email: "alice@example.com",
        role: "Admin",
        joined: "24 Jan 2026",
    },
    {
        id: 4,
        name: "Michael Brown",
        email: "michael@example.com",
        role: "Member",
        joined: "01 Feb 2026",
    },
    {
        id: 5,
        name: "Emma Wilson",
        email: "emma@example.com",
        role: "Member",
        joined: "04 Feb 2026",
    },
    {
        id: 6,
        name: "David Lee",
        email: "david@example.com",
        role: "Member",
        joined: "11 Feb 2026",
    },
];

const badgeVariant = (role) => {
    switch (role) {
        case "Owner":
            return "default";
        case "Admin":
            return "secondary";
        default:
            return "outline";
    }
};

const MembersTable = () => {
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
                        {members.map((member) => (
                            <TableRow key={member.id}>
                                <TableCell>
                                    <div className="flex items-center gap-3">
                                        <Avatar>
                                            <AvatarFallback>
                                                {member.name
                                                    .split(" ")
                                                    .map((word) => word[0])
                                                    .join("")}
                                            </AvatarFallback>
                                        </Avatar>

                                        <div>
                                            <p className="font-medium">
                                                {member.name}
                                            </p>

                                            <p className="text-sm text-muted-foreground">
                                                Team Member
                                            </p>
                                        </div>
                                    </div>
                                </TableCell>

                                <TableCell>{member.email}</TableCell>

                                <TableCell>
                                    <Badge variant={badgeVariant(member.role)}>
                                        {member.role}
                                    </Badge>
                                </TableCell>

                                <TableCell>{member.joined}</TableCell>

                                <TableCell>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button size="icon" variant="ghost">
                                                <MoreHorizontal className="size-4" />
                                            </Button>
                                        </DropdownMenuTrigger>

                                        <DropdownMenuContent align="end">
                                            <DropdownMenuItem>
                                                View Profile
                                            </DropdownMenuItem>

                                            {member.role !== "Owner" && (
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

                                            {member.role === "Owner" && (
                                                <DropdownMenuItem disabled>
                                                    Owner permissions cannot be
                                                    changed
                                                </DropdownMenuItem>
                                            )}
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
};

export default MembersTable;
