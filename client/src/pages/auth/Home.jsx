import { ArrowRight, BarChart3, FileText, Users, Wallet } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
    const features = [
        {
            icon: FileText,
            title: "Invoice Creation",
            description: "Generate professional invoices in seconds.",
        },
        {
            icon: Users,
            title: "Client Management",
            description: "Keep all your clients organized in one place.",
        },
        {
            icon: Wallet,
            title: "Payment Tracking",
            description: "Track paid, pending and overdue invoices.",
        },
        {
            icon: BarChart3,
            title: "Business Insights",
            description: "Understand revenue and cash flow instantly.",
        },
    ];

    return (
        <main>
            {/* HERO */}
            <section className="relative overflow-hidden px-6 pb-24 pt-32">
                {/* Background Blobs */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />

                    <div className="absolute bottom-10 right-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
                </div>

                <div className="mx-auto max-w-7xl">
                    <div className="text-center">
                        <Badge
                            className="
                                mb-6
                                px-4
                                py-1
                                transition-all
                                duration-300
                                hover:scale-105
                            "
                        >
                            🚀 Simple Invoice Management
                        </Badge>

                        <h1
                            className="
                                mx-auto
                                max-w-5xl
                                text-5xl
                                font-bold
                                tracking-tight
                                md:text-7xl
                            "
                        >
                            Get Paid
                            <span className="text-primary"> Faster</span>
                            <br />
                            Manage Your Business
                        </h1>

                        <p
                            className="
                                mx-auto
                                mt-6
                                max-w-2xl
                                text-lg
                                text-muted-foreground
                            "
                        >
                            Create invoices, manage clients, track payments, and
                            grow your business from one beautiful dashboard.
                        </p>

                        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                            <Button
                                size="lg"
                                className="
                                    group
                                    shadow-lg
                                    shadow-primary/20
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                "
                            >
                                Start Free
                                <ArrowRight
                                    className="
                                        ml-2
                                        h-4
                                        w-4
                                        transition-transform
                                        duration-300
                                        group-hover:translate-x-1
                                    "
                                />
                            </Button>

                            <Button
                                variant="outline"
                                size="lg"
                                className="
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                "
                            >
                                View Demo
                            </Button>
                        </div>
                    </div>

                    {/* Dashboard Mockup */}
                    <div className="mx-auto mt-20 max-w-5xl">
                        <Card
                            className="
                                border-border/50
                                bg-card/60
                                backdrop-blur-xl
                                transition-all
                                duration-500
                                hover:shadow-2xl
                            "
                        >
                            <CardContent className="p-8">
                                <div className="grid gap-4 md:grid-cols-3">
                                    <Card className="transition-all duration-300 hover:-translate-y-1">
                                        <CardContent className="p-6">
                                            <p className="text-sm text-muted-foreground">
                                                Revenue
                                            </p>

                                            <h3 className="mt-2 text-3xl font-bold">
                                                ₹1.2L
                                            </h3>
                                        </CardContent>
                                    </Card>

                                    <Card className="transition-all duration-300 hover:-translate-y-1">
                                        <CardContent className="p-6">
                                            <p className="text-sm text-muted-foreground">
                                                Invoices
                                            </p>

                                            <h3 className="mt-2 text-3xl font-bold">
                                                124
                                            </h3>
                                        </CardContent>
                                    </Card>

                                    <Card className="transition-all duration-300 hover:-translate-y-1">
                                        <CardContent className="p-6">
                                            <p className="text-sm text-muted-foreground">
                                                Clients
                                            </p>

                                            <h3 className="mt-2 text-3xl font-bold">
                                                38
                                            </h3>
                                        </CardContent>
                                    </Card>
                                </div>

                                <div className="mt-6 rounded-xl border p-6">
                                    <p className="mb-4 font-medium">
                                        Recent Payments
                                    </p>

                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between">
                                            <span>Acme Inc.</span>

                                            <span className="font-medium text-primary">
                                                Paid
                                            </span>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <span>Design Studio</span>

                                            <span className="font-medium text-yellow-500">
                                                Pending
                                            </span>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <span>StartupX</span>

                                            <span className="font-medium text-primary">
                                                Paid
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* FEATURES */}
            <section className="px-6 py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-16 text-center">
                        <h2 className="text-4xl font-bold">
                            Everything You Need
                        </h2>

                        <p className="mt-4 text-muted-foreground">
                            Manage your entire invoicing workflow.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {features.map((feature) => {
                            const Icon = feature.icon;

                            return (
                                <Card
                                    key={feature.title}
                                    className="
                                        group
                                        transition-all
                                        duration-300
                                        hover:-translate-y-2
                                        hover:shadow-xl
                                    "
                                >
                                    <CardContent className="p-6">
                                        <div
                                            className="
                                                mb-4
                                                flex
                                                h-12
                                                w-12
                                                items-center
                                                justify-center
                                                rounded-xl
                                                bg-primary/10
                                                text-primary
                                                transition-transform
                                                duration-300
                                                group-hover:scale-110
                                            "
                                        >
                                            <Icon size={24} />
                                        </div>

                                        <h3 className="font-semibold">
                                            {feature.title}
                                        </h3>

                                        <p className="mt-2 text-sm text-muted-foreground">
                                            {feature.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="px-6 pb-24">
                <div className="mx-auto max-w-5xl">
                    <Card className="overflow-hidden bg-primary text-primary-foreground">
                        <CardContent className="p-12 text-center">
                            <h2 className="text-4xl font-bold">
                                Ready to Get Paid Faster?
                            </h2>

                            <p className="mt-4 opacity-90">
                                Join thousands of businesses simplifying their
                                invoicing.
                            </p>

                            <Button
                                size="lg"
                                variant="secondary"
                                className="
                                    mt-8
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                "
                            >
                                Start Free Today
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </main>
    );
}
