import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const RevenueChart = () => {
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
                        <polyline
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="4"
                            points="
                                20,180
                                90,140
                                160,150
                                230,90
                                300,120
                                370,60
                                440,90
                                510,40
                                580,70
                            "
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
                        <span>Jan</span>
                        <span>Feb</span>
                        <span>Mar</span>
                        <span>Apr</span>
                        <span>May</span>
                        <span>Jun</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default RevenueChart;
