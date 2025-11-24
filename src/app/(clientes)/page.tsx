import { AppHeader } from "@/components/app-header";
import { PageWrapper } from "@/components/page-wrapper";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardAction,
  CardFooter,
} from "@/components/ui/card";
import { BarChart } from "lucide-react";

export const metadata = {
  title: "Dashboard",
};

export default async function Page() {
  return (
    <>
      <AppHeader title="Dashboard" hideBackButton />
      <PageWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          <Card className="@container/card">
            <CardHeader>
              <CardDescription>Retención</CardDescription>
              <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                90%
              </CardTitle>
              <CardAction>
                <Badge variant="outline">
                  <BarChart />
                  +12.5%
                </Badge>
              </CardAction>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1.5 text-sm">
              <div className="line-clamp-1 flex gap-2 font-medium">
                Mejorando este mes
                <BarChart className="size-4" />
              </div>
              <div className="text-muted-foreground">
                Visitors for the last 6 months
              </div>
            </CardFooter>
          </Card>

          <Card className="@container/card">
            <CardHeader>
              <CardDescription>Interconexión</CardDescription>
              <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                80%
              </CardTitle>
              <CardAction>
                <Badge variant="outline">
                  <BarChart />
                  +12.5%
                </Badge>
              </CardAction>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1.5 text-sm">
              <div className="line-clamp-1 flex gap-2 font-medium">
                Mejorando este mes
                <BarChart className="size-4" />
              </div>
              <div className="text-muted-foreground">
                Visitors for the last 6 months
              </div>
            </CardFooter>
          </Card>

          <Card className="@container/card">
            <CardHeader>
              <CardDescription>Prepago a pospago</CardDescription>
              <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                20%
              </CardTitle>
              <CardAction>
                <Badge variant="outline">
                  <BarChart />
                  +12.5%
                </Badge>
              </CardAction>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1.5 text-sm">
              <div className="line-clamp-1 flex gap-2 font-medium">
                Mejorando este mes
                <BarChart className="size-4" />
              </div>
              <div className="text-muted-foreground">
                Visitors for the last 6 months
              </div>
            </CardFooter>
          </Card>

          <Card className="@container/card">
            <CardHeader>
              <CardDescription>Ventas del mes</CardDescription>
              <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                16/20
              </CardTitle>
              <CardAction>
                <Badge variant="outline">
                  <BarChart />
                  +12.5%
                </Badge>
              </CardAction>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1.5 text-sm">
              <div className="line-clamp-1 flex gap-2 font-medium">
                Mejorando este mes
                <BarChart className="size-4" />
              </div>
              <div className="text-muted-foreground">
                Visitors for the last 6 months
              </div>
            </CardFooter>
          </Card>
        </div>
      </PageWrapper>
    </>
  );
}
