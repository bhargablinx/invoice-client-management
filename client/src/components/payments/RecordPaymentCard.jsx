import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const RecordPaymentCard = ({ payment }) => {
    return (
        <Card className="sticky top-4">
            <CardHeader>
                <CardTitle>Record Payment</CardTitle>

                <CardDescription>
                    Search an invoice and record a payment.
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-5">
                {/* Search */}

                <div className="space-y-2">
                    <Label>Search Invoice</Label>

                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                        <Input
                            className="pl-10"
                            placeholder="Invoice number..."
                        />
                    </div>
                </div>

                {/* Invoice Preview */}

                <div className="rounded-lg border bg-muted/30 p-4">
                    <div className="space-y-1">
                        <p className="font-medium">
                            {payment?.invoice?.invoiceNumber || "No invoice selected"}
                        </p>

                        <p className="text-sm text-muted-foreground">
                            {payment?.invoice?.client?.companyName ||
                                payment?.invoice?.client?.name ||
                                "Search or load a payment"}
                        </p>

                        <div className="mt-3 flex justify-between text-sm">
                            <span>Total</span>

                            <span>{formatAmount(payment?.invoice?.totalAmount)}</span>
                        </div>

                        <div className="flex justify-between text-sm">
                            <span>Paid</span>

                            <span>{formatAmount(payment?.invoice?.amountPaid)}</span>
                        </div>

                        <div className="flex justify-between font-medium">
                            <span>Remaining</span>

                            <span>{formatAmount(payment?.invoice?.balanceDue)}</span>
                        </div>
                    </div>
                </div>

                {/* Amount */}

                <div className="space-y-2">
                    <Label>Amount Received</Label>

                    <Input placeholder="₹0.00" />
                </div>

                {/* Method */}

                <div className="space-y-2">
                    <Label>Payment Method</Label>

                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Select method" />
                        </SelectTrigger>

                        <SelectContent>
                            <SelectItem value="cash">Cash</SelectItem>

                            <SelectItem value="upi">UPI</SelectItem>

                            <SelectItem value="bank">Bank Transfer</SelectItem>

                            <SelectItem value="card">Card</SelectItem>

                            <SelectItem value="cheque">Cheque</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Reference */}

                <div className="space-y-2">
                    <Label>Transaction Reference</Label>

                    <Input placeholder="Optional" />
                </div>

                {/* Notes */}

                <div className="space-y-2">
                    <Label>Notes</Label>

                    <Textarea rows={3} />
                </div>

                <Button className="w-full">Record Payment</Button>
            </CardContent>
        </Card>
    );
};

export default RecordPaymentCard;

const formatAmount = (amount) =>
    new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
    }).format(amount || 0);
