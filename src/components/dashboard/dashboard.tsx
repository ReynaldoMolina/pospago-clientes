import { BarChart } from "lucide-react";
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardFooter,
} from "../ui/card";
import { DashboardData } from "@/fetch-data/dashboard";

interface Dashboard {
  data: DashboardData;
}

export function Dashboard({ data }: Dashboard) {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-muted-foreground text-sm">Principal</span>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <Card className="@container/card">
          <CardHeader>
            <CardDescription>Retención</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              {data.retencion}%
            </CardTitle>
            {/* <CardAction>
            <Badge variant="outline">
              <BarChart />
              +12.5%
            </Badge>
          </CardAction> */}
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            {/* <div className="line-clamp-1 flex gap-2 font-medium">
              Mejorando este mes
              <BarChart className="size-4" />
            </div> */}
            <div className="text-muted-foreground">
              Debe ser igual o mayor al 90%.
            </div>
          </CardFooter>
        </Card>

        <Card className="@container/card">
          <CardHeader>
            <CardDescription>Ventas del mes</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              {data.ventas} / 20
            </CardTitle>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            {/* <div className="line-clamp-1 flex gap-2 font-medium">
              Mejorando este mes
              <BarChart className="size-4" />
            </div> */}
            <div className="text-muted-foreground">Mínimo 20 al mes.</div>
          </CardFooter>
        </Card>

        <Card className="@container/card">
          <CardHeader>
            <CardDescription>Interconexión</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              {data.interconexionCount} / {data.interconexion}%
            </CardTitle>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            {/* <div className="line-clamp-1 flex gap-2 font-medium">
              Mejorando este mes
              <BarChart className="size-4" />
            </div> */}
            <div className="text-muted-foreground">
              Preferiblemente debe ser 80%.
            </div>
          </CardFooter>
        </Card>

        <Card className="@container/card">
          <CardHeader>
            <CardDescription>Otras ventas</CardDescription>
            <CardTitle className="inline-flex gap-2 text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              {data.prepago_a_pospagoCount + data.normalCount} /{" "}
              {data.prepago_a_pospago + data.normal}%
            </CardTitle>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            {/* <div className="line-clamp-1 flex gap-2 font-medium">
              Mejorando este mes
              <BarChart className="size-4" />
            </div> */}
            <div className="text-muted-foreground">
              Preferiblemente debe ser 20%.
            </div>
          </CardFooter>
        </Card>
      </div>

      <span className="mt-3 text-muted-foreground text-sm">Otros datos</span>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <Card className="@container/card">
          <CardHeader>
            <CardDescription>Prepago a pospago</CardDescription>
            <CardTitle className="inline-flex gap-2 text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              {data.prepago_a_pospagoCount} / {data.prepago_a_pospago}%
            </CardTitle>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            {/* <div className="line-clamp-1 flex gap-2 font-medium">
              Mejorando este mes
              <BarChart className="size-4" />
            </div> */}
            <div className="text-muted-foreground">
              Preferiblemente debe ser 10%.
            </div>
          </CardFooter>
        </Card>

        <Card className="@container/card">
          <CardHeader>
            <CardDescription>Venta normal</CardDescription>
            <CardTitle className="inline-flex gap-2 text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              {data.normalCount} / {data.normal}%
            </CardTitle>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            {/* <div className="line-clamp-1 flex gap-2 font-medium">
              Mejorando este mes
              <BarChart className="size-4" />
            </div> */}
            <div className="text-muted-foreground">
              Preferiblemente debe ser 10%.
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
