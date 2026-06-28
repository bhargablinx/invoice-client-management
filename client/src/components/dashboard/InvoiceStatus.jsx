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

            <CardContent className="space-y-6">
                {statusItems.map((invoice) => (
                    <div key={invoice.status} className="space-y-2">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className={`size-3 rounded-full ${invoice.color}`} />
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
