import { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
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
import { createPayment } from "@/features/payments/paymentThunk";

const RecordPaymentCard = ({ organizationId, invoices, onPaymentCreated }) => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");
    const [selectedInvoiceId, setSelectedInvoiceId] = useState("");
    const [amount, setAmount] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");
    const [referenceNumber, setReferenceNumber] = useState("");
    const [notes, setNotes] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState("");

    const matchedInvoices = useMemo(() => {
        const query = search.trim().toLowerCase();
        if (!query) return invoices ?? [];

        return (invoices ?? []).filter((invoice) => {
            const invoiceNumber = invoice.invoiceNumber || "";
            const clientName =
                invoice.client?.companyName || invoice.client?.name || "";

            return (
                invoiceNumber.toLowerCase().includes(query) ||
                clientName.toLowerCase().includes(query)
            );
        });
    }, [invoices, search]);

    const selectedInvoice = useMemo(
        () =>
            (invoices ?? []).find((invoice) => invoice._id === selectedInvoiceId) ||
            matchedInvoices[0] ||
            null,
        [invoices, matchedInvoices, selectedInvoiceId],
    );

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError("");

        if (!organizationId) {
            setError("Organization is required.");
            return;
        }

        if (!selectedInvoice?._id) {
            setError("Please select an invoice.");
            return;
        }

        const numericAmount = Number(amount);

        if (!numericAmount || numericAmount <= 0) {
            setError("Enter a valid payment amount.");
            return;
        }

        if (numericAmount > (selectedInvoice.balanceDue || 0)) {
            setError("Amount cannot exceed the remaining balance.");
            return;
        }

        if (!paymentMethod) {
            setError("Select a payment method.");
            return;
        }

        setSubmitting(true);

        try {
            await dispatch(
                createPayment({
                    organizationId,
                    invoiceId: selectedInvoice._id,
                    data: {
                        amount: numericAmount,
                        paymentMethod,
                        paymentDate: new Date().toISOString(),
                        referenceNumber: referenceNumber.trim() || undefined,
                    },
                }),
            ).unwrap();

            setSearch("");
            setSelectedInvoiceId("");
            setAmount("");
            setPaymentMethod("");
            setReferenceNumber("");
            setNotes("");

            if (onPaymentCreated) {
                onPaymentCreated();
            }
        } catch (err) {
            setError(err?.message || err?.data?.message || "Failed to record payment.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Card className="sticky top-4">
            <CardHeader>
                <CardTitle>Record Payment</CardTitle>

                <CardDescription>
                    Search an invoice and record a payment.
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-5">
                {error ? (
                    <div className="rounded-md border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive">
                        {error}
                    </div>
                ) : null}

                {/* Search */}

                <div className="space-y-2">
                    <Label>Search Invoice</Label>

                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                        <Input
                            className="pl-10"
                            placeholder="Invoice number..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label>Select Invoice</Label>

                    <Select
                        value={selectedInvoiceId}
                        onValueChange={setSelectedInvoiceId}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Choose invoice" />
                        </SelectTrigger>

                        <SelectContent>
                            {matchedInvoices.map((invoice) => (
                                <SelectItem key={invoice._id} value={invoice._id}>
                                    {invoice.invoiceNumber} -{" "}
                                    {invoice.client?.companyName ||
                                        invoice.client?.name ||
                                        "Unknown Client"}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                {/* Invoice Preview */}

                <div className="rounded-lg border bg-muted/30 p-4">
                    <div className="space-y-1">
                        <p className="font-medium">
                            {selectedInvoice?.invoiceNumber || "No invoice selected"}
                        </p>

                        <p className="text-sm text-muted-foreground">
                            {selectedInvoice?.client?.companyName ||
                                selectedInvoice?.client?.name ||
                                "Search for an invoice"}
                        </p>

                        <div className="mt-3 flex justify-between text-sm">
                            <span>Total</span>

                            <span>{formatAmount(selectedInvoice?.totalAmount)}</span>
                        </div>

                        <div className="flex justify-between text-sm">
                            <span>Paid</span>

                            <span>{formatAmount(selectedInvoice?.amountPaid)}</span>
                        </div>

                        <div className="flex justify-between font-medium">
                            <span>Remaining</span>

                            <span>{formatAmount(selectedInvoice?.balanceDue)}</span>
                        </div>
                    </div>
                </div>

                {/* Amount */}

                <div className="space-y-2">
                    <Label>Amount Received</Label>

                    <Input
                        type="number"
                        min="0"
                        step="0.01"
                        placeholder="₹0.00"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>

                {/* Method */}

                <div className="space-y-2">
                    <Label>Payment Method</Label>

                    <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select method" />
                        </SelectTrigger>

                        <SelectContent>
                            <SelectItem value="cash">Cash</SelectItem>

                            <SelectItem value="upi">UPI</SelectItem>

                            <SelectItem value="bank_transfer">
                                Bank Transfer
                            </SelectItem>

                            <SelectItem value="credit_card">Card</SelectItem>

                            <SelectItem value="cheque">Cheque</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Reference */}

                <div className="space-y-2">
                    <Label>Transaction Reference</Label>

                    <Input
                        placeholder="Optional"
                        value={referenceNumber}
                        onChange={(e) => setReferenceNumber(e.target.value)}
                    />
                </div>

                {/* Notes */}

                <div className="space-y-2">
                    <Label>Notes</Label>

                    <Textarea
                        rows={3}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                    />
                </div>

                <Button
                    className="w-full"
                    onClick={handleSubmit}
                    disabled={submitting}
                >
                    {submitting ? "Recording..." : "Record Payment"}
                </Button>
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
