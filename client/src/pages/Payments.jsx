import PaymentHeader from "@/components/payments/PaymentHeader";
import PaymentStats from "@/components/payments/PaymentStats";
import PaymentTable from "@/components/payments/PaymentTable";
import RecordPaymentCard from "@/components/payments/RecordPaymentCard";

const Payments = () => {
    return (
        <div className="space-y-6">
            <PaymentHeader />

            <PaymentStats />

            <div className="grid gap-6 xl:grid-cols-3">
                <div className="xl:col-span-2">
                    <PaymentTable />
                </div>

                <RecordPaymentCard />
            </div>
        </div>
    );
};

export default Payments;
