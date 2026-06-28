import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import Loading from "@/components/Loading";
import PendingInvitations from "@/components/manage-members/PendingInvitations";
import { getOrganizationInvitations } from "@/features/organization/organizationThunk";

const Invitations = () => {
    const dispatch = useDispatch();
    const { organizations, loading: orgLoading } = useSelector(
        (state) => state.organization,
    );
    const activeOrganization = organizations[0];
    const { invitations } = useSelector((state) => state.organization);

    useEffect(() => {
        if (!activeOrganization?._id) return;
        dispatch(getOrganizationInvitations(activeOrganization._id));
    }, [activeOrganization?._id, dispatch]);

    if (orgLoading) return <Loading />;

    if (!activeOrganization) {
        return <Navigate to="/organizations/new" replace />;
    }

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">
                    Invitations
                </h1>

                <p className="text-muted-foreground">
                    Review pending invitations for{" "}
                    <span className="font-medium text-foreground">
                        {activeOrganization.name}
                    </span>
                    .
                </p>
            </div>

            <PendingInvitations invitations={invitations} />
        </div>
    );
};

export default Invitations;
