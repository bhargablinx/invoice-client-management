import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Progress } from "@/components/ui/progress";

const TopServices = ({ services }) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Services</CardTitle>
                <CardDescription>Active services from your catalog</CardDescription>
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
