import z from "zod";
import { zTextMin } from "./zod-helper";

export const contractSchema = z.object({
  numero_contrato: z.string().min(1, "Requerido"),
  fecha: z.string().min(1, "Requerido"),
  id_cliente: zTextMin(),
  telefono: z.string().min(8, "Debe tener 8 dígitos"),
  vence: z.string().min(1, "Requerido"),
  plan_aportado: z.string().min(1, "Requerido"),
  oferta_adicional: z.string().nullable(),
  cedula: z.string().min(1, "Requerido"),
  correo: z.string().min(1, "Requerido"),
  tipo_contrato: z.string().min(1, "Requerido"),
  notas: z.string().nullable(),
});
