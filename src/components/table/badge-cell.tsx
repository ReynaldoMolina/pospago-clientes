import { CellContext } from "@tanstack/react-table";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import { Check, Clock, PhoneMissed, Shapes, X } from "lucide-react";

type StatusKey = "Sin respuesta" | "En espera" | "Rechazado" | "Interesado";

const badgeConfig = {
  "Sin respuesta": {
    variant: "secondary" as const,
    icon: <PhoneMissed />,
  },
  "En espera": {
    variant: "secondary" as const,
    icon: <Clock />,
  },
  Rechazado: {
    variant: "destructive" as const,
    icon: <X />,
  },
  Interesado: {
    variant: "secondary" as const,
    icon: <Check />,
  },
};

export function StatusBadgeCell<TData, TValue>({
  getValue,
}: CellContext<TData, TValue>) {
  const value = getValue();
  const formattedValue = String(value);
  const statusKey = formattedValue as StatusKey;

  if (!(statusKey in badgeConfig)) {
    return <span>{formattedValue}</span>;
  }

  const config = badgeConfig[statusKey];

  return (
    <Badge
      variant={config.variant}
      className={cn(
        "inline-flex items-center gap-1 whitespace-nowrap font-normal cursor-default",
        !value && "text-muted-foreground",
        formattedValue === "Interesado" && "bg-green-200 dark:bg-green-700"
      )}
    >
      {config.icon}
      <span>{formattedValue}</span>
    </Badge>
  );
}

export function BadgeCell<TData, TValue>({
  getValue,
}: CellContext<TData, TValue>) {
  const value = getValue();
  const formattedValue = String(value);

  if (!value) return;

  return (
    <Badge
      variant="secondary"
      className={cn(!value && "text-muted-foreground")}
    >
      <span>{formattedValue}</span>
    </Badge>
  );
}
