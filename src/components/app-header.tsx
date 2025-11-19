"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";
import { SidebarTrigger } from "./ui/sidebar";

interface SiteHeader {
  title: string;
  // children?: React.ReactNode;
  // showActionBar?: boolean;
  // hideNewButton?: boolean;
  hideBackButton?: boolean;
}

export function AppHeader({
  title,
  // children,
  // showActionBar = false,
  // hideNewButton,
  hideBackButton,
}: SiteHeader) {
  const router = useRouter();

  return (
    <header className="inline-flex w-full font-semibold text-xs h-11 items-center border-b shrink-0 px-3 gap-1">
      <SidebarTrigger />
      {!hideBackButton && (
        <Button variant="ghost" size="icon" onClick={() => router.back()}>
          <ArrowLeft className="size-4.5" />
        </Button>
      )}
      {title ? title : "Title"}
      {/* {showActionBar && (
        <ActionBar hideNewButton={hideNewButton}>{children}</ActionBar>
      )} */}
    </header>
  );
}
