import DashboardSidebar from "@/components/layout/Sidebar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
    return (
        <div className="flex min-h-screen">
            <DashboardSidebar />

            <main className="flex-1 bg-muted/30">
                <Outlet />
            </main>
        </div>
    );
}
