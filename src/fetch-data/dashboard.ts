import { db } from "@/app";
import { sql, count } from "drizzle-orm";
import { SearchParamsProps } from "@/types";
import { cliente, contrato } from "@/database/schema";

export type DashboardData = {
  retencion: number;
  interconexionCount: number;
  interconexion: number;
  prepago_a_pospagoCount: number;
  prepago_a_pospago: number;
  normalCount: number;
  normal: number;
  ventas: number;
};

export async function getDashboardData(
  searchParams: SearchParamsProps
): Promise<DashboardData> {
  try {
    const [contractMetrics] = await db
      .select({
        totalContratos: count(contrato.id).as("totalContratos"),
        interconexionCount:
          sql<number>`count(case when ${contrato.tipo_contrato} = 'Interconexión' then 1 else null end)`.as(
            "interconexionCount"
          ),
        migracionCount:
          sql<number>`count(case when ${contrato.tipo_contrato} = 'Prepago a pospago' then 1 else null end)`.as(
            "migracionCount"
          ),
      })
      .from(contrato);

    const [totalClientsResult] = await db
      .select({
        count: count(cliente.id).as("count"),
      })
      .from(cliente);

    const [clientsWithContractsResult] = await db
      .select({
        count: sql<number>`count(distinct ${contrato.id_cliente})`.as("count"),
      })
      .from(contrato);

    const { totalContratos, interconexionCount, migracionCount } =
      contractMetrics;

    const totalClientes = totalClientsResult.count;

    const totalClientsWithContracts = clientsWithContractsResult.count;

    // --- CALCULATIONS ---

    // 1. Ventas (Sales)
    // Defined as the total number of contracts created.
    const ventas = totalContratos;

    // 2. Interconexion (%)
    // Percentage of 'interconexion' contracts out of all contracts.
    const interconexion =
      totalContratos > 0
        ? Math.round((interconexionCount / totalContratos) * 100)
        : 0;

    // 3. Prepago a Pospago (Migration %)
    // Percentage of 'migracion' contracts out of all contracts.
    const prepago_a_pospago =
      totalContratos > 0
        ? Math.round((migracionCount / totalContratos) * 100)
        : 0;

    const normal =
      totalContratos > 0
        ? Math.round(
            ((ventas - interconexionCount - migracionCount) / totalContratos) *
              100
          )
        : 0;

    // 4. Retencion (Retention %)
    // Percentage of total clients who have at least one contract (are 'retained').
    const retencion =
      totalClientes > 0
        ? Math.round((totalClientsWithContracts / totalClientes) * 100)
        : 0;

    return {
      retencion,
      interconexionCount: Number(interconexionCount),
      interconexion,
      prepago_a_pospagoCount: Number(migracionCount),
      prepago_a_pospago,
      normalCount: ventas - interconexionCount - migracionCount,
      normal,
      ventas,
    };
  } catch (error) {
    // Log the actual error for debugging, then throw a generic message
    console.error("Database error during dashboard data fetch:", error);
    throw new Error("No se pudo obtener los datos para el dashboard.");
  }
}
