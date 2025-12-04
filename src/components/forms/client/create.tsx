"use client";

import { startTransition, useActionState } from "react";
import * as z from "zod";
import { ClientById } from "@/types";
import { useForm } from "react-hook-form";
import { stateDefault } from "@/server-actions/state-message";
import { clientSchema } from "../validation/client";
import { ClientForm } from "./form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createClient } from "@/server-actions/client";
import { useServerActionFeedback } from "@/hooks/use-server-status";
import { Card, CardContent } from "@/components/ui/card";
import { FormCardFooter } from "@/components/form-elements/form-footer";
import { getCurrentDate } from "@/lib/get-current-date";

export function CreateClientForm() {
  const { currentDate } = getCurrentDate();

  const form = useForm<z.infer<typeof clientSchema>>({
    resolver: zodResolver(clientSchema),
    defaultValues: {
      telefono: "",
      fecha: currentDate,
      nombre: "",
      estado: "",
      notas: "",
    },
  });

  const [state, formAction, isPending] = useActionState(
    createClient,
    stateDefault
  );

  function onSubmit(values: z.infer<typeof clientSchema>) {
    startTransition(() => {
      formAction({ values: values as ClientById });
    });
  }

  useServerActionFeedback(state, { redirectTo: "/clientes" });

  return (
    <Card className="w-full max-w-xl mx-auto">
      <CardContent>
        <form
          id="client-form"
          onSubmit={form.handleSubmit(onSubmit)}
          className="max-w-xl w-full mx-auto"
        >
          <ClientForm form={form} />
        </form>
      </CardContent>
      <FormCardFooter formId="client-form" isNew={true} isPending={isPending} />
    </Card>
  );
}
