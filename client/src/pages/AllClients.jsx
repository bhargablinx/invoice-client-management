import ClientGrowthChart from "@/components/all-clients/ClientGrowthChart";
import ClientStats from "@/components/all-clients/ClientStats";
import ClientStatus from "@/components/all-clients/ClientStatus";
import OutstandingPayments from "@/components/all-clients/OutstandingPayments";
import RecentClients from "@/components/all-clients/RecentClients";
import TopClients from "@/components/all-clients/TopClients";

const AllClients = () => {
    return (
        <div className="space-y-6">
            {/* Header */}

            <div>
                <h1 className="text-3xl font-bold tracking-tight">Clients</h1>

                <p className="text-muted-foreground">
                    Monitor your clients, payments, and overall client
                    performance.
                </p>
            </div>

            {/* Statistics */}

            <ClientStats />

            {/* Analytics */}

            <div className="grid gap-6 lg:grid-cols-3">
                <div className="lg:col-span-2">
                    <ClientGrowthChart />
                </div>

                <ClientStatus />
            </div>

            {/* Insights */}

            <div className="grid gap-6 lg:grid-cols-2">
                <TopClients />

                <OutstandingPayments />
            </div>

            {/* Recently Added */}

            <RecentClients />
        </div>
    );
};

export default AllClients;
