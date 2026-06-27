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
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMyOrganizations } from "@/features/organization/organizationThunk";
import Loading from "@/components/Loading";

const MyOrganizations = () => {
    const dispatch = useDispatch();
    const organizations = useSelector(
        (state) => state.organization.organizations,
    );
    const { loading } = useSelector((state) => state.organization);

    useEffect(() => {
        if (!organizations.length) {
            dispatch(getMyOrganizations());
        }
    }, [dispatch, organizations.length]);

    if (loading && !organizations.length) return <Loading />;

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
                    <Card key={organization._id}>
                        <CardHeader>
                            <div className="flex items-start justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg bg-primary/10 p-1">
                                        {organization.logo ? (
                                            <img
                                                src={organization.logo}
                                                alt={organization.name}
                                                className="h-full w-full object-cover"
                                            />
                                        ) : (
                                            <Building2 className="size-6 text-primary" />
                                        )}
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

                                <Badge>{organization.role}</Badge>
                            </div>
                        </CardHeader>

                        <CardContent className="space-y-5">
                            <div className="grid grid-cols-3 gap-4 text-center">
                                <div>
                                    <p className="text-2xl font-bold">
                                        {organization.membersCount ?? 0}
                                    </p>

                                    <p className="text-xs text-muted-foreground">
                                        Members
                                    </p>
                                </div>

                                <div>
                                    <p className="text-2xl font-bold">
                                        {organization.clientsCount ?? 0}
                                    </p>

                                    <p className="text-xs text-muted-foreground">
                                        Clients
                                    </p>
                                </div>

                                <div>
                                    <p className="text-2xl font-bold">
                                        {organization.invoicesCount ?? 0}
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
                                    {organization.membersCount ?? 0} Team Members
                                </div>

                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <FileText className="size-4" />
                                    {organization.invoicesCount ?? 0} Total Invoices
                                </div>

                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <Calendar className="size-4" />
                                    Created{" "}
                                    {new Date(
                                        organization.createdAt,
                                    ).toLocaleDateString("en-US", {
                                        month: "short",
                                        year: "numeric",
                                    })}
                                </div>
                            </div>

                            <Separator />

                            <div className="flex gap-2">
                                <Button className="flex-1" asChild>
                                    <Link to="/dashboard">Open Dashboard</Link>
                                </Button>

                                <Button variant="outline" size="icon" asChild>
                                    <Link
                                        to={`/organizations/${organization._id}/settings`}
                                    >
                                        <Settings className="size-4" />
                                    </Link>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {!organizations.length && !loading && (
                <div className="rounded-2xl border border-dashed p-10 text-center text-muted-foreground">
                    You do not have any organizations yet. Create one to get
                    started.
                </div>
            )}
        </div>
    );
};

export default MyOrganizations;
