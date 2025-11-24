"use client";

import { startTransition, useActionState } from "react";
import { Card, CardContent } from "../../ui/card";
import * as z from "zod";
import { ClientById } from "@/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { stateDefault } from "@/server-actions/state-message";
import { clientSchema } from "../validation/client";
import { ClientForm } from "./form";
import { updateClient } from "@/server-actions/client";
import { useServerActionFeedback } from "@/hooks/use-server-status";
import { FormCardFooter } from "@/components/form-elements/form-footer";

interface EditClientForm {
  client: ClientById;
}

export function EditClientForm({ client }: EditClientForm) {
  const form = useForm<z.infer<typeof clientSchema>>({
    resolver: zodResolver(clientSchema),
    defaultValues: {
      telefono: client.telefono,
      fecha: client.fecha,
      nombre: client.nombre,
      apellido: client.apellido,
      municipio: client.municipio ?? "",
      estado: client.estado,
      notas: client.notas,
    },
  });

  const [state, formAction, isPending] = useActionState(
    updateClient,
    stateDefault
  );

  function onSubmit(values: z.infer<typeof clientSchema>) {
    startTransition(() => {
      formAction({ id: client.id, values: values as ClientById });
    });
  }

  useServerActionFeedback(state, { redirectTo: "/clientes" });

  return (
    <Card className="max-w-xl w-full mx-auto">
      <CardContent>
        <form id="client-form" onSubmit={form.handleSubmit(onSubmit)}>
          <ClientForm form={form} />
        </form>
      </CardContent>
      <FormCardFooter formId="client-form" isPending={isPending} />
    </Card>
  );
}
