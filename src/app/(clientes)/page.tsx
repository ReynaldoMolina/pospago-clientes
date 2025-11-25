import { AppHeader } from "@/components/app-header";
import { PageWrapper } from "@/components/page-wrapper";
import { PageProps } from "@/types";
import { getDashboardData } from "@/fetch-data/dashboard";
import { Dashboard } from "@/components/dashboard/dashboard";

export const metadata = {
  title: "Dashboard",
};

export default async function Page({ searchParams }: PageProps) {
  const data = await getDashboardData(await searchParams);

  return (
    <>
      <AppHeader title="Dashboard" hideBackButton />
      <PageWrapper>
        <Dashboard data={data} />
      </PageWrapper>
    </>
  );
}
