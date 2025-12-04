import z from "zod";

export const clientSchema = z.object({
  telefono: z.string().min(8, "Debe tener al menos 8 dígitos"),
  fecha: z.string().min(1, "Requerido"),
  nombre: z.string().nullable(),
  estado: z.string().min(1, "Requerido"),
  notas: z.string().nullable(),
});
