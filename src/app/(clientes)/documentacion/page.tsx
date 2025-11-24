import { AppHeader } from "@/components/app-header";
import { PageWrapper } from "@/components/page-wrapper";
import {
  TableTd,
  TableTh,
  TableTr,
  TypographyH3,
  TypographyH4,
  TypographyList,
  TypographyP,
} from "@/components/typography";

export const metadata = {
  title: "Documentación",
};

export default async function Page() {
  return (
    <>
      <AppHeader title="Documentación" hideBackButton />
      <PageWrapper>
        <div className="w-full max-w-3xl mx-auto">
          <TypographyH3>¿Qué es un plan pospago?</TypographyH3>
          <TypographyP>
            Es una cuenta controlada que se le brinda al cliente desde su línea
            telefónica. El mínimo es un contrato de 6 meses.
          </TypographyP>

          <TypographyH3>¿Qué es un beneficio por pronto pago?</TypographyH3>
          <TypographyP>
            Es cuando el cliente paga entre el 15 y 18 de cada mes. Se le dan 2
            GB de YouTube gratis, no importa el plan que tenga.
          </TypographyP>

          <TypographyH3>¿Qué es un beneficio por pago?</TypographyH3>
          <TypographyP>
            Si el cliente paga su servicio en tiempo y forma, pero después del
            18 de cada mes, se le dan bonificaciones mensuales (acumulables):
          </TypographyP>

          <table className="w-full my-6 max-w-xs">
            <thead>
              <TableTr>
                <TableTh>Meses</TableTh>
                <TableTh>Beneficios</TableTh>
              </TableTr>
            </thead>

            <tbody>
              <TableTr>
                <TableTd>1</TableTd>
                <TableTd>300 MB</TableTd>
              </TableTr>
              <TableTr>
                <TableTd>2</TableTd>
                <TableTd>500 MB</TableTd>
              </TableTr>
              <TableTr>
                <TableTd>3</TableTd>
                <TableTd>1 GB</TableTd>
              </TableTr>
              <TableTr>
                <TableTd>4</TableTd>
                <TableTd>2 GB</TableTd>
              </TableTr>
              <TableTr>
                <TableTd>5</TableTd>
                <TableTd>4 GB</TableTd>
              </TableTr>
              <TableTr>
                <TableTd>6</TableTd>
                <TableTd>4 GB</TableTd>
              </TableTr>
            </tbody>
          </table>

          <TypographyH3>Ofertas adicionales</TypographyH3>
          <table className="w-full my-6 max-w-xs">
            <thead>
              <TableTr>
                <TableTh>Servicio</TableTh>
                <TableTh>Precio</TableTh>
              </TableTr>
            </thead>

            <tbody>
              <TableTr>
                <TableTd>YouTube y Tik Tok</TableTd>
                <TableTd>$3 o C$105</TableTd>
              </TableTr>
              <TableTr>
                <TableTd>10 GB adicionales</TableTd>
                <TableTd>$1 o C$50</TableTd>
              </TableTr>
            </tbody>
          </table>

          <TypographyH3>Planes aportados</TypographyH3>
          <table className="w-full my-6">
            <thead>
              <TableTr>
                <TableTh className="w-50">Tipo</TableTh>
                <TableTh>Descripción</TableTh>
              </TableTr>
            </thead>

            <tbody>
              <TableTr>
                <TableTd>Cliente no encontrado</TableTd>
                <TableTd rowSpan={3}>
                  Pagan renta anticipada (recibo), o sea, se le pide el costo
                  del plan inmediatamente para hacer contrato. <br />
                  <span className="text-muted-foreground italic">
                    Nota: solo puede tomar 1 plan.
                  </span>
                </TableTd>
              </TableTr>
              <TableTr>
                <TableTd>Cliente nuevo</TableTd>
              </TableTr>
              <TableTr>
                <TableTd>Cliente sin referencias</TableTd>
              </TableTr>
            </tbody>
          </table>

          <table className="w-full my-6">
            <thead>
              <TableTr>
                <TableTh className="w-100 md:w-130">Tipo</TableTh>
                <TableTh>Descripción</TableTh>
              </TableTr>
            </thead>

            <tbody>
              <TableTr>
                <TableTd>
                  Cliente con buena referencia (buen pagador, préstamo en casa
                  comercial)
                </TableTd>
                <TableTd rowSpan={4}>Solo aplican con cédula</TableTd>
              </TableTr>
              <TableTr>
                <TableTd>Cliente existente (más de 7 meses)</TableTd>
              </TableTr>
              <TableTr>
                <TableTd>Cliente masivo (más de 1 año)</TableTd>
              </TableTr>
              <TableTr>
                <TableTd>Cliente excelente (pronto pago)</TableTd>
              </TableTr>
            </tbody>
          </table>

          <TypographyH3>Cliente con malas referencias</TypographyH3>
          <TypographyP>
            Solo puede contratar si paga el valor del servicio (renta
            anticipada) y deja un depósito que cubre el 6to y 7mo mes.
          </TypographyP>

          <TypographyH3>Cliente con saldo pendiente</TypographyH3>
          <TypographyP>
            Para contratar debe pagar la deuda, pagar el valor del servicio
            (renta anticipada), y dejar un depósito que cubre el 6to y 7mo mes.
          </TypographyP>

          <TypographyH3>Requisitos para un plan pospago</TypographyH3>
          <TypographyList>
            <li>Cédula (debe ser mayor de edad).</li>
            <li>Correo electrónico (para facturación).</li>
            <li>3 números de referencia (pueden ser familia).</li>
            <li>
              Número de teléfono al que se va a activar el servicio (verificar
              con una llamada en el momento para confirmar que el número sea
              correcto).
            </li>
          </TypographyList>

          <TypographyH3>Ciclo de vida del plan pospago</TypographyH3>
          <table className="w-full my-6">
            <thead>
              <TableTr>
                <TableTh className="w-15">Fecha</TableTh>
                <TableTh>Descripción</TableTh>
                <TableTh>Notas</TableTh>
              </TableTr>
            </thead>

            <tbody>
              <TableTr>
                <TableTd>10</TableTd>
                <TableTd>Finaliza el ciclo.</TableTd>
                <TableTd />
              </TableTr>
              <TableTr>
                <TableTd>11</TableTd>
                <TableTd>Inicio del ciclo.</TableTd>
                <TableTd>Se le activa el plan al cliente.</TableTd>
              </TableTr>
              <TableTr>
                <TableTd>15</TableTd>
                <TableTd>Generación de factura.</TableTd>
                <TableTd>
                  En esta fecha se debe anunciar que ya está la factura y
                  promover el pago (llamada, Whatsapp). Si el cliente paga,
                  pedir foto de voucher.
                </TableTd>
              </TableTr>
              <TableTr>
                <TableTd>20</TableTd>
                <TableTd>Vence la factura.</TableTd>
                <TableTd />
              </TableTr>
              <TableTr>
                <TableTd>21</TableTd>
                <TableTd>Mensaje al correo.</TableTd>
                <TableTd />
              </TableTr>
              <TableTr>
                <TableTd>22</TableTd>
                <TableTd>Locución de llamada.</TableTd>
                <TableTd>
                  La operadora del Claro llama al cliente para cobrar.
                </TableTd>
              </TableTr>
              <TableTr>
                <TableTd>25</TableTd>
                <TableTd>Desactivo total.</TableTd>
                <TableTd>
                  Se bloquea el número de teléfono del cliente si no paga antes
                  de esta fecha.
                </TableTd>
              </TableTr>
            </tbody>
          </table>

          <TypographyH3>Formas de pago</TypographyH3>
          <TypographyList>
            <li>Agente Banpro</li>
            <li>Súper Express</li>
            <li>Tienda Claro</li>
            <li>RapiBac</li>
            <li>AM/PM</li>
            <li>Pago con tarjeta</li>
          </TypographyList>

          <TypographyH3>ARPV (Average de ventas)</TypographyH3>
          <TypographyP>
            El asesor de ventas debe lograr los siguientes objetivos:
          </TypographyP>
          <TypographyList>
            <li>Retención de clientes del 90%.</li>
            <li>80% debe ser migración de Tigo a Claro (ITX).</li>
            <li>
              20% debe ser nuevo, o sea, persona que pasa de plan prepago a
              pospago.
            </li>
            <li>
              Procurar que las ventas sean igual o mayores a $20 (plan de
              C$700).
            </li>
            <li>20 ventas al mes (6 a 10 que migren a Claro).</li>
          </TypographyList>

          <TypographyH3>Requisitos ITX (Interconexión)</TypographyH3>
          <TypographyList>
            <li>Cédula.</li>
            <li>Número de Tigo (se va a revisar si tiene plan).</li>
            <li>Hoja electrónica de App Mi Tigo (enviar a mi número).</li>
            <li>
              Correo electrónico (pedir al cliente el teléfono y revisar el
              correo logueado).
            </li>
            <li>Si tiene más de 3 meses con Tigo, solo se pide cédula.</li>
          </TypographyList>

          <TypographyH3>Otras notas</TypographyH3>
          <TypographyH4>Estrategia de Comunicación y Venta</TypographyH4>
          <TypographyList>
            <li>
              En las llamadas no mencionar que es un plan pospago, si no decir
              beneficios.
            </li>
            <li>
              Cantidad de GBs y precio al final de la llamada, se menciona el
              precio por día y no por mes.
            </li>
            <li>
              Aclarar que la recarga no es ilimitada, revisar proceso en segundo
              plano.
            </li>
            <li>No usar técnicas fraudulentas para vender más.</li>
          </TypographyList>
          <TypographyH4>Gestión y Documentación del Contrato</TypographyH4>
          <TypographyList>
            <li>Se debe usar lapicero azul para llenar y firmar contrato.</li>
            <li>
              Es mejor llenar el contrato antes de llegar donde el cliente, para
              que solo firme.
            </li>
            <li>Cuidar muy bien el contrato, en especial los bordes.</li>
          </TypographyList>

          <TypographyH4>Recolección de Datos y Evidencia</TypographyH4>
          <TypographyList>
            <li>Tomar foto a cédula, bien tomada.</li>
            <li>No agarrar cédulas en mal estado, si no preguntar a Jenny.</li>
            <li>
              Tomar foto al cliente mientras firma para tener evidencia ante
              cualquier problema.
            </li>
          </TypographyList>

          <TypographyH4>
            Responsabilidades y Registro Administrativo
          </TypographyH4>
          <TypographyList>
            <li>
              Llamadas internacionales por WhatsApp usan los GBs, no el plan
              ilimitado.
            </li>
            <li>
              Anotar contratos en el acta de Jenny, anotarse diario o día de por
              medio, no llegar hasta el 15 del mes.
            </li>
            <li>
              Es responsabilidad del asesor llevar un registro ordenado de los
              clientes, su estado y dar seguimiento.
            </li>
            <li>
              Si la persona no sabe leer, explicarle cómo funciona el contrato.
            </li>
          </TypographyList>

          <TypographyH3>Por hacer</TypographyH3>
          <TypographyList>
            <li>Tener listo dónde llevar el registro de clientes.</li>
            <li>
              Almohadilla para sello, para que el cliente ponga su huella en vez
              de firmar.
            </li>
            <li>Carpeta para contratos (plástico).</li>
          </TypographyList>
        </div>
      </PageWrapper>
    </>
  );
}
