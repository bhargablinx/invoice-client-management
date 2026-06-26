import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const InvoiceFilters = () => {
    return (
        <div className="flex flex-col gap-4 xl:flex-row">
            <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                <Input placeholder="Search invoices..." className="pl-10" />
            </div>

            <Select defaultValue="all">
                <SelectTrigger className="w-full xl:w-44">
                    <SelectValue />
                </SelectTrigger>

                <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>

                    <SelectItem value="draft">Draft</SelectItem>

                    <SelectItem value="sent">Sent</SelectItem>

                    <SelectItem value="paid">Paid</SelectItem>

                    <SelectItem value="pending">Pending</SelectItem>

                    <SelectItem value="overdue">Overdue</SelectItem>
                </SelectContent>
            </Select>

            <Select defaultValue="all">
                <SelectTrigger className="w-full xl:w-48">
                    <SelectValue />
                </SelectTrigger>

                <SelectContent>
                    <SelectItem value="all">All Clients</SelectItem>

                    <SelectItem value="acme">Acme Corporation</SelectItem>

                    <SelectItem value="pixel">Pixel Studio</SelectItem>

                    <SelectItem value="nova">Nova Digital</SelectItem>
                </SelectContent>
            </Select>

            <Select defaultValue="latest">
                <SelectTrigger className="w-full xl:w-44">
                    <SelectValue />
                </SelectTrigger>

                <SelectContent>
                    <SelectItem value="latest">Latest</SelectItem>

                    <SelectItem value="oldest">Oldest</SelectItem>

                    <SelectItem value="amount-high">Highest Amount</SelectItem>

                    <SelectItem value="amount-low">Lowest Amount</SelectItem>

                    <SelectItem value="due-date">Due Date</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
};

export default InvoiceFilters;
