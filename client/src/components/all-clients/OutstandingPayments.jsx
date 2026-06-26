import { AlertCircle, CalendarClock } from "lucide-react";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

const dues = [
    {
        id: 1,
        client: "Acme Corporation",
        amount: "₹18,000",
        due: "Tomorrow",
        status: "Upcoming",
    },
    {
        id: 2,
        client: "John Doe",
        amount: "₹7,200",
        due: "2 Days",
        status: "Upcoming",
    },
    {
        id: 3,
        client: "ABC Pvt Ltd",
        amount: "₹4,800",
        due: "5 Days Overdue",
        status: "Overdue",
    },
];

const OutstandingPayments = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Outstanding Payments</CardTitle>

                <CardDescription>
                    Payments waiting to be collected
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-5">
                {dues.map((payment) => (
                    <div
                        key={payment.id}
                        className="flex items-center justify-between"
                    >
                        <div>
                            <p className="font-medium">{payment.client}</p>

                            <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                                <CalendarClock className="size-3.5" />
                                {payment.due}
                            </div>
                        </div>

                        <div className="text-right">
                            <p className="font-semibold">{payment.amount}</p>

                            <Badge
                                variant={
                                    payment.status === "Overdue"
                                        ? "destructive"
                                        : "secondary"
                                }
                                className="mt-1"
                            >
                                {payment.status === "Overdue" && (
                                    <AlertCircle className="mr-1 size-3" />
                                )}
                                {payment.status}
                            </Badge>
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
};

export default OutstandingPayments;
