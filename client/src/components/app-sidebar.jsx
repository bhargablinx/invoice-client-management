"use client";

import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
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
    Newspaper,
} from "lucide-react";

// This is sample data.
const data = {
    user: {
        name: "bhargab",
        email: "bhargab@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    teams: [
        {
            name: "Organization 1",
            logo: <GalleryVerticalEndIcon />,
            plan: "Organization",
        },
        {
            name: "Organization 2",
            logo: <GalleryVerticalEndIcon />,
            plan: "Organization",
        },
        {
            name: "Organization 3",
            logo: <GalleryVerticalEndIcon />,
            plan: "Organization",
        },
    ],
    navMain: [
        {
            title: "Dashboard",
            url: "/dashboard",
            icon: <LayoutDashboard />,
            isActive: true,
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
        },

        {
            title: "Settings",
            url: "/settings",
            icon: <Settings />,
        },
    ],
    projects: [
        {
            name: "Dashboard",
            url: "#",
            icon: <LayoutDashboard />,
            items: [
                {
                    title: "History",
                    url: "#",
                },
                {
                    title: "Starred",
                    url: "#",
                },
                {
                    title: "Settings",
                    url: "#",
                },
            ],
        },
        {
            name: "Members",
            url: "#",
            icon: <Users />,
        },
        {
            name: "Clients",
            url: "#",
            icon: <UsersRound />,
        },
        {
            name: "Invoices",
            url: "#",
            icon: <Newspaper />,
        },
        {
            name: "Payments",
            url: "#",
            icon: <CircleDollarSign />,
        },
        {
            name: "Services",
            url: "#",
            icon: <HandPlatter />,
        },
    ],
};

export function AppSidebar({ ...props }) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <TeamSwitcher teams={data.teams} />
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
                <NavProjects projects={data.projects} />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}
