import { AppHeader } from "@/components/app-header";
import { CreateContractForm } from "@/components/forms/contract/create";
import { PageWrapper } from "@/components/page-wrapper";
import { getClientsSelect } from "@/fetch-data/clientes";

export const metadata = {
  title: "Crear contrato",
};

export default async function Page() {
  const clients = await getClientsSelect();

  return (
    <>
      <AppHeader title="Crear contrato" />
      <PageWrapper>
        <CreateContractForm selectOptions={clients} />
      </PageWrapper>
    </>
  );
}
