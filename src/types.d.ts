export interface SearchParamsProps {
  search?: string;
  page?: string;
  limit?: string;
  offset?: string;
  start?: string;
  end?: string;
  state?: string;
}

export interface PageProps {
  params: Promise<{
    id: string;
    id_detalle: string;
  }>;
  searchParams: Promise<SearchParamsProps>;
}

export interface SelectOptions {
  value: string;
  label: string;
}

export type DateStatus = "active" | "due" | "expired" | "empty";

export interface ServerStatus {
  success: boolean | undefined;
  title: string;
  description?: string;
  returningId?: string | number;
}

export interface ClientTable {
  id: number;
  telefono: string;
  nombre_cliente: string | null;
  municipio: string | null;
  estado: string;
}

export interface ClientById {
  id: number;
  telefono: string;
  fecha: string;
  nombre: string | null;
  apellido: string | null;
  municipio: string | null;
  estado: string;
  notas: string | null;
}

export interface ContractTable {
  id: number;
  fecha: string;
  nombre_cliente: string;
  numero_contrato: string;
  telefono: string;
  vence: string;
  plan_aportado: string;
  tipo_contrato: string;
}

export interface ContractById {
  id: number;
  numero_contrato: string;
  fecha: string;
  id_cliente: number | null;
  telefono: string;
  vence: string;
  plan_aportado: string;
  oferta_adicional: string | null;
  cedula: string;
  correo: string;
  tipo_contrato: string;
  notas: string | null;
}
