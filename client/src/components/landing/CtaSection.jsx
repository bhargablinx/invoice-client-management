import { Link } from "react-router-dom";
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

export default function CtaSection() {
    const { ref, isInView } = useInView();

    return (
        <section className="px-4 py-24" ref={ref}>
            <div
                className={cn(
                    "relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-chart-1/10 px-8 py-16 text-center md:px-16",
                    isInView && "animate-in fade-in zoom-in-95 duration-700",
                )}
            >
                <div className="pointer-events-none absolute -left-20 -top-20 size-60 rounded-full bg-primary/20 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-20 -right-20 size-60 rounded-full bg-chart-2/20 blur-3xl" />

                <div className="relative">
                    <div className="mx-auto mb-6 flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/30 transition-transform duration-500 hover:rotate-6 hover:scale-110">
                        <Zap className="size-7" />
                    </div>

                    <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                        Ready to simplify your invoicing?
                    </h2>
                    <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
                        Join thousands of freelancers and small businesses who
                        trust InClient to manage their clients and get paid on
                        time.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                        <Button
                            asChild
                            size="lg"
                            className="group h-12 rounded-xl px-8 shadow-lg shadow-primary/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30"
                        >
                            <Link to="/signup">
                                Start for Free
                                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                        </Button>

                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="h-12 rounded-xl px-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50"
                        >
                            <Link to="/login">Sign In</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
