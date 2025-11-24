"use client";

import { StatusBadgeCell } from "@/components/table/badge-cell";
import { DateCell } from "@/components/table/date-cell";
import { EditCell } from "@/components/table/edit-cell";
import { ClientTable } from "@/types";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<ClientTable>[] = [
  {
    id: "actions",
    header: "Edit",
    cell: ({ row }) => <EditCell href={`/clientes/${row.original.id}`} />,
  },
  {
    accessorKey: "telefono",
    header: "Teléfono",
  },
  {
    accessorKey: "estado",
    header: "Estado",
    cell: StatusBadgeCell,
  },
  {
    accessorKey: "fecha",
    header: "Fecha",
    cell: DateCell,
  },
  {
    accessorKey: "nombre_cliente",
    header: "Nombre",
  },
  {
    accessorKey: "municipio",
    header: "Municipio",
  },
  {
    accessorKey: "notas",
    header: "Notas",
  },
];
