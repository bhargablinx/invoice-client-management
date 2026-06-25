"use client";

import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { OrganizationSwitcher } from "@/components/organization-switcher";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from "@/components/ui/sidebar";
import {
    GalleryVerticalEndIcon,
    LayoutDashboard,
    Building2,
    Users,
    UsersRound,
    CircleDollarSign,
    HandPlatter,
    BarChart3,
    Settings,
    Receipt,
} from "lucide-react";

// This is sample data.
const data = {
    user: {
        name: "bhargab",
        email: "bhargab@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    organization: [
        {
            name: "Organization 1",
            logo: <GalleryVerticalEndIcon />,
        },
        {
            name: "Organization 2",
            logo: <GalleryVerticalEndIcon />,
        },
        {
            name: "Organization 3",
            logo: <GalleryVerticalEndIcon />,
        },
    ],
    navMain: [
        {
            title: "Dashboard",
            url: "/dashboard",
            icon: <LayoutDashboard />,
            isActive: true,
            hasChild: false,
        },

        {
            title: "Organizations",
            url: "/organizations",
            icon: <Building2 />,
            items: [
                {
                    title: "My Organizations",
                    url: "/organizations",
                },
                {
                    title: "Invitations",
                    url: "/organizations/invitations",
                },
            ],
            hasChild: true,
        },

        {
            title: "Members",
            url: "/members",
            icon: <Users />,
            items: [
                {
                    title: "All Members",
                    url: "/members",
                },
                {
                    title: "Owners",
                    url: "/members/owners",
                },
                {
                    title: "Admins",
                    url: "/members/admins",
                },
                {
                    title: "Members",
                    url: "/members/team",
                },
            ],
            hasChild: true,
        },

        {
            title: "Clients",
            url: "/clients",
            icon: <UsersRound />,
            items: [
                {
                    title: "All Clients",
                    url: "/clients",
                },
                {
                    title: "Active Clients",
                    url: "/clients/active",
                },
                {
                    title: "Archived Clients",
                    url: "/clients/archived",
                },
            ],
            hasChild: true,
        },

        {
            title: "Invoices",
            url: "/invoices",
            icon: <Receipt />,
            items: [
                {
                    title: "All Invoices",
                    url: "/invoices",
                },
                {
                    title: "Draft",
                    url: "/invoices/draft",
                },
                {
                    title: "Sent",
                    url: "/invoices/sent",
                },
                {
                    title: "Viewed",
                    url: "/invoices/viewed",
                },
                {
                    title: "Partially Paid",
                    url: "/invoices/partially-paid",
                },
                {
                    title: "Paid",
                    url: "/invoices/paid",
                },
                {
                    title: "Overdue",
                    url: "/invoices/overdue",
                },
                {
                    title: "Cancelled",
                    url: "/invoices/cancelled",
                },
            ],
            hasChild: true,
        },

        {
            title: "Payments",
            url: "/payments",
            icon: <CircleDollarSign />,
            items: [
                {
                    title: "All Payments",
                    url: "/payments",
                },
                {
                    title: "Recent Payments",
                    url: "/payments/recent",
                },
                {
                    title: "Refunds",
                    url: "/payments/refunds",
                },
            ],
            hasChild: true,
        },

        {
            title: "Services",
            url: "/services",
            icon: <HandPlatter />,
            items: [
                {
                    title: "All Services",
                    url: "/services",
                },
                {
                    title: "Active Services",
                    url: "/services/active",
                },
                {
                    title: "Archived Services",
                    url: "/services/archived",
                },
            ],
            hasChild: true,
        },

        {
            title: "Reports",
            url: "/reports",
            icon: <BarChart3 />,
            items: [
                {
                    title: "Revenue Report",
                    url: "/reports/revenue",
                },
                {
                    title: "Invoice Report",
                    url: "/reports/invoices",
                },
                {
                    title: "Client Report",
                    url: "/reports/clients",
                },
            ],
            hasChild: true,
        },

        {
            title: "Settings",
            url: "/settings",
            icon: <Settings />,
            hasChild: false,
        },
    ],
    // projects: [
    //     {
    //         name: "Dashboard",
    //         url: "#",
    //         icon: <LayoutDashboard />,
    //         items: [
    //             {
    //                 title: "History",
    //                 url: "#",
    //             },
    //             {
    //                 title: "Starred",
    //                 url: "#",
    //             },
    //             {
    //                 title: "Settings",
    //                 url: "#",
    //             },
    //         ],
    //     },
    //     // {
    //     //     name: "Members",
    //     //     url: "#",
    //     //     icon: <Users />,
    //     // },
    //     // {
    //     //     name: "Clients",
    //     //     url: "#",
    //     //     icon: <UsersRound />,
    //     // },
    //     // {
    //     //     name: "Invoices",
    //     //     url: "#",
    //     //     icon: <Newspaper />,
    //     // },
    //     // {
    //     //     name: "Payments",
    //     //     url: "#",
    //     //     icon: <CircleDollarSign />,
    //     // },
    //     // {
    //     //     name: "Services",
    //     //     url: "#",
    //     //     icon: <HandPlatter />,
    //     // },
    // ],
};

export function AppSidebar({ ...props }) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <OrganizationSwitcher organizations={data.organization} />
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}
