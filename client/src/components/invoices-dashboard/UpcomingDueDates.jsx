import { CalendarClock, CircleAlert } from "lucide-react";

import { Badge } from "@/components/ui/badge";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const UpcomingDueDates = ({ invoices }) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Upcoming Due Dates</CardTitle>

                <CardDescription>Invoices requiring attention</CardDescription>
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

                            <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                                <CalendarClock className="size-3.5" />
                                {invoice.due}
                            </div>
                        </div>

                        <div className="text-right">
                            <p className="font-semibold">{invoice.amount}</p>

                            <Badge
                                className="mt-1"
                                variant={
                                    invoice.status === "Overdue"
                                        ? "destructive"
                                        : "secondary"
                                }
                            >
                                {invoice.status === "Overdue" && (
                                    <CircleAlert className="mr-1 size-3" />
                                )}

                                {invoice.status}
                            </Badge>
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
};

export default UpcomingDueDates;
