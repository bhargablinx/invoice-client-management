import { Loader2 } from "lucide-react";

export default function Loading() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-background">
            <div className="flex flex-col items-center">
                <div className="mb-6 flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-primary animate-pulse" />
                    <span className="text-2xl font-bold">InvoiceFlow</span>
                </div>

                <Loader2 className="h-10 w-10 animate-spin text-primary" />

                <p className="mt-4 text-sm text-muted-foreground">
                    Loading your dashboard...
                </p>
            </div>
        </div>
    );
}
