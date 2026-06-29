import { UserPlus, FilePlus, Send, Wallet } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

const steps = [
    {
        icon: UserPlus,
        step: "01",
        title: "Add your clients",
        description:
            "Import or create client profiles with contact details and billing preferences.",
    },
    {
        icon: FilePlus,
        step: "02",
        title: "Create invoices",
        description:
            "Build itemized invoices from your service catalog with taxes and due dates.",
    },
    {
        icon: Send,
        step: "03",
        title: "Send & track",
        description:
            "Deliver invoices and monitor status — sent, viewed, paid, or overdue.",
    },
    {
        icon: Wallet,
        step: "04",
        title: "Collect payments",
        description:
            "Record payments, reconcile balances, and watch your revenue grow.",
    },
];

export default function HowItWorksSection() {
    const { ref, isInView } = useInView();

    return (
        <section
            id="how-it-works"
            className="relative overflow-hidden px-4 py-24"
            ref={ref}
        >
            <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

            <div className="mx-auto max-w-7xl">
                <div
                    className={cn(
                        "mx-auto max-w-2xl text-center",
                        isInView &&
                            "animate-in fade-in slide-in-from-bottom-4 duration-700",
                    )}
                >
                    <p className="text-sm font-medium uppercase tracking-wider text-primary">
                        How it works
                    </p>
                    <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                        Four steps to financial clarity
                    </h2>
                    <p className="mt-4 text-muted-foreground">
                        Get up and running in minutes — no complicated setup
                        required.
                    </p>
                </div>

                <div className="relative mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div className="pointer-events-none absolute left-0 right-0 top-16 hidden h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent lg:block" />

                    {steps.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={item.step}
                                className={cn(
                                    "group relative text-center",
                                    isInView &&
                                        "animate-in fade-in slide-in-from-bottom-6",
                                )}
                                style={{
                                    animationDelay: `${index * 150}ms`,
                                    animationFillMode: "both",
                                }}
                            >
                                <div className="relative mx-auto mb-6 flex size-16 items-center justify-center">
                                    <div className="absolute inset-0 rounded-2xl bg-primary/10 transition-all duration-500 group-hover:scale-125 group-hover:bg-primary/20" />
                                    <div className="relative flex size-14 items-center justify-center rounded-2xl border border-primary/20 bg-card shadow-lg transition-all duration-300 group-hover:-translate-y-2 group-hover:border-primary/40 group-hover:shadow-primary/20">
                                        <Icon className="size-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                                    </div>
                                    <span className="absolute -right-1 -top-1 flex size-6 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                                        {index + 1}
                                    </span>
                                </div>

                                <p className="text-xs font-bold uppercase tracking-widest text-primary/60">
                                    Step {item.step}
                                </p>
                                <h3 className="mt-2 text-lg font-semibold transition-colors duration-200 group-hover:text-primary">
                                    {item.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
