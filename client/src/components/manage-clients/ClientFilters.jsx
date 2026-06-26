import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const ClientFilters = () => {
    return (
        <div className="flex flex-col gap-4 lg:flex-row">
            <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                <Input placeholder="Search clients..." className="pl-10" />
            </div>

            <Select defaultValue="all">
                <SelectTrigger className="w-full lg:w-48">
                    <SelectValue />
                </SelectTrigger>

                <SelectContent>
                    <SelectItem value="all">All Clients</SelectItem>

                    <SelectItem value="active">Active</SelectItem>

                    <SelectItem value="archived">Archived</SelectItem>
                </SelectContent>
            </Select>

            <Select defaultValue="latest">
                <SelectTrigger className="w-full lg:w-48">
                    <SelectValue />
                </SelectTrigger>

                <SelectContent>
                    <SelectItem value="latest">Latest</SelectItem>

                    <SelectItem value="oldest">Oldest</SelectItem>

                    <SelectItem value="name">Name (A-Z)</SelectItem>

                    <SelectItem value="revenue">Highest Revenue</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
};

export default ClientFilters;
