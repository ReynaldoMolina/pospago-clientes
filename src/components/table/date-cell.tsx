import { formatDate } from "@/lib/formatters";
import { CellContext } from "@tanstack/react-table";
import { getDateStatus } from "@/lib/get-date-status";
import { Badge } from "../ui/badge";
import { Calendar } from "lucide-react";
import { dateStatusConfig } from "@/lib/date-status-config";
import { cn } from "@/lib/utils";

export function DateCell<TData, TValue>({
  getValue,
}: CellContext<TData, TValue>) {
  const date = getValue();
  const dateString = date ? String(date) : "";
  const formattedDate = formatDate(dateString);

  return (
    <Badge
      variant="secondary"
      className={cn(!dateString && "text-muted-foreground")}
    >
      <Calendar className="size-3.5" />
      {formattedDate}
    </Badge>
  );
}

export function DateStatusCell<TData, TValue>({
  getValue,
}: CellContext<TData, TValue>) {
  const date = getValue();
  const dateString = date ? String(date) : "";
  const dateStatus = getDateStatus(dateString);
  const formattedDate = formatDate(dateString);

  return (
    <Badge variant="secondary" className={dateStatusConfig[dateStatus].bg}>
      {dateStatusConfig[dateStatus].icon}
      {formattedDate}
    </Badge>
  );
}
