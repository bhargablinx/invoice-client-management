import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

const RevenueChart = () => {
    return (
        <Card className="h-full">
            <CardHeader>
                <CardTitle>Invoice Revenue</CardTitle>

                <CardDescription>
                    Revenue generated from invoices over the last 6 months.
                </CardDescription>
            </CardHeader>

            <CardContent>
                <div className="rounded-xl border bg-muted/20 p-6">
                    <svg
                        viewBox="0 0 600 220"
                        preserveAspectRatio="none"
                        className="h-72 w-full"
                    >
                        {/* Grid */}

                        {[40, 80, 120, 160, 200].map((y) => (
                            <line
                                key={y}
                                x1="20"
                                y1={y}
                                x2="580"
                                y2={y}
                                stroke="currentColor"
                                opacity=".08"
                            />
                        ))}

                        {/* Axes */}

                        <line
                            x1="20"
                            y1="200"
                            x2="580"
                            y2="200"
                            stroke="currentColor"
                            opacity=".15"
                        />

                        <line
                            x1="20"
                            y1="20"
                            x2="20"
                            y2="200"
                            stroke="currentColor"
                            opacity=".15"
                        />

                        {/* Area */}

                        <polygon
                            className="fill-primary/10"
                            points="
                            20,180
                            100,160
                            180,140
                            260,150
                            340,110
                            420,90
                            500,60
                            580,40
                            580,200
                            20,200
                        "
                        />

                        {/* Revenue Line */}

                        <polyline
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="4"
                            className="text-primary"
                            points="
                            20,180
                            100,160
                            180,140
                            260,150
                            340,110
                            420,90
                            500,60
                            580,40
                        "
                        />

                        {/* Data Points */}

                        {[
                            [20, 180],
                            [100, 160],
                            [180, 140],
                            [260, 150],
                            [340, 110],
                            [420, 90],
                            [500, 60],
                            [580, 40],
                        ].map(([x, y], i) => (
                            <circle
                                key={i}
                                cx={x}
                                cy={y}
                                r="5"
                                className="fill-primary"
                            />
                        ))}
                    </svg>

                    <div className="mt-5 grid grid-cols-6 text-center text-sm text-muted-foreground">
                        {months.map((month) => (
                            <span key={month}>{month}</span>
                        ))}
                    </div>

                    <div className="mt-2 grid grid-cols-6 text-center text-xs font-medium">
                        <span>₹1.2L</span>
                        <span>₹1.8L</span>
                        <span>₹2.1L</span>
                        <span>₹2.0L</span>
                        <span>₹2.6L</span>
                        <span>₹3.1L</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default RevenueChart;
