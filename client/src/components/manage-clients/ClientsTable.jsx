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

const clients = [
    {
        id: 1,
        name: "John Doe",
        company: "Acme Corporation",
        email: "john@acme.com",
        phone: "+91 9876543210",
        outstanding: "₹18,000",
        status: "Active",
    },
    {
        id: 2,
        name: "Sarah Johnson",
        company: "Pixel Studio",
        email: "sarah@pixel.com",
        phone: "+91 9123456780",
        outstanding: "₹0",
        status: "Active",
    },
    {
        id: 3,
        name: "Michael Brown",
        company: "Nova Digital",
        email: "michael@nova.com",
        phone: "+91 9988776655",
        outstanding: "₹7,800",
        status: "Active",
    },
    {
        id: 4,
        name: "Emma Wilson",
        company: "Freelancer",
        email: "emma@gmail.com",
        phone: "+91 9000011111",
        outstanding: "₹2,400",
        status: "Archived",
    },
];

const statusVariant = (status) => {
    switch (status) {
        case "Active":
            return "default";
        case "Archived":
            return "secondary";
        default:
            return "outline";
    }
};

const ClientsTable = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Clients</CardTitle>

                <CardDescription>Manage all active clients.</CardDescription>
            </CardHeader>

            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Client</TableHead>

                            <TableHead>Company</TableHead>

                            <TableHead>Email</TableHead>

                            <TableHead>Phone</TableHead>

                            <TableHead>Outstanding</TableHead>

                            <TableHead>Status</TableHead>

                            <TableHead className="w-14" />
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {clients.map((client) => (
                            <TableRow key={client.id}>
                                <TableCell>
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
                                            <p className="font-medium">
                                                {client.name}
                                            </p>

                                            <p className="text-sm text-muted-foreground">
                                                Client
                                            </p>
                                        </div>
                                    </div>
                                </TableCell>

                                <TableCell>{client.company}</TableCell>

                                <TableCell>{client.email}</TableCell>

                                <TableCell>{client.phone}</TableCell>

                                <TableCell
                                    className={
                                        client.outstanding === "₹0"
                                            ? "text-green-600 font-medium"
                                            : "font-medium text-orange-600"
                                    }
                                >
                                    {client.outstanding}
                                </TableCell>

                                <TableCell>
                                    <Badge
                                        variant={statusVariant(client.status)}
                                    >
                                        {client.status}
                                    </Badge>
                                </TableCell>

                                <TableCell>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" size="icon">
                                                <MoreHorizontal className="size-4" />
                                            </Button>
                                        </DropdownMenuTrigger>

                                        <DropdownMenuContent align="end">
                                            <DropdownMenuItem>
                                                View Client
                                            </DropdownMenuItem>

                                            <DropdownMenuItem>
                                                Edit Client
                                            </DropdownMenuItem>

                                            <DropdownMenuSeparator />

                                            {client.status === "Active" ? (
                                                <DropdownMenuItem>
                                                    Archive Client
                                                </DropdownMenuItem>
                                            ) : (
                                                <DropdownMenuItem>
                                                    Restore Client
                                                </DropdownMenuItem>
                                            )}

                                            <DropdownMenuSeparator />

                                            <DropdownMenuItem className="text-destructive">
                                                Delete Client
                                            </DropdownMenuItem>
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

export default ClientsTable;
