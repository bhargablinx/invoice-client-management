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

const getVariant = (status) => {
    switch (status) {
        case "Completed":
            return "default";
        case "Pending":
            return "secondary";
        case "Failed":
            return "destructive";
        default:
            return "outline";
    }
};

const PaymentTable = ({ payments, onView, onDownloadReceipt, onDelete }) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Payment History</CardTitle>

                <CardDescription>All recorded payments.</CardDescription>
            </CardHeader>

            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Payment</TableHead>
                            <TableHead>Invoice</TableHead>
                            <TableHead>Client</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Method</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead />
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {payments.length ? (
                            payments.map((payment) => (
                                <TableRow key={payment.id}>
                                    <TableCell className="font-medium">
                                        {payment.id}
                                    </TableCell>

                                    <TableCell>{payment.invoice}</TableCell>

                                    <TableCell>{payment.client}</TableCell>

                                    <TableCell>{payment.date}</TableCell>

                                    <TableCell>{payment.method}</TableCell>

                                    <TableCell className="text-right font-medium">
                                        {payment.amount}
                                    </TableCell>

                                    <TableCell>
                                        <Badge
                                            variant={getVariant(payment.status)}
                                        >
                                            {payment.status}
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
                                                <DropdownMenuItem
                                                    onSelect={() =>
                                                        onView?.(payment)
                                                    }
                                                >
                                                    View Payment Details
                                                </DropdownMenuItem>

                                                <DropdownMenuItem>
                                                    View Invoice
                                                </DropdownMenuItem>

                                                <DropdownMenuSeparator />

                                                <DropdownMenuItem
                                                    onSelect={() =>
                                                        onDownloadReceipt?.(
                                                            payment,
                                                        )
                                                    }
                                                >
                                                    Download Receipt
                                                </DropdownMenuItem>

                                                <DropdownMenuSeparator />

                                                <DropdownMenuItem
                                                    className="text-destructive"
                                                    onSelect={() =>
                                                        onDelete?.(payment)
                                                    }
                                                >
                                                    Delete Payment
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={8} className="py-10 text-center text-muted-foreground">
                                    No payments found.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
};

export default PaymentTable;
