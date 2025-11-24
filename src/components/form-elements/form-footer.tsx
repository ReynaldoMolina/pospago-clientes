import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";
import { CardFooter } from "../ui/card";
import { Field } from "../ui/field";

interface FormFooterProps {
  formId: string;
  label?: string;
  isPending?: boolean;
  isNew?: boolean;
}

export function FormCardFooter({
  formId,
  label,
  isPending = false,
  isNew = false,
}: FormFooterProps) {
  const router = useRouter();

  return (
    <CardFooter className="justify-end gap-3 flex-col-reverse sm:flex-row">
      <Button
        type="button"
        variant="secondary"
        className="w-full sm:w-fit"
        onClick={() => router.back()}
      >
        Cancelar
      </Button>
      <Button
        type="submit"
        form={formId}
        disabled={isPending}
        className="w-full sm:w-23"
      >
        {isPending ? <Spinner /> : label ? label : isNew ? "Crear" : "Guardar"}
      </Button>
    </CardFooter>
  );
}
