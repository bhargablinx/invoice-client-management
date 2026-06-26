import InvoiceHeader from "@/components/invoices-dashboard/InvoiceHeader";
import InvoiceStats from "@/components/invoices-dashboard/InvoiceStats";
import InvoiceStatus from "@/components/invoices-dashboard/InvoiceStatus";
import OutstandingInvoices from "@/components/invoices-dashboard/OutstandingInvoices";
import RecentInvoices from "@/components/invoices-dashboard/RecentInvoices";
import RevenueChart from "@/components/invoices-dashboard/RevenueChart";
import UpcomingDueDates from "@/components/invoices-dashboard/UpcomingDueDates";

const ViewInvoices = () => {
    return (
        <div className="space-y-6">
            <InvoiceHeader />

            <InvoiceStats />

            <div className="grid gap-6 lg:grid-cols-3">
                <div className="lg:col-span-2">
                    <RevenueChart />
                </div>

                {/* InvoiceStatus */}
                <InvoiceStatus />
            </div>

            {/* RecentInvoices */}
            <RecentInvoices />

            {/* UpcomingDueDates */}
            <UpcomingDueDates />

            {/* OutstandingInvoices */}
            <OutstandingInvoices />
        </div>
    );
};

export default ViewInvoices;
