import {
    LayoutDashboard,
    Building2,
    Users,
    FileText,
    CreditCard,
    Receipt,
    BarChart3,
    Settings,
    LogOut,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const navItems = [
    {
        title: "Overview",
        items: [
            {
                label: "Dashboard",
                icon: LayoutDashboard,
                path: "/dashboard",
            },
        ],
    },
    {
        title: "Organization",
        items: [
            {
                label: "Organizations",
                icon: Building2,
                path: "/dashboard/organizations",
            },
            {
                label: "Team Members",
                icon: Users,
                path: "/dashboard/team",
            },
        ],
    },
    {
        title: "Sales",
        items: [
            {
                label: "Clients",
                icon: Users,
                path: "/dashboard/clients",
            },
            {
                label: "Invoices",
                icon: FileText,
                path: "/dashboard/invoices",
            },
        ],
    },
    {
        title: "Finance",
        items: [
            {
                label: "Payments",
                icon: CreditCard,
                path: "/dashboard/payments",
            },
            {
                label: "Transactions",
                icon: Receipt,
                path: "/dashboard/transactions",
            },
        ],
    },
    {
        title: "Reports",
        items: [
            {
                label: "Analytics",
                icon: BarChart3,
                path: "/dashboard/analytics",
            },
        ],
    },
    {
        title: "Settings",
        items: [
            {
                label: "Settings",
                icon: Settings,
                path: "/dashboard/settings",
            },
        ],
    },
];

export default function Sidebar() {
    return (
        <aside className="flex h-screen w-72 flex-col border-r bg-card">
            {/* Logo */}
            <div className="border-b p-6">
                <h1 className="text-xl font-bold">
                    In<span className="text-primary">Client</span>
                </h1>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto p-4">
                {navItems.map((section) => (
                    <div key={section.title} className="mb-6">
                        <h2 className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                            {section.title}
                        </h2>

                        <div className="space-y-1">
                            {section.items.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <NavLink
                                        key={item.path}
                                        to={item.path}
                                        className={({ isActive }) =>
                                            `flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                                                isActive
                                                    ? "bg-primary text-primary-foreground"
                                                    : "text-muted-foreground hover:bg-accent hover:text-foreground"
                                            }`
                                        }
                                    >
                                        <Icon size={18} />
                                        {item.label}
                                    </NavLink>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </nav>

            {/* Footer */}
            <div className="border-t p-4">
                <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground">
                    <LogOut size={18} />
                    Logout
                </button>
            </div>
        </aside>
    );
}
