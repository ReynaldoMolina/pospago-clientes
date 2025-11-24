import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { Field, FieldDescription, FieldError, FieldLabel } from "../ui/field";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { useState } from "react";
import { Button } from "../ui/button";
import { dateIsoToDate, dateToIso, formatDateShort } from "@/lib/formatters";
import { ChevronDownIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { es } from "date-fns/locale";
import { getCurrentDate } from "@/lib/get-current-date";

interface FormDatePicker<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  description?: string;
}

export function FormDatePicker<T extends FieldValues>({
  control,
  name,
  label,
  description,
}: FormDatePicker<T>) {
  const [open, setOpen] = useState(false);
  const { currentYear } = getCurrentDate();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor={field.name}>{label}</FieldLabel>

          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                id={field.name}
                className={`${
                  field.value ? "" : "text-muted-foreground"
                } w-full justify-between font-normal`}
              >
                {field.value
                  ? formatDateShort(field.value)
                  : "Seleccionar fecha"}
                <ChevronDownIcon />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-auto overflow-hidden p-0"
              align="start"
            >
              <Calendar
                mode="single"
                selected={dateIsoToDate(field.value)}
                captionLayout="dropdown"
                onSelect={(date) => {
                  if (date) {
                    field.onChange(dateToIso(date));
                    setOpen(false);
                  }
                }}
                locale={es}
                startMonth={new Date(2025, 0)}
                endMonth={new Date(currentYear + 2, 11)}
              />
            </PopoverContent>
          </Popover>
          {description && <FieldDescription>{description}</FieldDescription>}
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}
