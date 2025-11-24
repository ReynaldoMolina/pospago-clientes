import { db } from "@/app";
import { sql, desc, eq } from "drizzle-orm";
import { buildSearchFilter } from "./build-by-search";
import { SearchParamsProps } from "@/types";
import { getUrlParams } from "./get-url-params";
import { cliente, contrato } from "@/database/schema";

export async function getContracts(searchParams: SearchParamsProps) {
  const { search, limit, offset } = getUrlParams(searchParams);

  const filterBySearch = buildSearchFilter(searchParams, [
    contrato.numero_contrato,
    contrato.telefono,
    cliente.nombre,
    cliente.apellido,
  ]);

  try {
    const query = db
      .select({
        id: contrato.id,
        numero_contrato: contrato.numero_contrato,
        fecha: contrato.fecha,
        nombre_cliente: sql<string>`${cliente.nombre} || ' ' || ${cliente.apellido}`,
        telefono: contrato.telefono,
        vence: contrato.vence,
        plan_aportado: contrato.plan_aportado,
        tipo_contrato: contrato.tipo_contrato,
      })
      .from(contrato)
      .leftJoin(cliente, eq(contrato.id_cliente, cliente.id))
      .where(filterBySearch)
      .orderBy(desc(contrato.id));

    if (limit !== undefined) query.limit(limit);
    if (offset !== undefined) query.offset(offset);

    const data = await query;

    const [{ count }] = await db
      .select({ count: sql<number>`COUNT(*)` })
      .from(contrato)
      .leftJoin(cliente, eq(contrato.id_cliente, cliente.id))
      .where(filterBySearch);

    const totalPages = limit ? Math.ceil(count / limit) : 1;

    return { data, search, totalPages };
  } catch (error) {
    throw new Error("No se pudieron obtener los contratos.");
  }
}

export async function getContractById(id: number | string) {
  try {
    const [data] = await db
      .select()
      .from(contrato)
      .where(eq(contrato.id, Number(id)));
    return data;
  } catch (error) {
    throw new Error("No se pudo obtener el contrato.");
  }
}
