import { AppHeader } from "@/components/app-header";
import { PageWrapper } from "@/components/page-wrapper";
import {
  TypographyH3,
  TypographyH4,
  TypographyP,
} from "@/components/typography";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Documentación - Guión",
};

export default async function Page() {
  return (
    <>
      <AppHeader title="Guión" />
      <PageWrapper>
        <div className="w-full max-w-3xl mx-auto">
          <TypographyP>
            ¡Hola, buenas tardes! Le saluda Reynaldo de parte de Claro. ¿Con
            quién tengo el gusto? ¿Me permite 30 segundos?
          </TypographyP>

          <TypographyH3>Objeciones</TypographyH3>
          <TypographyH4>No tiene señal</TypographyH4>
          <TypographyP>
            Le agradezco muchísimo su honestidad. Sé exactamente de lo que
            habla. No hay nada más frustrante que pagar por un servicio que no
            funciona, especialmente en casa o en el trabajo. Para entender
            mejor, esa falta de señal... ¿le sucede todo el tiempo, o solo en
            ciertos lugares de su casa o ciudad?
          </TypographyP>

          <TypographyH4>no, gracias, no estoy interesado</TypographyH4>
          <TypographyP>
            Perfecto, no hay problema. Ya que no es para usted, ¿conoce a algún
            familiar o amigo al que sí le gustaría ahorrar en su factura o tener
            un mejor servicio? Con solo un nombre, yo me encargo de hacerle
            llegar la oferta exclusiva. Si no compra, consigue un lead caliente.
            Es más fácil que un referido compre.
          </TypographyP>

          <TypographyP>
            De todas formas, su número queda registrado en nuestra base como un
            potencial cliente. Si en tres meses sacamos una oferta aún mejor,
            ¿le gustaría que le volvamos a contactar?
          </TypographyP>
        </div>
      </PageWrapper>
    </>
  );
}
