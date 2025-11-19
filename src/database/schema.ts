import { boolean, integer, pgTable, text } from "drizzle-orm/pg-core";

export const cliente = pgTable("cliente", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  telefono: text().notNull(),
  cedula: text().notNull(),
  nombre: text().notNull(),
  apellido: text().notNull(),
  correo: text().unique(),
  municipio: text(),
  estado: text().notNull(), // contactado, no contactado, en espera, etc.
  notas: text(),
});

export const contrato = pgTable("contrato", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  idCliente: integer().references(() => cliente.id),
  telefono: text().notNull(),
  vence: text().notNull(),
  planAportado: text().notNull(), // cliente no encontrado, nuevo, sin referencias, etc.
  ofertaAdicional: text(),
  cedula: text().notNull(),
  correo: text().unique(),
  esInterconexion: boolean().notNull().default(false),
  notas: text(),
});
