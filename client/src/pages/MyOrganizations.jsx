import { Link } from "react-router-dom";

import {
    Building2,
    Calendar,
    FileText,
    Plus,
    Settings,
    Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const organizations = [
    {
        id: 1,
        name: "InClient",
        role: "Owner",
        members: 12,
        clients: 84,
        invoices: 352,
        createdAt: "Jan 2026",
    },
    {
        id: 2,
        name: "Pixel Studio",
        role: "Admin",
        members: 5,
        clients: 31,
        invoices: 118,
        createdAt: "Mar 2026",
    },
    {
        id: 3,
        name: "Freelance Projects",
        role: "Member",
        members: 3,
        clients: 14,
        invoices: 46,
        createdAt: "Apr 2026",
    },
];

const roleVariant = (role) => {
    switch (role) {
        case "Owner":
            return "default";
        case "Admin":
            return "secondary";
        default:
            return "outline";
    }
};

const MyOrganizations = () => {
    return (
        <div className="space-y-6">
            {/* Header */}

            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">
                        My Organizations
                    </h1>

                    <p className="text-muted-foreground">
                        Manage your organizations and quickly access their
                        dashboards.
                    </p>
                </div>

                <Button asChild>
                    <Link to="/organizations/new">
                        <Plus className="mr-2 size-4" />
                        Create Organization
                    </Link>
                </Button>
            </div>

            {/* Organization Cards */}

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {organizations.map((organization) => (
                    <Card key={organization.id}>
                        <CardHeader>
                            <div className="flex items-start justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="rounded-lg bg-primary/10 p-3">
                                        <Building2 className="size-6 text-primary" />
                                    </div>

                                    <div>
                                        <CardTitle>
                                            {organization.name}
                                        </CardTitle>

                                        <CardDescription>
                                            Organization Workspace
                                        </CardDescription>
                                    </div>
                                </div>

                                <Badge variant={roleVariant(organization.role)}>
                                    {organization.role}
                                </Badge>
                            </div>
                        </CardHeader>

                        <CardContent className="space-y-5">
                            <div className="grid grid-cols-3 gap-4 text-center">
                                <div>
                                    <p className="text-2xl font-bold">
                                        {organization.members}
                                    </p>

                                    <p className="text-xs text-muted-foreground">
                                        Members
                                    </p>
                                </div>

                                <div>
                                    <p className="text-2xl font-bold">
                                        {organization.clients}
                                    </p>

                                    <p className="text-xs text-muted-foreground">
                                        Clients
                                    </p>
                                </div>

                                <div>
                                    <p className="text-2xl font-bold">
                                        {organization.invoices}
                                    </p>

                                    <p className="text-xs text-muted-foreground">
                                        Invoices
                                    </p>
                                </div>
                            </div>

                            <Separator />

                            <div className="space-y-3 text-sm">
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <Users className="size-4" />
                                    {organization.members} Team Members
                                </div>

                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <FileText className="size-4" />
                                    {organization.invoices} Total Invoices
                                </div>

                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <Calendar className="size-4" />
                                    Created {organization.createdAt}
                                </div>
                            </div>

                            <Separator />

                            <div className="flex gap-2">
                                <Button className="flex-1" asChild>
                                    <Link to="/dashboard">Open Dashboard</Link>
                                </Button>

                                <Button variant="outline" size="icon" asChild>
                                    <Link
                                        to={`/organizations/${organization.id}/settings`}
                                    >
                                        <Settings className="size-4" />
                                    </Link>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default MyOrganizations;
