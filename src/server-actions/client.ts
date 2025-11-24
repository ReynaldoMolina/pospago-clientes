"use server";

import { db } from "@/app";
import { cliente } from "@/database/schema";
import { ClientById, ServerStatus } from "@/types";
import { eq } from "drizzle-orm";
import {
  stateCreateError,
  stateCreateSuccess,
  stateUpdateError,
  stateUpdateSuccess,
} from "./state-message";

interface CreateClient {
  values: ClientById;
}

export async function createClient(
  prevState: ServerStatus,
  data: CreateClient
) {
  let returningId: { id: number };

  try {
    [returningId] = await db
      .insert(cliente)
      .values(data.values)
      .returning({ id: cliente.id });

    return {
      ...stateCreateSuccess,
      returningId: returningId.id,
    };
  } catch (error) {
    console.error(error);
    return stateCreateError;
  }
}

interface UpdateClient {
  id: number | string;
  values: ClientById;
}

export async function updateClient(
  prevState: ServerStatus,
  data: UpdateClient
) {
  try {
    await db
      .update(cliente)
      .set(data.values)
      .where(eq(cliente.id, Number(data.id)));
    return stateUpdateSuccess;
  } catch (error) {
    console.error(error);
    return stateUpdateError;
  }
}
