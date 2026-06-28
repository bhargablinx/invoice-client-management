import { TrendingUp } from "lucide-react";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const StatCards = ({ stats }) => {
    console.log(stats);

    return (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => {
                return (
                    <Card key={stat.title}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <div>
                                <CardDescription>{stat.title}</CardDescription>
                                <CardTitle className="mt-1 text-2xl">
                                    {stat.value}
                                </CardTitle>
                            </div>
                        </CardHeader>

                        <CardContent className="flex items-center gap-2 text-sm text-muted-foreground">
                            <TrendingUp className="size-4 text-green-500" />
                            {stat.change}
                        </CardContent>
                    </Card>
                );
            })}
        </div>
    );
};

export default StatCards;
