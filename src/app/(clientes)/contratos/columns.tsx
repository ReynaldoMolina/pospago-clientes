"use client";

import { BadgeCell } from "@/components/table/badge-cell";
import { DateCell, DateStatusCell } from "@/components/table/date-cell";
import { EditCell } from "@/components/table/edit-cell";
import { ContractTable } from "@/types";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<ContractTable>[] = [
  {
    id: "actions",
    header: "Edit",
    cell: ({ row }) => <EditCell href={`/contratos/${row.original.id}`} />,
  },
  {
    accessorKey: "numero_contrato",
    header: "Contrato",
  },
  {
    accessorKey: "fecha",
    header: "Fecha",
    cell: DateCell,
  },
  {
    accessorKey: "telefono",
    header: "Teléfono",
  },
  {
    accessorKey: "nombre_cliente",
    header: "Nombre",
  },
  {
    accessorKey: "plan_aportado",
    header: "Plan",
  },
  {
    accessorKey: "vence",
    header: "Vence el",
    cell: DateStatusCell,
  },
  {
    accessorKey: "tipo_contrato",
    header: "Tipo",
    cell: BadgeCell,
  },
];
