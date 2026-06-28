import { Building2, FileText } from "lucide-react";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const formatCurrency = (value) =>
    new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
    }).format(Number(value ?? 0));

const TopClients = ({ clients = [] }) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Top Clients</CardTitle>

                <CardDescription>
                    Highest revenue generating clients
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-5">
                {clients.length ? (
                    clients.map((client) => (
                        <div
                            key={client.clientId ?? client._id}
                            className="flex items-center justify-between"
                        >
                            <div className="flex items-center gap-3">
                                <div className="rounded-lg bg-primary/10 p-2">
                                    <Building2 className="size-5 text-primary" />
                                </div>

                                <div>
                                    <p className="font-medium">
                                        {client.name}
                                    </p>

                                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                        <FileText className="size-3.5" />
                                        {client.totalInvoices ?? 0} invoices
                                    </div>
                                </div>
                            </div>

                            <p className="font-semibold">
                                {formatCurrency(client.totalRevenue ?? 0)}
                            </p>
                        </div>
                    ))
                ) : (
                    <div className="rounded-lg border border-dashed p-6 text-sm text-muted-foreground">
                        No top clients found.
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default TopClients;
