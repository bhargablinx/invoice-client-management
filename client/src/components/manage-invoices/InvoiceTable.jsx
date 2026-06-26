import { MoreHorizontal } from "lucide-react";

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

const invoices = [
    {
        id: "INV-1001",
        client: "Acme Corporation",
        issueDate: "12 Jun 2026",
        dueDate: "26 Jun 2026",
        amount: "₹72,000",
        status: "Paid",
    },
    {
        id: "INV-1002",
        client: "John Doe",
        issueDate: "15 Jun 2026",
        dueDate: "29 Jun 2026",
        amount: "₹18,500",
        status: "Pending",
    },
    {
        id: "INV-1003",
        client: "Pixel Studio",
        issueDate: "10 Jun 2026",
        dueDate: "20 Jun 2026",
        amount: "₹9,400",
        status: "Overdue",
    },
    {
        id: "INV-1004",
        client: "Nova Digital",
        issueDate: "18 Jun 2026",
        dueDate: "02 Jul 2026",
        amount: "₹32,000",
        status: "Draft",
    },
];

const badgeVariant = (status) => {
    switch (status) {
        case "Paid":
            return "default";
        case "Pending":
            return "secondary";
        case "Overdue":
            return "destructive";
        case "Draft":
            return "outline";
        default:
            return "outline";
    }
};

const InvoiceTable = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Invoices</CardTitle>

                <CardDescription>
                    Manage and track all invoices.
                </CardDescription>
            </CardHeader>

            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Invoice</TableHead>

                            <TableHead>Client</TableHead>

                            <TableHead>Issued</TableHead>

                            <TableHead>Due Date</TableHead>

                            <TableHead className="text-right">Amount</TableHead>

                            <TableHead>Status</TableHead>

                            <TableHead className="w-14" />
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {invoices.map((invoice) => (
                            <TableRow key={invoice.id}>
                                <TableCell className="font-medium">
                                    {invoice.id}
                                </TableCell>

                                <TableCell>{invoice.client}</TableCell>

                                <TableCell>{invoice.issueDate}</TableCell>

                                <TableCell>{invoice.dueDate}</TableCell>

                                <TableCell className="text-right font-medium">
                                    {invoice.amount}
                                </TableCell>

                                <TableCell>
                                    <Badge
                                        variant={badgeVariant(invoice.status)}
                                    >
                                        {invoice.status}
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
                                                View Invoice
                                            </DropdownMenuItem>

                                            <DropdownMenuItem>
                                                Edit Invoice
                                            </DropdownMenuItem>

                                            <DropdownMenuItem>
                                                Duplicate Invoice
                                            </DropdownMenuItem>

                                            <DropdownMenuSeparator />

                                            <DropdownMenuItem>
                                                Download PDF
                                            </DropdownMenuItem>

                                            <DropdownMenuItem>
                                                Send Invoice
                                            </DropdownMenuItem>

                                            {invoice.status !== "Paid" && (
                                                <DropdownMenuItem>
                                                    Mark as Paid
                                                </DropdownMenuItem>
                                            )}

                                            <DropdownMenuSeparator />

                                            <DropdownMenuItem className="text-destructive">
                                                Delete Invoice
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

export default InvoiceTable;
