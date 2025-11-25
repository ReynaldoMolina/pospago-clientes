"use client";

import { BadgeCell, StatusBadgeCell } from "@/components/table/badge-cell";
import { DateCell } from "@/components/table/date-cell";
import { EditCell } from "@/components/table/edit-cell";
import { ClientTable } from "@/types";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<ClientTable>[] = [
  {
    id: "edit",
    header: "Editar",
    cell: ({ row }) => <EditCell href={`/clientes/${row.original.id}`} />,
    size: 40,
  },
  {
    accessorKey: "fecha",
    header: "Fecha",
    cell: DateCell,
    size: 100,
  },
  {
    accessorKey: "estado",
    header: "Estado",
    cell: StatusBadgeCell,
    size: 100,
  },
  {
    accessorKey: "telefono",
    header: "Teléfono",
    size: 80,
  },
  {
    accessorKey: "nombre_cliente",
    header: "Nombre",
    maxSize: 200,
  },
  {
    accessorKey: "municipio",
    header: "Municipio",
    cell: BadgeCell,
    size: 80,
  },
  {
    accessorKey: "notas",
    header: "Notas",
  },
];
