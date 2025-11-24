import { AppHeader } from "@/components/app-header";
import { EditContractForm } from "@/components/forms/contract/edit";
import { PageWrapper } from "@/components/page-wrapper";
import { getClientsSelect } from "@/fetch-data/clientes";
import { getContractById } from "@/fetch-data/contratos";
import { PageProps } from "@/types";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;

  return {
    title: `Contrato ${id}`,
  };
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const contract = await getContractById(id);
  const clients = await getClientsSelect();

  if (!contract) {
    notFound();
  }

  return (
    <>
      <AppHeader title={`Contrato ${id}`} />
      <PageWrapper>
        <EditContractForm contract={contract} clientsOptions={clients} />
      </PageWrapper>
    </>
  );
}
