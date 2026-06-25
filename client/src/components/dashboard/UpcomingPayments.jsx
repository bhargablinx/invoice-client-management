import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const payments = [
    {
        client: "Acme Corp",
        due: "Tomorrow",
        amount: "₹18,500",
    },
    {
        client: "John Doe",
        due: "In 2 Days",
        amount: "₹7,200",
    },
    {
        client: "Pixel Studio",
        due: "In 5 Days",
        amount: "₹12,000",
    },
];

const UpcomingPayments = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Upcoming Payments</CardTitle>
                <CardDescription>Payments due soon</CardDescription>
            </CardHeader>

            <CardContent className="space-y-5">
                {payments.map((payment) => (
                    <div
                        key={payment.client}
                        className="flex items-center justify-between"
                    >
                        <div className="flex items-center gap-3">
                            <Avatar>
                                <AvatarFallback>
                                    {payment.client
                                        .split(" ")
                                        .map((word) => word[0])
                                        .join("")}
                                </AvatarFallback>
                            </Avatar>

                            <div>
                                <p className="font-medium">{payment.client}</p>

                                <p className="text-sm text-muted-foreground">
                                    {payment.due}
                                </p>
                            </div>
                        </div>

                        <span className="font-semibold">{payment.amount}</span>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
};

export default UpcomingPayments;
