"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";
import { SidebarTrigger } from "./ui/sidebar";
import { Separator } from "./ui/separator";
import { HeaderActions } from "./app-header-actions/header-actions";

interface SiteHeader {
  title: string;
  children?: React.ReactNode;
  showActions?: boolean;
  hideNewButton?: boolean;
  hideBackButton?: boolean;
}

export function AppHeader({
  title,
  children,
  showActions = false,
  hideNewButton,
  hideBackButton,
}: SiteHeader) {
  const router = useRouter();

  return (
    <header className="inline-flex w-full font-semibold tex-sm h-11 items-center border-b shrink-0 px-3 gap-1">
      <SidebarTrigger />
      <Separator
        orientation="vertical"
        className="mx-2 data-[orientation=vertical]:h-4"
      />

      {!hideBackButton && (
        <Button variant="ghost" size="icon" onClick={() => router.back()}>
          <ArrowLeft className="size-4.5" />
        </Button>
      )}
      <span className="ml-1 text-sm">{title ? title : "Title"}</span>
      {showActions && (
        <HeaderActions hideNewButton={hideNewButton}>{children}</HeaderActions>
      )}
    </header>
  );
}
