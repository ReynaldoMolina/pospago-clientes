"use client";

import { startTransition, useActionState } from "react";
import { Card, CardContent } from "../../ui/card";
import * as z from "zod";
import { ContractById, SelectOptions } from "@/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { stateDefault } from "@/server-actions/state-message";
import { useServerActionFeedback } from "@/hooks/use-server-status";
import { FormCardFooter } from "@/components/form-elements/form-footer";
import { contractSchema } from "../validation/contract";
import { updateContract } from "@/server-actions/contract";
import { ContractForm } from "./form";

interface EditContractForm {
  contract: ContractById;
  clientsOptions: SelectOptions[];
}

export function EditContractForm({
  contract,
  clientsOptions,
}: EditContractForm) {
  const form = useForm<z.infer<typeof contractSchema>>({
    resolver: zodResolver(contractSchema),
    defaultValues: {
      numero_contrato: contract.numero_contrato,
      id_cliente: contract.id_cliente ?? 0,
      fecha: contract.fecha,
      telefono: contract.telefono,
      vence: contract.vence,
      plan_aportado: contract.plan_aportado,
      oferta_adicional: contract.oferta_adicional,
      cedula: contract.cedula,
      correo: contract.correo,
      tipo_contrato: contract.tipo_contrato,
      notas: contract.notas,
    },
  });

  const [state, formAction, isPending] = useActionState(
    updateContract,
    stateDefault
  );

  function onSubmit(values: z.infer<typeof contractSchema>) {
    startTransition(() => {
      formAction({ id: contract.id, values: values as ContractById });
    });
  }

  useServerActionFeedback(state, { redirectTo: "/contratos" });

  return (
    <Card className="max-w-xl w-full mx-auto">
      <CardContent>
        <form id="client-form" onSubmit={form.handleSubmit(onSubmit)}>
          <ContractForm form={form} clientsOptions={clientsOptions} />
        </form>
      </CardContent>
      <FormCardFooter formId="client-form" isPending={isPending} />
    </Card>
  );
}
