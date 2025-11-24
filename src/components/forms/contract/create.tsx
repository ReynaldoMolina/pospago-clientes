"use client";

import { startTransition, useActionState } from "react";
import * as z from "zod";
import { ContractById, SelectOptions } from "@/types";
import { useForm } from "react-hook-form";
import { stateDefault } from "@/server-actions/state-message";
import { zodResolver } from "@hookform/resolvers/zod";
import { useServerActionFeedback } from "@/hooks/use-server-status";
import { Card, CardContent } from "@/components/ui/card";
import { FormCardFooter } from "@/components/form-elements/form-footer";
import { contractSchema } from "../validation/contract";
import { createContract } from "@/server-actions/contract";
import { ContractForm } from "./form";
import { getCurrentDate } from "@/lib/get-current-date";

interface CreateContractForm {
  selectOptions: SelectOptions[];
}

export function CreateContractForm({ selectOptions }: CreateContractForm) {
  const { currentDate } = getCurrentDate();

  const form = useForm<z.infer<typeof contractSchema>>({
    resolver: zodResolver(contractSchema),
    defaultValues: {
      numero_contrato: "",
      id_cliente: 0,
      fecha: currentDate,
      telefono: "",
      vence: "",
      plan_aportado: "",
      oferta_adicional: "",
      cedula: "",
      correo: "",
      tipo_contrato: "",
      notas: "",
    },
  });

  const [state, formAction, isPending] = useActionState(
    createContract,
    stateDefault
  );

  function onSubmit(values: z.infer<typeof contractSchema>) {
    startTransition(() => {
      formAction({ values: values as ContractById });
    });
  }

  useServerActionFeedback(state, { redirectTo: "/contratos" });

  return (
    <Card className="w-full max-w-xl mx-auto">
      <CardContent>
        <form
          id="client-form"
          onSubmit={form.handleSubmit(onSubmit)}
          className="max-w-xl w-full mx-auto"
        >
          <ContractForm form={form} clientsOptions={selectOptions} />
        </form>
      </CardContent>
      <FormCardFooter formId="client-form" isNew={true} isPending={isPending} />
    </Card>
  );
}
