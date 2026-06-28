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

const statusVariant = (isActive) => (isActive ? "default" : "secondary");

const formatCurrency = (value) => {
    const amount = Number(value ?? 0);

    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
    }).format(amount);
};

const ClientsTable = ({ clients = [] }) => {
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
                        {clients.length ? (
                            clients.map((client) => (
                                <TableRow key={client._id}>
                                    <TableCell>
                                        <div className="flex items-center gap-3">
                                            <Avatar>
                                                <AvatarFallback>
                                                    {getInitials(client.name)}
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

                                    <TableCell>
                                        {client.companyName ?? "—"}
                                    </TableCell>

                                    <TableCell>{client.email ?? "—"}</TableCell>

                                    <TableCell>{client.phone ?? "—"}</TableCell>

                                    <TableCell
                                        className={
                                            Number(client.outstandingAmount ?? 0)
                                                === 0
                                                ? "text-green-600 font-medium"
                                                : "font-medium text-orange-600"
                                        }
                                    >
                                        {formatCurrency(
                                            client.outstandingAmount ?? 0,
                                        )}
                                    </TableCell>

                                    <TableCell>
                                        <Badge
                                            variant={statusVariant(
                                                client.isActive,
                                            )}
                                        >
                                            {client.isActive
                                                ? "Active"
                                                : "Archived"}
                                        </Badge>
                                    </TableCell>

                                    <TableCell>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                >
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

                                                {client.isActive ? (
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
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={7}
                                    className="py-12 text-center text-sm text-muted-foreground"
                                >
                                    No matching clients found.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
};

export default ClientsTable;
