import { AlertCircle, CalendarClock } from "lucide-react";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const formatCurrency = (value) =>
    new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
    }).format(Number(value ?? 0));

const OutstandingPayments = ({ invoices = [] }) => {
    const outstandingInvoices = invoices
        .filter((invoice) => Number(invoice.balanceDue ?? 0) > 0)
        .slice(0, 4);

    return (
        <Card>
            <CardHeader>
                <CardTitle>Outstanding Payments</CardTitle>

                <CardDescription>
                    Payments waiting to be collected
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-5">
                {outstandingInvoices.length ? (
                    outstandingInvoices.map((invoice) => (
                        <div
                            key={invoice._id}
                            className="flex items-center justify-between"
                        >
                            <div>
                                <p className="font-medium">
                                    {invoice.client?.name ?? invoice.invoiceNumber}
                                </p>

                                <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                                    <CalendarClock className="size-3.5" />
                                    Due{" "}
                                    {invoice.dueDate
                                        ? new Date(
                                              invoice.dueDate,
                                          ).toLocaleDateString("en-US", {
                                              day: "2-digit",
                                              month: "short",
                                              year: "numeric",
                                          })
                                        : "soon"}
                                </div>
                            </div>

                            <div className="text-right">
                                <p className="font-semibold">
                                    {formatCurrency(invoice.balanceDue)}
                                </p>

                                <Badge
                                    variant={
                                        invoice.status === "overdue"
                                            ? "destructive"
                                            : "secondary"
                                    }
                                    className="mt-1"
                                >
                                    {invoice.status === "overdue" && (
                                        <AlertCircle className="mr-1 size-3" />
                                    )}
                                    {invoice.status}
                                </Badge>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="rounded-lg border border-dashed p-6 text-sm text-muted-foreground">
                        No outstanding invoices.
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default OutstandingPayments;
