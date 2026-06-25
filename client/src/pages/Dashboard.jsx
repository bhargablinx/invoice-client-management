import InvoiceStatus from "@/components/dashboard/InvoiceStatus";
import QuickActions from "@/components/dashboard/QuickActions";
import RecentActivity from "@/components/dashboard/RecentActivity";
import RecentInvoices from "@/components/dashboard/RecentInvoices";
import RevenueChart from "@/components/dashboard/RevenueChart";
import StatCards from "@/components/dashboard/StatCard";
import TopServices from "@/components/dashboard/TopServices";
import UpcomingPayments from "@/components/dashboard/UpcomingPayments";

const Dashboard = () => {
    return (
        <div className="space-y-6">
            <StatCards />

            <div className="grid gap-6 lg:grid-cols-3">
                <div className="lg:col-span-2">
                    <RevenueChart />
                </div>

                <InvoiceStatus />
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
                <RecentInvoices />
                <UpcomingPayments />
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
                <div className="lg:col-span-2">
                    <RecentActivity />
                </div>

                <TopServices />
            </div>

            <QuickActions />
        </div>
    );
};

export default Dashboard;
