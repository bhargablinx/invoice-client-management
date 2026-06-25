import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
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
        joined: "15 Jan 2026",
    },
    {
        id: 3,
        name: "Alice Johnson",
        email: "alice@example.com",
        role: "Member",
        joined: "18 Jan 2026",
    },
    {
        id: 4,
        name: "Michael Brown",
        email: "michael@example.com",
        role: "Member",
        joined: "22 Jan 2026",
    },
    {
        id: 5,
        name: "Emma Wilson",
        email: "emma@example.com",
        role: "Admin",
        joined: "25 Jan 2026",
    },
    {
        id: 6,
        name: "David Lee",
        email: "david@example.com",
        role: "Member",
        joined: "02 Feb 2026",
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

const ViewMembers = () => {
    return (
        <div className="space-y-6">
            {/* Header */}

            <div>
                <h1 className="text-3xl font-bold tracking-tight">Members</h1>

                <p className="text-muted-foreground">
                    Browse everyone who belongs to this organization.
                </p>
            </div>

            {/* Table */}

            <Card>
                <CardHeader>
                    <CardTitle>Organization Members</CardTitle>

                    <CardDescription>
                        {members.length} active members
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
                                        <Badge
                                            variant={badgeVariant(member.role)}
                                        >
                                            {member.role}
                                        </Badge>
                                    </TableCell>

                                    <TableCell>{member.joined}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
};

export default ViewMembers;
