import { FilePenLine, Pencil, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const drafts = [
    {
        id: "DRAFT-001",
        client: "Acme Corporation",
        created: "Today",
    },
    {
        id: "DRAFT-002",
        client: "John Doe",
        created: "Yesterday",
    },
    {
        id: "DRAFT-003",
        client: "Pixel Studio",
        created: "3 days ago",
    },
];

const DraftInvoices = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Draft Invoices</CardTitle>

                <CardDescription>
                    Continue editing unfinished invoices.
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
                {drafts.map((draft) => (
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
                ))}
            </CardContent>
        </Card>
    );
};

export default DraftInvoices;
