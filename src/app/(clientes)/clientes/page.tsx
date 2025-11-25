import { AppHeader } from "@/components/app-header";
import { DataTable } from "@/components/table/data-table";
import { PageWrapper } from "@/components/page-wrapper";
import { getClients } from "@/fetch-data/clientes";
import { PageProps } from "@/types";
import { columns } from "./columns";

export const metadata = {
  title: "Clientes",
};

export default async function Page({ searchParams }: PageProps) {
  const { data } = await getClients(await searchParams);

  return (
    <>
      <AppHeader title="Clientes" hideBackButton showActions />
      <PageWrapper>
        <DataTable columns={columns} data={data} />
      </PageWrapper>
    </>
  );
}
