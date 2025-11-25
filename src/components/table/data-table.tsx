"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Table>
      <TableHeader className="bg-muted sticky top-0">
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              const size = header.getSize();
              const maxSize = header.column.columnDef.maxSize;

              return (
                <TableHead
                  key={header.id}
                  style={{
                    width: size !== 150 ? header.getSize() : undefined,
                    maxWidth: maxSize ? maxSize : undefined,
                  }}
                  className="text-xs font-semibold"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              );
            })}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map((row) => (
            <TableRow
              key={row.id}
              data-state={row.getIsSelected() && "selected"}
            >
              {row.getVisibleCells().map((cell) => {
                const size = cell.column.getSize();
                const maxSize = cell.column.columnDef.maxSize;

                return (
                  <TableCell
                    key={cell.id}
                    style={{
                      width: size !== 150 ? cell.column.getSize() : undefined,
                      maxWidth: maxSize ? maxSize : undefined,
                    }}
                    className="border-r last-of-type:border-r-0"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                );
              })}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={columns.length} className="h-24 text-center">
              No hay resultados.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
