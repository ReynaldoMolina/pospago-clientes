import { AppHeader } from "@/components/app-header";
import { CreateClientForm } from "@/components/forms/client/create";
import { PageWrapper } from "@/components/page-wrapper";

export const metadata = {
  title: "Crear cliente",
};

export default async function Page() {
  return (
    <>
      <AppHeader title="Crear cliente" />
      <PageWrapper>
        <CreateClientForm />
      </PageWrapper>
    </>
  );
}
