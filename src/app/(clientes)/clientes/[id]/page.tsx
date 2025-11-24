import { AppHeader } from "@/components/app-header";
import { EditClientForm } from "@/components/forms/client/edit";
import { PageWrapper } from "@/components/page-wrapper";
import { getClientById } from "@/fetch-data/clientes";
import { PageProps } from "@/types";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;

  return {
    title: `Cliente ${id}`,
  };
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const client = await getClientById(id);

  if (!client) {
    notFound();
  }

  return (
    <>
      <AppHeader title={`Cliente ${id}`} />
      <PageWrapper>
        <EditClientForm client={client} />
      </PageWrapper>
    </>
  );
}
