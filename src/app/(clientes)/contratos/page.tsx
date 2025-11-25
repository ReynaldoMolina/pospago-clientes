import { AppHeader } from "@/components/app-header";
import { DataTable } from "@/components/table/data-table";
import { PageWrapper } from "@/components/page-wrapper";
import { PageProps } from "@/types";
import { columns } from "./columns";
import { getContracts } from "@/fetch-data/contratos";

export const metadata = {
  title: "Contratos",
};

export default async function Page({ searchParams }: PageProps) {
  const { data } = await getContracts(await searchParams);

  return (
    <>
      <AppHeader title="Contratos" hideBackButton showActions />
      <PageWrapper>
        <DataTable columns={columns} data={data} />
      </PageWrapper>
    </>
  );
}
