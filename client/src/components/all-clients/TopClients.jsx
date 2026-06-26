import { Building2, FileText } from "lucide-react";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const clients = [
    {
        id: 1,
        name: "Acme Corporation",
        revenue: "₹2,84,000",
        invoices: 24,
    },
    {
        id: 2,
        name: "Pixel Studio",
        revenue: "₹1,76,000",
        invoices: 18,
    },
    {
        id: 3,
        name: "TechNova",
        revenue: "₹98,000",
        invoices: 12,
    },
    {
        id: 4,
        name: "John Doe",
        revenue: "₹72,500",
        invoices: 9,
    },
];

const TopClients = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Top Clients</CardTitle>

                <CardDescription>
                    Highest revenue generating clients
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-5">
                {clients.map((client) => (
                    <div
                        key={client.id}
                        className="flex items-center justify-between"
                    >
                        <div className="flex items-center gap-3">
                            <div className="rounded-lg bg-primary/10 p-2">
                                <Building2 className="size-5 text-primary" />
                            </div>

                            <div>
                                <p className="font-medium">{client.name}</p>

                                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                    <FileText className="size-3.5" />
                                    {client.invoices} invoices
                                </div>
                            </div>
                        </div>

                        <p className="font-semibold">{client.revenue}</p>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
};

export default TopClients;
