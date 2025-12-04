"use client";

import { FormInput } from "@/components/form-elements/form-input";
import {
  FieldDescription,
  FieldGroup,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { UseFormReturn } from "react-hook-form";
import z from "zod";
import { clientSchema } from "../validation/client";
import { FormSelect } from "@/components/form-elements/form-select";
import { FormTextArea } from "@/components/form-elements/form-text-area";
import { FieldSetGroup } from "@/components/form-elements/form-field-group";
import { FormDatePicker } from "@/components/form-elements/form-date-picker";

interface ClientForm {
  form: UseFormReturn<z.infer<typeof clientSchema>>;
}

export function ClientForm({ form }: ClientForm) {
  return (
    <FieldGroup>
      <FieldSet>
        <FieldLegend>Seguimiento</FieldLegend>
        <FieldDescription>Ingresa los datos de seguimiento</FieldDescription>
        <FieldSetGroup allowRow>
          <FormInput control={form.control} name="telefono" label="Teléfono" />
          <FormDatePicker control={form.control} name="fecha" label="Fecha" />
        </FieldSetGroup>
        <FormInput control={form.control} name="nombre" label="Nombre" />
        <FormSelect
          control={form.control}
          name="estado"
          label="Estado"
          options={[
            {
              value: "Sin respuesta",
              label: "Sin respuesta",
            },
            {
              value: "Rechazado",
              label: "Rechazado",
            },
            {
              value: "Prospecto",
              label: "Prospecto",
            },
          ]}
        />
      </FieldSet>
      <FormTextArea control={form.control} name="notas" label="Notas" />
    </FieldGroup>
  );
}
