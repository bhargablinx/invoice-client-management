import { CreditCard } from "lucide-react";

const PaymentHeader = ({ organizationName }) => {
    return (
        <div>
            <div className="flex items-center gap-3">
                <CreditCard className="size-7 text-primary" />

                <h1 className="text-3xl font-bold tracking-tight">Payments</h1>
            </div>

            <p className="mt-2 text-muted-foreground">
                Record payments, track payment history, and reconcile invoice
                balances.
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
    );
};

export default PaymentHeader;
