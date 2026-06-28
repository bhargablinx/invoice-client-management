import { FilePenLine, Pencil, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const DraftInvoices = ({ invoices }) => {
    const drafts = invoices
        .filter((invoice) => invoice.status === "draft")
        .slice(0, 3)
        .map((invoice) => ({
            id: invoice.invoiceNumber,
            client:
                invoice.client?.companyName || invoice.client?.name || "Unknown Client",
            created: formatRelative(invoice.createdAt),
        }));

    return (
        <Card>
            <CardHeader>
                <CardTitle>Draft Invoices</CardTitle>

                <CardDescription>
                    Continue editing unfinished invoices.
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
                {drafts.length ? (
                    drafts.map((draft) => (
                        <div
                            key={draft.id}
                            className="flex flex-col gap-4 rounded-lg border p-4 md:flex-row md:items-center md:justify-between"
                        >
                            <div>
                                <p className="font-semibold">{draft.id}</p>

                                <p className="text-sm text-muted-foreground">
                                    {draft.client}
                                </p>

                                <p className="mt-1 text-xs text-muted-foreground">
                                    Created {draft.created}
                                </p>
                            </div>

                            <div className="flex gap-2">
                                <Button variant="outline">
                                    <FilePenLine className="mr-2 size-4" />
                                    Continue Editing
                                </Button>

                                <Button variant="ghost" size="icon">
                                    <Trash2 className="size-4 text-destructive" />
                                </Button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-sm text-muted-foreground">
                        No draft invoices found.
                    </p>
                )}
            </CardContent>
        </Card>
    );
};

export default DraftInvoices;

const formatRelative = (date) => {
    if (!date) return "-";

    const diffDays = Math.max(
        0,
        Math.round((Date.now() - new Date(date).getTime()) / (24 * 60 * 60 * 1000)),
    );

    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Yesterday";
    return `${diffDays} days ago`;
};
