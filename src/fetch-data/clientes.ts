import { db } from "@/app";
import { sql, asc, desc, eq } from "drizzle-orm";
import { buildSearchFilter } from "./build-by-search";
import { SearchParamsProps } from "@/types";
import { getUrlParams } from "./get-url-params";
import { cliente } from "@/database/schema";

export async function getClients(searchParams: SearchParamsProps) {
  const { search, limit, offset } = getUrlParams(searchParams);

  const filterBySearch = buildSearchFilter(searchParams, [
    cliente.telefono,
    cliente.nombre,
    cliente.apellido,
    cliente.municipio,
    cliente.estado,
  ]);

  try {
    const query = db
      .select({
        id: cliente.id,
        telefono: cliente.telefono,
        fecha: cliente.fecha,
        nombre_cliente: sql<string>`${cliente.nombre} || ' ' || ${cliente.apellido}`,
        municipio: cliente.municipio,
        estado: cliente.estado,
        notas: cliente.notas,
      })
      .from(cliente)
      .where(filterBySearch)
      .orderBy(desc(cliente.id));

    if (limit !== undefined) query.limit(limit);
    if (offset !== undefined) query.offset(offset);

    const data = await query;

    const [{ count }] = await db
      .select({ count: sql<number>`COUNT(*)` })
      .from(cliente)
      .where(filterBySearch);

    const totalPages = limit ? Math.ceil(count / limit) : 1;

    return { data, search, totalPages };
  } catch (error) {
    throw new Error("No se pudieron obtener los clientes.");
  }
}

export async function getClientById(id: number | string) {
  try {
    const [data] = await db
      .select()
      .from(cliente)
      .where(eq(cliente.id, Number(id)));
    return data;
  } catch (error) {
    throw new Error("No se pudo obtener el cliente.");
  }
}

export async function getClientsSelect() {
  try {
    const data = await db
      .select({
        value: sql<string>`CAST(${cliente.id} AS TEXT)`,
        label: sql<string>`${cliente.nombre} || ' ' || ${cliente.apellido}`,
      })
      .from(cliente)
      .orderBy(asc(cliente.nombre));

    return data;
  } catch (error) {
    throw new Error("No se pudieron obtener los clientes.");
  }
}
