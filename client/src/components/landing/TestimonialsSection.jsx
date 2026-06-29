import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

const testimonials = [
    {
        quote: "InClient cut my invoicing time in half. I used to juggle spreadsheets — now everything lives in one place.",
        name: "Sarah Chen",
        role: "Freelance Designer",
        initials: "SC",
    },
    {
        quote: "The payment tracking alone saved us hours every month. Our team finally knows what's outstanding at a glance.",
        name: "Marcus Webb",
        role: "Agency Owner",
        initials: "MW",
    },
    {
        quote: "Clean, fast, and exactly what a small business needs. We switched from three tools to just InClient.",
        name: "Priya Sharma",
        role: "Consultant",
        initials: "PS",
    },
];

export default function TestimonialsSection() {
    const { ref, isInView } = useInView();

    return (
        <section className="px-4 py-24" ref={ref}>
            <div className="mx-auto max-w-7xl">
                <div
                    className={cn(
                        "mx-auto max-w-2xl text-center",
                        isInView &&
                            "animate-in fade-in slide-in-from-bottom-4 duration-700",
                    )}
                >
                    <p className="text-sm font-medium uppercase tracking-wider text-primary">
                        Testimonials (demo)
                    </p>
                    <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                        Loved by freelancers & teams
                    </h2>
                </div>

                <div className="mt-16 grid gap-6 md:grid-cols-3">
                    {testimonials.map((item, index) => (
                        <Card
                            key={item.name}
                            className={cn(
                                "group relative overflow-hidden border-border/60 bg-card/80 transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10",
                                isInView &&
                                    "animate-in fade-in slide-in-from-bottom-6",
                            )}
                            style={{
                                animationDelay: `${index * 120}ms`,
                                animationFillMode: "both",
                            }}
                        >
                            <CardContent className="pt-6">
                                <Quote className="size-8 text-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:text-primary/40" />
                                <p className="mt-4 leading-relaxed text-muted-foreground">
                                    "{item.quote}"
                                </p>
                                <div className="mt-6 flex items-center gap-3">
                                    <Avatar className="size-10 ring-2 ring-primary/20 transition-all duration-300 group-hover:ring-primary/40">
                                        <AvatarFallback className="bg-primary/10 text-sm font-medium text-primary">
                                            {item.initials}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="text-sm font-semibold">
                                            {item.name}
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                            {item.role}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
