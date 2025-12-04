import { AppHeader } from "@/components/app-header";
import { PageWrapper } from "@/components/page-wrapper";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export const metadata = {
  title: "Documentación",
};

export default async function Page() {
  return (
    <>
      <AppHeader title="Documentación" hideBackButton />
      <PageWrapper>
        <div className="flex flex-col gap-3 max-w-3xl">
          <Button asChild variant="secondary">
            <a href="/documentacion/guion">
              Guión
              <ChevronRight />
            </a>
          </Button>
          <Button asChild variant="secondary">
            <a
              href="https://www.claro.com.ni/personas/servicios/servicios-moviles/pospago/"
              target="_blank"
            >
              Ver planes pospago
              <ChevronRight />
            </a>
          </Button>
          <Button asChild variant="secondary">
            <a href="/documentacion/faq">
              Preguntas frecuentes
              <ChevronRight />
            </a>
          </Button>
        </div>
      </PageWrapper>
    </>
  );
}
