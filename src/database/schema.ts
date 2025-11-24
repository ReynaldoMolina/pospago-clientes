import { integer, pgTable, text } from "drizzle-orm/pg-core";

export const cliente = pgTable("cliente", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  telefono: text().notNull(),
  fecha: text().notNull(),
  nombre: text(),
  apellido: text(),
  municipio: text(),
  estado: text().notNull(), // contactado, no contactado, en espera, etc.
  notas: text(),
});

export const contrato = pgTable("contrato", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  numero_contrato: text().notNull(),
  fecha: text().notNull(),
  id_cliente: integer().references(() => cliente.id),
  telefono: text().notNull(),
  vence: text().notNull(),
  plan_aportado: text().notNull(), // cliente no encontrado, nuevo, sin referencias, etc.
  oferta_adicional: text(),
  cedula: text().notNull(),
  correo: text().notNull().unique(),
  tipo_contrato: text().notNull(), // interconexcion, migracion o normal
  notas: text(),
});
