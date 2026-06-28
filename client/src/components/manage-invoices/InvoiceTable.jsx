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

const InvoiceTable = ({
    invoices,
    onView,
    onEdit,
    onDuplicate,
    onDownloadPdf,
    onSend,
    onMarkAsPaid,
    onDelete,
}) => {
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
                        {invoices.length ? (
                            invoices.map((invoice) => {
                                const status = capitalizeStatus(invoice.status);

                                return (
                                    <TableRow key={invoice._id}>
                                        <TableCell className="font-medium">
                                            {invoice.invoiceNumber}
                                        </TableCell>

                                        <TableCell>
                                            {invoice.client?.companyName ||
                                                invoice.client?.name ||
                                                "Unknown Client"}
                                        </TableCell>

                                        <TableCell>
                                            {formatDate(
                                                invoice.issueDate || invoice.createdAt,
                                            )}
                                        </TableCell>

                                        <TableCell>
                                            {formatDate(invoice.dueDate)}
                                        </TableCell>

                                        <TableCell className="text-right font-medium">
                                            {formatAmount(invoice.totalAmount)}
                                        </TableCell>

                                        <TableCell>
                                            <Badge
                                                variant={badgeVariant(status)}
                                            >
                                                {status}
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
                                                    <DropdownMenuItem
                                                        onSelect={() =>
                                                            onView?.(invoice._id)
                                                        }
                                                    >
                                                        View Invoice
                                                    </DropdownMenuItem>

                                                    <DropdownMenuItem
                                                        onSelect={() =>
                                                            onEdit?.(invoice._id)
                                                        }
                                                    >
                                                        Edit Invoice
                                                    </DropdownMenuItem>

                                                    <DropdownMenuItem
                                                        onSelect={() =>
                                                            onDuplicate?.(invoice._id)
                                                        }
                                                    >
                                                        Duplicate Invoice
                                                    </DropdownMenuItem>

                                                    <DropdownMenuSeparator />

                                                    <DropdownMenuItem
                                                        onSelect={() =>
                                                            onDownloadPdf?.(
                                                                invoice._id,
                                                            )
                                                        }
                                                    >
                                                        Download PDF
                                                    </DropdownMenuItem>

                                                    <DropdownMenuItem
                                                        onSelect={() =>
                                                            onSend?.(invoice._id)
                                                        }
                                                    >
                                                        Send Invoice
                                                    </DropdownMenuItem>

                                                    {status !== "Paid" && (
                                                        <DropdownMenuItem
                                                            onSelect={() =>
                                                                onMarkAsPaid?.(
                                                                    invoice._id,
                                                                )
                                                            }
                                                        >
                                                            Mark as Paid
                                                        </DropdownMenuItem>
                                                    )}

                                                    <DropdownMenuSeparator />

                                                    <DropdownMenuItem
                                                        className="text-destructive"
                                                        onSelect={() =>
                                                            onDelete?.(invoice._id)
                                                        }
                                                    >
                                                        Delete Invoice
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                );
                            })
                        ) : (
                            <TableRow>
                                <TableCell colSpan={7} className="py-10 text-center text-muted-foreground">
                                    No invoices found.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
};

export default InvoiceTable;

const capitalizeStatus = (status) =>
    (status || "Unknown")
        .replaceAll("_", " ")
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

const formatAmount = (amount) =>
    new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
    }).format(amount || 0);

const formatDate = (date) =>
    date
        ? new Intl.DateTimeFormat("en-IN", {
              day: "2-digit",
              month: "short",
              year: "numeric",
          }).format(new Date(date))
        : "-";
