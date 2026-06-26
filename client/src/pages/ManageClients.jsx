import { useState } from "react";

import AddClientDialog from "@/components/manage-clients/AddClientDialog";
import ClientFilters from "@/components/manage-clients/ClientFilters";
import ClientStats from "@/components/manage-clients/ClientStats";
import ClientsHeader from "@/components/manage-clients/ClientsHeader";
import ClientsTable from "@/components/manage-clients/ClientsTable";
import ArchivedClients from "@/components/manage-clients/ArchivedClients";

const ManageClients = () => {
    const [dialogOpen, setDialogOpen] = useState(false);

    return (
        <>
            <AddClientDialog open={dialogOpen} onOpenChange={setDialogOpen} />

            <div className="space-y-6">
                <ClientsHeader onAddClient={() => setDialogOpen(true)} />

                <ClientStats />

                <ClientFilters />

                {/* ClientsTable */}
                <ClientsTable />

                {/* ArchivedClients */}
                <ArchivedClients />
            </div>
        </>
    );
};

export default ManageClients;
