import { AppHeader } from "@/components/app-header";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full max-h-screen bg-red-200">
        <AppHeader title="Clientes" />
        {children}
      </main>
    </SidebarProvider>
  );
}
