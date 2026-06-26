import { Link, useNavigate } from "react-router-dom";

import { ArrowLeft, Home, TriangleAlert } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="flex min-h-screen items-center justify-center bg-muted/20 p-6">
            <Card className="w-full max-w-lg">
                <CardHeader className="items-center text-center">
                    <TriangleAlert className="size-10 mb-5 text-destructive mx-auto" />

                    <p className="text-7xl font-bold tracking-tight text-primary">
                        404
                    </p>

                    <CardTitle className="text-3xl">Page Not Found</CardTitle>

                    <CardDescription className="max-w-sm">
                        The page you're trying to access doesn't exist, has been
                        moved, or the URL may be incorrect.
                    </CardDescription>
                </CardHeader>

                <CardContent className="flex flex-col gap-3 sm:flex-row">
                    <Button asChild className="flex-1">
                        <Link to="/dashboard">
                            <Home className="mr-2 size-4" />
                            Go to Dashboard
                        </Link>
                    </Button>

                    <Button
                        variant="outline"
                        className="flex-1"
                        onClick={() => navigate(-1)}
                    >
                        <ArrowLeft className="mr-2 size-4" />
                        Go Back
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
};

export default NotFound;
