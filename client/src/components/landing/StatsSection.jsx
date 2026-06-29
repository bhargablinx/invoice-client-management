import { useCountUp } from "@/hooks/use-count-up";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

const stats = [
    { value: 10000, suffix: "+", label: "Invoices created" },
    { value: 2500, suffix: "+", label: "Active users" },
    { value: 98, suffix: "%", label: "Customer satisfaction" },
    { value: 2, suffix: " min", label: "Average setup time" },
];

function StatItem({ stat, enabled }) {
    const count = useCountUp(stat.value, { duration: 2200, enabled });

    return (
        <div className="group text-center">
            <p className="text-4xl font-bold tracking-tight transition-transform duration-300 group-hover:scale-110 md:text-5xl">
                <span className="bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
                    {count.toLocaleString()}
                </span>
                <span className="text-primary">{stat.suffix}</span>
            </p>
            <p className="mt-2 text-sm text-muted-foreground transition-colors duration-200 group-hover:text-foreground">
                {stat.label}
            </p>
        </div>
    );
}

export default function StatsSection() {
    const { ref, isInView } = useInView();

    return (
        <section className="px-4 py-20" ref={ref}>
            <div
                className={cn(
                    "mx-auto max-w-7xl rounded-3xl border border-border/60 bg-card/50 px-8 py-16 backdrop-blur-sm transition-shadow duration-500 hover:shadow-lg hover:shadow-primary/5",
                    isInView && "animate-in fade-in zoom-in-95 duration-700",
                )}
            >
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat) => (
                        <StatItem
                            key={stat.label}
                            stat={stat}
                            enabled={isInView}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
