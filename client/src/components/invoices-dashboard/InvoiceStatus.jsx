import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Progress } from "@/components/ui/progress";

const InvoiceStatus = ({ statusItems }) => {
    return (
        <Card className="h-full">
            <CardHeader>
                <CardTitle>Invoice Status</CardTitle>

                <CardDescription>Current invoice distribution</CardDescription>
            </CardHeader>

            <CardContent className="space-y-8">
                {statusItems.map((invoice) => (
                    <div key={invoice.status} className="space-y-3">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium">{invoice.status}</p>

                                <p className="text-sm text-muted-foreground">
                                    {invoice.count} invoices
                                </p>
                            </div>

                            <span className="font-semibold">
                                {invoice.value}%
                            </span>
                        </div>

                        <Progress value={invoice.value} />
                    </div>
                ))}
            </CardContent>
        </Card>
    );
};

export default InvoiceStatus;
