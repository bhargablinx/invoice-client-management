import { UserPlus } from "lucide-react";

import { Button } from "@/components/ui/button";

const MembersHeader = ({ onInvite }) => {
    return (
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">
                    Manage Members
                </h1>

                <p className="text-muted-foreground">
                    Invite members, manage roles, and control organization
                    access.
                </p>
            </div>

            <Button onClick={onInvite}>
                <UserPlus className="mr-2 size-4" />
                Invite Member
            </Button>
        </div>
    );
};

export default MembersHeader;
