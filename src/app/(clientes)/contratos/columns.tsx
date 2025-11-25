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
    size: 40,
  },
  {
    accessorKey: "fecha",
    header: "Fecha",
    cell: DateCell,
    size: 100,
  },
  {
    accessorKey: "numero_contrato",
    header: "Contrato",
    size: 80,
  },
  {
    accessorKey: "telefono",
    header: "Teléfono",
    size: 80,
  },
  {
    accessorKey: "nombre_cliente",
    header: "Nombre",
  },
  {
    accessorKey: "plan_aportado",
    header: "Plan",
    size: 80,
  },
  {
    accessorKey: "tipo_contrato",
    header: "Tipo",
    cell: BadgeCell,
    size: 100,
  },
  {
    accessorKey: "vence",
    header: "Vence el",
    cell: DateStatusCell,
    size: 100,
  },
];
