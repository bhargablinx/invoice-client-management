import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const RevenueChart = ({ monthlyRevenue }) => {
    const months = monthlyRevenue.map((item) => item.month);
    const values = monthlyRevenue.map((item) => item.amount);
    const maxValue = Math.max(...values, 1);

    const points = monthlyRevenue.map((item, index) => {
        const x = 20 + (index * 560) / Math.max(monthlyRevenue.length - 1, 1);
        const y = 200 - (item.amount / maxValue) * 160;
        return [x, y];
    });

    const areaPoints = `${points.map(([x, y]) => `${x},${y}`).join(" ")} 580,200 20,200`;

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

                        <polygon className="fill-primary/10" points={areaPoints} />

                        {/* Revenue Line */}

                        <polyline
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="4"
                            className="text-primary"
                            points={points.map(([x, y]) => `${x},${y}`).join(" ")}
                        />

                        {/* Data Points */}

                        {points.map(([x, y], i) => (
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
                        {values.map((value, index) => (
                            <span key={`${months[index]}-${value}`}>
                                {formatAmount(value)}
                            </span>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

const formatAmount = (value) =>
    new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
    }).format(value);

export default RevenueChart;
