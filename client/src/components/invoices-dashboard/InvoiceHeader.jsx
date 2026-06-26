import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

const InvoiceHeader = () => {
    return (
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Invoices</h1>

                <p className="text-muted-foreground">
                    Monitor invoice performance, payments, and billing activity.
                </p>
            </div>
        </div>
    );
};

export default InvoiceHeader;
