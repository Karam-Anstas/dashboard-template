import { AppSideBar } from "@/components/AppSideBar";
import { NavBar } from "@/components/NavBar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { cookies } from "next/headers";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
    const cookieStore = await cookies();
    const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

    return (
        <div className="min-h-full flex">
            <SidebarProvider defaultOpen={defaultOpen}>
                <AppSideBar />
                <main className="w-full">
                    <NavBar />
                    <div className="px-4">{children}</div>
                </main>
            </SidebarProvider>
        </div>
    );
}