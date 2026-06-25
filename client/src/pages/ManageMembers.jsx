import { useState } from "react";

import InviteMemberDialog from "@/components/manage-members/InviteMemberDialog";
import MemberFilters from "@/components/manage-members/MemberFilters";
import MembersHeader from "@/components/manage-members/MembersHeader";
import MemberStats from "@/components/manage-members/MemberStats";
import MembersTable from "@/components/manage-members/MembersTable";
import PendingInvitations from "@/components/manage-members/PendingInvitations";

const ManageMembers = () => {
    const [inviteDialogOpen, setInviteDialogOpen] = useState(false);

    return (
        <>
            <div className="space-y-6">
                <InviteMemberDialog
                    open={inviteDialogOpen}
                    onOpenChange={setInviteDialogOpen}
                />
            </div>

            <div className="space-y-6">
                <MembersHeader onInvite={() => setInviteDialogOpen(true)} />

                <MemberStats />

                <MemberFilters />

                <MembersTable />

                <PendingInvitations />
            </div>
        </>
    );
};

export default ManageMembers;
