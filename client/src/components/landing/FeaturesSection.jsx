import { useRef } from "react";
import {
    FileText,
    Users,
    CreditCard,
    BarChart3,
    Building2,
    Bell,
} from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

const features = [
    {
        icon: FileText,
        title: "Smart Invoicing",
        description:
            "Create professional invoices in seconds with customizable templates and automatic numbering.",
        color: "text-chart-1",
        bg: "bg-chart-1/10",
    },
    {
        icon: Users,
        title: "Client Management",
        description:
            "Keep every client detail organized — contacts, history, and outstanding balances in one place.",
        color: "text-chart-2",
        bg: "bg-chart-2/10",
    },
    {
        icon: CreditCard,
        title: "Payment Tracking",
        description:
            "Record payments, send reminders, and know exactly what's paid, pending, or overdue.",
        color: "text-chart-3",
        bg: "bg-chart-3/10",
    },
    {
        icon: BarChart3,
        title: "Revenue Insights",
        description:
            "Visual dashboards show revenue trends, invoice status, and client growth at a glance.",
        color: "text-chart-4",
        bg: "bg-chart-4/10",
    },
    {
        icon: Building2,
        title: "Multi-Organization",
        description:
            "Manage multiple businesses or teams with role-based access and seamless switching.",
        color: "text-primary",
        bg: "bg-primary/10",
    },
    {
        icon: Bell,
        title: "Team Collaboration",
        description:
            "Invite members, assign roles, and work together on clients and invoices effortlessly.",
        color: "text-chart-5",
        bg: "bg-chart-5/10",
    },
];

function FeatureCard({ feature, index, isInView }) {
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        const card = cardRef.current;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    };

    const handleMouseLeave = () => {
        const card = cardRef.current;
        if (!card) return;
        card.style.transform =
            "perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)";
    };

    const Icon = feature.icon;

    return (
        <Card
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={cn(
                "cursor-default border-border/60 bg-card/80 backdrop-blur-sm transition-[box-shadow,transform] duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10",
                isInView
                    ? "animate-in fade-in slide-in-from-bottom-4"
                    : "opacity-0",
            )}
            style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "both",
                transition: "transform 0.15s ease-out, box-shadow 0.3s ease",
            }}
        >
            <CardHeader>
                <div
                    className={cn(
                        "mb-2 flex size-11 items-center justify-center rounded-xl transition-transform duration-300 group-hover/card:scale-110",
                        feature.bg,
                    )}
                >
                    <Icon className={cn("size-5", feature.color)} />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
                <CardDescription className="leading-relaxed">
                    {feature.description}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="h-0.5 w-0 rounded-full bg-primary transition-all duration-500 group-hover/card:w-full" />
            </CardContent>
        </Card>
    );
}

export default function FeaturesSection() {
    const { ref, isInView } = useInView();

    return (
        <section id="features" className="px-4 py-24" ref={ref}>
            <div className="mx-auto max-w-7xl">
                <div
                    className={cn(
                        "mx-auto max-w-2xl text-center",
                        isInView && "animate-in fade-in slide-in-from-bottom-4 duration-700",
                    )}
                >
                    <p className="text-sm font-medium uppercase tracking-wider text-primary">
                        Features
                    </p>
                    <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                        Everything you need to get paid faster
                    </h2>
                    <p className="mt-4 text-muted-foreground">
                        From first invoice to final payment — InClient handles
                        the entire workflow so you can focus on your work.
                    </p>
                </div>

                <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={feature.title}
                            feature={feature}
                            index={index}
                            isInView={isInView}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
