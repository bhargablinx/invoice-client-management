import { Badge } from "@/components/ui/badge";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

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

const RecentInvoices = ({ invoices }) => {
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
