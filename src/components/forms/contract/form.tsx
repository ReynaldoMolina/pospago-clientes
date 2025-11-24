"use client";

import { FormInput } from "@/components/form-elements/form-input";
import {
  FieldDescription,
  FieldGroup,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { UseFormReturn } from "react-hook-form";
import z from "zod";
import { FormSelect } from "@/components/form-elements/form-select";
import { FormTextArea } from "@/components/form-elements/form-text-area";
import { FieldSetGroup } from "@/components/form-elements/form-field-group";
import { contractSchema } from "../validation/contract";
import { SelectOptions } from "@/types";
import { FormComboBox } from "@/components/form-elements/form-combobox";
import { FormDatePicker } from "@/components/form-elements/form-date-picker";

interface ContractForm {
  form: UseFormReturn<z.infer<typeof contractSchema>>;
  clientsOptions: SelectOptions[];
}

export function ContractForm({ form, clientsOptions }: ContractForm) {
  return (
    <FieldGroup>
      <FieldSet>
        <FieldLegend>Datos del contrato</FieldLegend>
        <FieldDescription>Ingresa los datos del contrato</FieldDescription>
        <FieldSetGroup allowRow>
          <FormInput
            control={form.control}
            name="numero_contrato"
            label="Número contrato"
          />
          <FormDatePicker control={form.control} name="fecha" label="Fecha" />
        </FieldSetGroup>

        <FieldSetGroup allowRow>
          <FormInput control={form.control} name="telefono" label="Teléfono" />
          <FormSelect
            control={form.control}
            name="plan_aportado"
            label="Plan aportado"
            options={[
              {
                value: "C$600",
                label: "C$600",
              },
              {
                value: "C$700",
                label: "C$700",
              },
              {
                value: "C$800",
                label: "C$800",
              },
            ]}
          />
        </FieldSetGroup>
        <FieldSetGroup>
          <FormSelect
            control={form.control}
            name="tipo_contrato"
            label="Tipo de contrato"
            options={[
              {
                value: "Normal",
                label: "Normal",
              },
              {
                value: "Interconexión",
                label: "Interconexión",
              },
              {
                value: "Prepago a pospago",
                label: "Prepago a pospago",
              },
            ]}
          />
          <FormDatePicker
            control={form.control}
            name="vence"
            label="Vence el"
          />
        </FieldSetGroup>
        <FormSelect
          control={form.control}
          name="oferta_adicional"
          label="Oferta adicional"
          options={[
            {
              value: "YouTube/Tik Tok",
              label: "YouTube/Tik Tok",
            },
            {
              value: "10GB adicionales",
              label: "10GB adicionales",
            },
          ]}
        />
      </FieldSet>

      <FieldSeparator />

      <FieldSet>
        <FieldLegend>Información del cliente</FieldLegend>
        <FieldDescription>
          Ingresa los datos básicos del cliente
        </FieldDescription>
        <FormComboBox
          control={form.control}
          name="id_cliente"
          selectOptions={clientsOptions}
          label="Cliente"
        />

        <FieldSetGroup>
          <FormInput control={form.control} name="cedula" label="Cédula" />
          <FormInput control={form.control} name="correo" label="Correo" />
        </FieldSetGroup>
      </FieldSet>

      <FieldSet>
        <FormTextArea control={form.control} name="notas" label="Notas" />
      </FieldSet>
    </FieldGroup>
  );
}
