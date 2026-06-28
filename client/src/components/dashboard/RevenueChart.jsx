import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const RevenueChart = ({ data }) => {
    const values = data.map((item) => item.revenue);
    const maxValue = Math.max(...values, 1);
    const points = data.map((item, index) => {
        const x = 20 + (index * 560) / Math.max(data.length - 1, 1);
        const y = 180 - (item.revenue / maxValue) * 140;
        return [x, y];
    });
    const polyline = points.map(([x, y]) => `${x},${y}`).join(" ");
    const area = `${polyline} 580,180 20,180`;

    return (
        <Card className="h-full">
            <CardHeader>
                <CardTitle>Revenue Overview</CardTitle>
                <CardDescription>
                    Revenue earned over the last 6 months
                </CardDescription>
            </CardHeader>

            <CardContent>
                <div className="h-72 rounded-xl border bg-muted/20 p-6">
                    <svg
                        viewBox="0 0 600 220"
                        className="h-full w-full"
                        preserveAspectRatio="none"
                    >
                        <polygon className="fill-primary/10" points={area} />
                        <polyline
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="4"
                            points={polyline}
                            className="text-primary"
                        />

                        <line
                            x1="20"
                            y1="180"
                            x2="580"
                            y2="180"
                            stroke="currentColor"
                            opacity=".2"
                        />

                        <line
                            x1="20"
                            y1="20"
                            x2="20"
                            y2="180"
                            stroke="currentColor"
                            opacity=".2"
                        />
                    </svg>

                    <div className="mt-4 flex justify-between text-sm text-muted-foreground">
                        {data.map((item) => (
                            <span key={item.month}>{item.month}</span>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default RevenueChart;
