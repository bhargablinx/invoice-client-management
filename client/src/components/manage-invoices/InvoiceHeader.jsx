import { Link } from "react-router-dom";

import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

const InvoiceHeader = ({ organizationName }) => {
    return (
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">
                    Manage Invoices
                </h1>

                <p className="text-muted-foreground">
                    Create, edit, send and manage invoices for your clients.
                    {organizationName ? (
                        <>
                            {" "}
                            for{" "}
                            <span className="font-medium text-foreground">
                                {organizationName}
                            </span>
                            .
                        </>
                    ) : (
                        "."
                    )}
                </p>
            </div>

            <Button asChild>
                <Link to="/invoices/new">
                    <Plus className="mr-2 size-4" />
                    Create Invoice
                </Link>
            </Button>
        </div>
    );
};

export default InvoiceHeader;
