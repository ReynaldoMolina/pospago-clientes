interface FieldSetGroup {
  children: React.ReactNode;
  allowRow?: boolean;
}

export function FieldSetGroup({ children, allowRow = false }: FieldSetGroup) {
  return (
    <div
      className={`${allowRow ? "gap-3 sm:gap-6" : "flex-col sm:flex-row gap-6"}
        flex`}
    >
      {children}
    </div>
  );
}
