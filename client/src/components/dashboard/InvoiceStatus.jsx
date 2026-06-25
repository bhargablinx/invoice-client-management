import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Progress } from "@/components/ui/progress";

const invoices = [
    {
        status: "Paid",
        value: 78,
        color: "bg-green-500",
    },
    {
        status: "Pending",
        value: 14,
        color: "bg-yellow-500",
    },
    {
        status: "Overdue",
        value: 8,
        color: "bg-red-500",
    },
];

const InvoiceStatus = () => {
    return (
        <Card className="h-full">
            <CardHeader>
                <CardTitle>Invoice Status</CardTitle>
                <CardDescription>Current invoice distribution</CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
                {invoices.map((invoice) => (
                    <div key={invoice.status} className="space-y-2">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div
                                    className={`size-3 rounded-full ${invoice.color}`}
                                />
                                <span className="font-medium">
                                    {invoice.status}
                                </span>
                            </div>

                            <span className="text-sm text-muted-foreground">
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
