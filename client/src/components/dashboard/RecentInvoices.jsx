import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";

const invoices = [
    {
        id: "INV-1001",
        client: "Acme Corp",
        amount: "₹18,500",
        status: "Paid",
    },
    {
        id: "INV-1002",
        client: "John Doe",
        amount: "₹7,200",
        status: "Pending",
    },
    {
        id: "INV-1003",
        client: "ABC Pvt Ltd",
        amount: "₹12,900",
        status: "Overdue",
    },
    {
        id: "INV-1004",
        client: "Pixel Studio",
        amount: "₹4,600",
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

            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Invoice</TableHead>
                            <TableHead>Client</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead>Status</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {invoices.map((invoice) => (
                            <TableRow key={invoice.id}>
                                <TableCell className="font-medium">
                                    {invoice.id}
                                </TableCell>

                                <TableCell>{invoice.client}</TableCell>

                                <TableCell>{invoice.amount}</TableCell>

                                <TableCell>
                                    <Badge variant={getVariant(invoice.status)}>
                                        {invoice.status}
                                    </Badge>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
};

export default RecentInvoices;
