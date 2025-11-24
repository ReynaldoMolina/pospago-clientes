import { SearchParamsProps } from "@/types";

export const ITEMS_PER_PAGE = 20;

export function getUrlParams(searchParams: SearchParamsProps) {
  const search = searchParams?.search || "";
  const stateParam = searchParams?.state || false;
  const limitNum = Number(searchParams?.limit) || 0;
  const pageNum = Number(searchParams?.page) || 1;
  const showAllRows = limitNum === 1;

  const limit = showAllRows
    ? undefined
    : limitNum === 0
    ? ITEMS_PER_PAGE
    : limitNum;

  const offset = limit ? (pageNum - 1) * limit : undefined;
  const state = stateParam ? true : false;

  return { search, state, limit, offset };
}
