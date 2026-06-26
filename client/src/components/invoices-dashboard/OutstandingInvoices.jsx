import { AlertTriangle, ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const outstandingInvoices = [
    {
        id: "INV-1008",
        client: "Acme Corporation",
        amount: "₹72,000",
        due: "Overdue by 5 Days",
        status: "Overdue",
    },
    {
        id: "INV-1012",
        client: "Pixel Studio",
        amount: "₹38,500",
        due: "Due Tomorrow",
        status: "Pending",
    },
    {
        id: "INV-1015",
        client: "Nova Digital",
        amount: "₹24,200",
        due: "Due in 3 Days",
        status: "Pending",
    },
    {
        id: "INV-1021",
        client: "John Doe",
        amount: "₹18,900",
        due: "Overdue by 2 Days",
        status: "Overdue",
    },
];

const OutstandingInvoices = () => {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <div>
                    <CardTitle>Largest Outstanding Invoices</CardTitle>

                    <CardDescription>
                        Invoices with the highest unpaid balances.
                    </CardDescription>
                </div>

                <Button variant="ghost" size="sm">
                    View All
                    <ArrowUpRight className="ml-2 size-4" />
                </Button>
            </CardHeader>

            <CardContent className="space-y-4">
                {outstandingInvoices.map((invoice) => (
                    <div
                        key={invoice.id}
                        className="flex flex-col gap-4 rounded-lg border p-4 md:flex-row md:items-center md:justify-between"
                    >
                        <div className="space-y-1">
                            <p className="font-semibold">{invoice.id}</p>

                            <p className="text-sm text-muted-foreground">
                                {invoice.client}
                            </p>

                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                <AlertTriangle className="size-3.5" />

                                {invoice.due}
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="text-right">
                                <p className="font-semibold text-lg">
                                    {invoice.amount}
                                </p>

                                <Badge
                                    variant={
                                        invoice.status === "Overdue"
                                            ? "destructive"
                                            : "secondary"
                                    }
                                >
                                    {invoice.status}
                                </Badge>
                            </div>

                            <Button variant="outline" size="sm">
                                View
                            </Button>
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
};

export default OutstandingInvoices;
