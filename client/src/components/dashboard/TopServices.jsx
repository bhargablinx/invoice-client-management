import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Progress } from "@/components/ui/progress";

const services = [
    {
        name: "Website Development",
        revenue: "₹1,24,000",
        progress: 82,
    },
    {
        name: "UI/UX Design",
        revenue: "₹74,500",
        progress: 60,
    },
    {
        name: "Consultation",
        revenue: "₹38,000",
        progress: 42,
    },
    {
        name: "Maintenance",
        revenue: "₹19,500",
        progress: 24,
    },
];

const TopServices = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Top Services</CardTitle>
                <CardDescription>
                    Best performing services this month
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
                {services.map((service) => (
                    <div key={service.name} className="space-y-2">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium">{service.name}</p>
                                <p className="text-sm text-muted-foreground">
                                    {service.revenue}
                                </p>
                            </div>

                            <span className="text-sm font-semibold">
                                {service.progress}%
                            </span>
                        </div>

                        <Progress value={service.progress} />
                    </div>
                ))}
            </CardContent>
        </Card>
    );
};

export default TopServices;
