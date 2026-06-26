import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const ClientGrowthChart = () => {
    return (
        <Card className="h-full">
            <CardHeader>
                <CardTitle>Client Growth</CardTitle>

                <CardDescription>
                    New clients acquired over the last 6 months
                </CardDescription>
            </CardHeader>

            <CardContent>
                <div className="rounded-xl border bg-muted/20 p-6">
                    <svg
                        viewBox="0 0 600 220"
                        className="h-72 w-full"
                        preserveAspectRatio="none"
                    >
                        {/* X Axis */}

                        <line
                            x1="20"
                            y1="180"
                            x2="580"
                            y2="180"
                            stroke="currentColor"
                            opacity=".15"
                        />

                        {/* Y Axis */}

                        <line
                            x1="20"
                            y1="20"
                            x2="20"
                            y2="180"
                            stroke="currentColor"
                            opacity=".15"
                        />

                        {/* Area */}

                        <polygon
                            points="
                                20,180
                                90,160
                                160,145
                                230,125
                                300,110
                                370,90
                                440,75
                                510,55
                                580,40
                                580,180
                            "
                            className="fill-primary/10"
                        />

                        {/* Line */}

                        <polyline
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="4"
                            className="text-primary"
                            points="
                                20,180
                                90,160
                                160,145
                                230,125
                                300,110
                                370,90
                                440,75
                                510,55
                                580,40
                            "
                        />

                        {/* Points */}

                        {[
                            [20, 180],
                            [90, 160],
                            [160, 145],
                            [230, 125],
                            [300, 110],
                            [370, 90],
                            [440, 75],
                            [510, 55],
                            [580, 40],
                        ].map(([x, y], index) => (
                            <circle
                                key={index}
                                cx={x}
                                cy={y}
                                r="5"
                                className="fill-primary"
                            />
                        ))}
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

export default ClientGrowthChart;
