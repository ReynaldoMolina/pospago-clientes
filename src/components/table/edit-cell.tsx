import Link from "next/link";
import { Button } from "../ui/button";
import { Pencil } from "lucide-react";

interface EditCell {
  href: string;
  // value: string;
}

export function EditCell({ href }: EditCell) {
  return (
    <Button variant="outline" size="table" asChild>
      <Link href={href} className="hover:underline">
        <Pencil className="size-3.5" />
      </Link>
    </Button>
  );
}
