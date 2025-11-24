"use server";

import { db } from "@/app";
import { contrato } from "@/database/schema";
import { ContractById, ServerStatus } from "@/types";
import { eq } from "drizzle-orm";
import {
  stateCreateError,
  stateCreateSuccess,
  stateUpdateError,
  stateUpdateSuccess,
} from "./state-message";

interface CreateContract {
  values: ContractById;
}

export async function createContract(
  prevState: ServerStatus,
  data: CreateContract
) {
  let returningId: { id: number };

  try {
    [returningId] = await db
      .insert(contrato)
      .values(data.values)
      .returning({ id: contrato.id });

    return {
      ...stateCreateSuccess,
      returningId: returningId.id,
    };
  } catch (error) {
    console.error(error);
    return stateCreateError;
  }
}

interface UpdateContract {
  id: number | string;
  values: ContractById;
}

export async function updateContract(
  prevState: ServerStatus,
  data: UpdateContract
) {
  try {
    await db
      .update(contrato)
      .set(data.values)
      .where(eq(contrato.id, Number(data.id)));
    return stateUpdateSuccess;
  } catch (error) {
    console.error(error);
    return stateUpdateError;
  }
}
