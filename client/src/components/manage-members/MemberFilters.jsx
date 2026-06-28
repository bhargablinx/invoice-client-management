import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const MemberFilters = ({
    search,
    onSearchChange,
    role,
    onRoleChange,
}) => {
    return (
        <div className="flex flex-col gap-4 md:flex-row">
            <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                <Input
                    value={search}
                    onChange={(e) => onSearchChange(e.target.value)}
                    placeholder="Search members..."
                    className="pl-10"
                />
            </div>

            <Select value={role} onValueChange={onRoleChange}>
                <SelectTrigger className="w-full md:w-48">
                    <SelectValue />
                </SelectTrigger>

                <SelectContent>
                    <SelectItem value="all">All Roles</SelectItem>
                    <SelectItem value="owner">Owner</SelectItem>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="member">Member</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
};

export default MemberFilters;
