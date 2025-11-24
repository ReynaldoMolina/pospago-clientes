import {
  Calendar,
  CalendarCheck,
  CalendarClock,
  CalendarX,
} from "lucide-react";

const iconClass = "size-4";

export const dateStatusConfig = {
  active: {
    bg: "bg-green-200 dark:bg-green-800",
    title: "Activa",
    icon: <CalendarCheck className={iconClass} />,
  },
  due: {
    bg: "bg-yellow-200 dark:bg-yellow-700",
    title: "Vence pronto",
    icon: <CalendarClock className={iconClass} />,
  },
  expired: {
    bg: "bg-red-200 dark:bg-red-800",
    title: "Vencida",
    icon: <CalendarX className={iconClass} />,
  },
  empty: {
    bg: "text-muted-foreground",
    title: "-",
    icon: <Calendar className={iconClass} />,
  },
};
