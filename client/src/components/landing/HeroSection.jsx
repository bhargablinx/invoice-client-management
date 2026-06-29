import { Link } from "react-router-dom";
import {
    ArrowRight,
    CheckCircle2,
    Sparkles,
    TrendingUp,
    Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const floatingItems = [
    { label: "INV-2041", amount: "$4,200", status: "Paid", delay: "0s" },
    { label: "INV-2042", amount: "$1,850", status: "Sent", delay: "0.5s" },
    { label: "INV-2043", amount: "$920", status: "Draft", delay: "1s" },
];

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden px-4 pb-24 pt-12 md:pb-32 md:pt-20">
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-1/4 top-10 h-72 w-72 animate-pulse rounded-full bg-primary/15 blur-3xl" />
                <div
                    className="absolute bottom-10 right-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
                    style={{ animation: "pulse 4s ease-in-out infinite 1s" }}
                />
                <div
                    className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl"
                    style={{ animation: "spin 30s linear infinite" }}
                />
            </div>

            <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
                <div className="animate-in fade-in slide-in-from-left-8 duration-700">
                    <Badge
                        variant="secondary"
                        className="mb-6 gap-1.5 px-3 py-1.5 transition-all duration-300 hover:scale-105 hover:bg-primary/10"
                    >
                        <Sparkles className="size-3.5 text-primary" />
                        Invoice & client management, simplified
                    </Badge>

                    <h1 className="text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
                        Run your business with{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10 bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                                InClient
                            </span>
                            <span className="absolute -bottom-1 left-0 h-3 w-full origin-left scale-x-0 animate-[scale-x_0.8s_ease-out_0.5s_forwards] rounded-full bg-primary/20" />
                        </span>
                    </h1>

                    <p className="mt-6 max-w-lg text-lg text-muted-foreground">
                        Create invoices, track payments, and manage client
                        relationships, all in one beautiful workspace built for
                        freelancers and growing teams.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-4">
                        <Button
                            asChild
                            size="lg"
                            className="group h-12 rounded-xl px-6 shadow-lg shadow-primary/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30"
                        >
                            <Link to="/signup">
                                Get Started Free
                                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                        </Button>

                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="h-12 rounded-xl px-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/5"
                        >
                            <Link to="/login">Sign In</Link>
                        </Button>
                    </div>

                    <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                        {[
                            "No credit card required",
                            "Free forever plan",
                            "Setup in 2 minutes",
                        ].map((item) => (
                            <span
                                key={item}
                                className="flex items-center gap-2 transition-colors duration-200 hover:text-foreground"
                            >
                                <CheckCircle2 className="size-4 text-primary" />
                                {item}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="relative animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
                    <div
                        className="relative mx-auto max-w-md lg:max-w-none"
                        style={{ animation: "float 6s ease-in-out infinite" }}
                    >
                        <div className="rounded-3xl border border-border/60 bg-card/80 p-6 shadow-2xl shadow-primary/10 backdrop-blur-xl transition-transform duration-500 hover:scale-[1.02]">
                            <div className="mb-6 flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                                        Dashboard
                                    </p>
                                    <p className="mt-1 text-2xl font-bold">
                                        $24,580
                                    </p>
                                    <p className="flex items-center gap-1 text-xs text-primary">
                                        <TrendingUp className="size-3" />
                                        +18.2% this month
                                    </p>
                                </div>
                                <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 hover:rotate-12">
                                    <Users className="size-6" />
                                </div>
                            </div>

                            <div className="space-y-3">
                                {floatingItems.map((item, i) => (
                                    <div
                                        key={item.label}
                                        className={cn(
                                            "flex items-center justify-between rounded-xl border border-border/50 bg-background/60 px-4 py-3 transition-all duration-300 hover:-translate-x-1 hover:border-primary/30 hover:bg-primary/5 hover:shadow-md",
                                            "animate-in fade-in slide-in-from-right-4",
                                        )}
                                        style={{
                                            animationDelay: `${400 + i * 150}ms`,
                                            animationFillMode: "both",
                                        }}
                                    >
                                        <div>
                                            <p className="text-sm font-medium">
                                                {item.label}
                                            </p>
                                            <p className="text-xs text-muted-foreground">
                                                Acme Corp
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm font-semibold">
                                                {item.amount}
                                            </p>
                                            <Badge
                                                variant={
                                                    item.status === "Paid"
                                                        ? "default"
                                                        : "secondary"
                                                }
                                                className="mt-0.5 transition-transform duration-200 hover:scale-110"
                                            >
                                                {item.status}
                                            </Badge>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 h-2 overflow-hidden rounded-full bg-muted">
                                <div
                                    className="h-full rounded-full bg-gradient-to-r from-primary to-chart-2 transition-all duration-1000"
                                    style={{ width: "72%" }}
                                />
                            </div>
                            <p className="mt-2 text-xs text-muted-foreground">
                                72% of invoices collected on time
                            </p>
                        </div>

                        <div
                            className="absolute -right-4 -top-4 rounded-2xl border bg-card px-4 py-3 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:-right-8"
                            style={{
                                animation: "float 5s ease-in-out infinite 0.5s",
                            }}
                        >
                            <p className="text-xs text-muted-foreground">
                                New client
                            </p>
                            <p className="font-semibold">+12 this week</p>
                        </div>

                        <div
                            className="absolute -bottom-4 -left-4 rounded-2xl border bg-card px-4 py-3 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:-left-8"
                            style={{
                                animation: "float 7s ease-in-out infinite 1s",
                            }}
                        >
                            <p className="text-xs text-muted-foreground">
                                Payment received
                            </p>
                            <p className="font-semibold text-primary">
                                +$3,400
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-12px); }
                }
                @keyframes scale-x {
                    to { transform: scaleX(1); }
                }
            `}</style>
        </section>
    );
}
