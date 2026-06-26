import { Badge } from "@/components/ui/badge";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const invoices = [
    {
        id: "INV-1024",
        client: "Acme Corporation",
        amount: "₹72,000",
        status: "Paid",
    },
    {
        id: "INV-1025",
        client: "John Doe",
        amount: "₹18,500",
        status: "Pending",
    },
    {
        id: "INV-1026",
        client: "Pixel Studio",
        amount: "₹9,400",
        status: "Overdue",
    },
    {
        id: "INV-1027",
        client: "Nova Digital",
        amount: "₹32,000",
        status: "Paid",
    },
];

const getVariant = (status) => {
    switch (status) {
        case "Paid":
            return "default";
        case "Pending":
            return "secondary";
        case "Overdue":
            return "destructive";
        default:
            return "outline";
    }
};

const RecentInvoices = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Recent Invoices</CardTitle>

                <CardDescription>Latest invoices created</CardDescription>
            </CardHeader>

            <CardContent className="space-y-5">
                {invoices.map((invoice) => (
                    <div
                        key={invoice.id}
                        className="flex items-center justify-between"
                    >
                        <div>
                            <p className="font-medium">{invoice.id}</p>

                            <p className="text-sm text-muted-foreground">
                                {invoice.client}
                            </p>
                        </div>

                        <div className="text-right">
                            <p className="font-semibold">{invoice.amount}</p>

                            <Badge
                                className="mt-1"
                                variant={getVariant(invoice.status)}
                            >
                                {invoice.status}
                            </Badge>
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
};

export default RecentInvoices;
