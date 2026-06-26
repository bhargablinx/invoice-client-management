import { UserPlus } from "lucide-react";

import { Button } from "@/components/ui/button";

const ClientsHeader = ({ onAddClient }) => {
    return (
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">
                    Manage Clients
                </h1>

                <p className="text-muted-foreground">
                    Add, edit, archive, and organize your clients.
                </p>
            </div>

            <Button onClick={onAddClient}>
                <UserPlus className="mr-2 size-4" />
                Add Client
            </Button>
        </div>
    );
};

export default ClientsHeader;
