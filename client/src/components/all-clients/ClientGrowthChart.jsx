import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const ClientGrowthChart = ({ data = [] }) => {
    const points = [...data].slice(-6);
    const values = points.map((item) => Number(item.revenue ?? 0));
    const maxValue = Math.max(...values, 1);

    const scaledPoints = values.map((value, index) => {
        const x = points.length === 1 ? 20 : 20 + (560 * index) / (points.length - 1);
        const y = 180 - (140 * value) / maxValue;
        return [x, y];
    });

    const labels = points.map((item) => {
        const month = item.month ?? 1;
        const year = item.year ?? new Date().getFullYear();
        return new Date(year, month - 1).toLocaleDateString("en-US", {
            month: "short",
        });
    });

    return (
        <Card className="h-full">
            <CardHeader>
                <CardTitle>Client Growth</CardTitle>

                <CardDescription>
                    Monthly revenue trend from invoice data
                </CardDescription>
            </CardHeader>

            <CardContent>
                <div className="rounded-xl border bg-muted/20 p-6">
                    <svg
                        viewBox="0 0 600 220"
                        className="h-72 w-full"
                        preserveAspectRatio="none"
                    >
                        <line
                            x1="20"
                            y1="180"
                            x2="580"
                            y2="180"
                            stroke="currentColor"
                            opacity=".15"
                        />
                        <line
                            x1="20"
                            y1="20"
                            x2="20"
                            y2="180"
                            stroke="currentColor"
                            opacity=".15"
                        />

                        {scaledPoints.length > 1 && (
                            <>
                                <polygon
                                    points={`20,180 ${scaledPoints
                                        .map(([x, y]) => `${x},${y}`)
                                        .join(" ")} 580,180`}
                                    className="fill-primary/10"
                                />

                                <polyline
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    className="text-primary"
                                    points={scaledPoints
                                        .map(([x, y]) => `${x},${y}`)
                                        .join(" ")}
                                />

                                {scaledPoints.map(([x, y], index) => (
                                    <circle
                                        key={index}
                                        cx={x}
                                        cy={y}
                                        r="5"
                                        className="fill-primary"
                                    />
                                ))}
                            </>
                        )}
                    </svg>

                    <div className="mt-4 flex justify-between text-sm text-muted-foreground">
                        {labels.length
                            ? labels.map((label, index) => (
                                  <span key={`${label}-${index}`}>{label}</span>
                              ))
                            : ["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map(
                                  (label) => <span key={label}>{label}</span>,
                              )}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default ClientGrowthChart;
