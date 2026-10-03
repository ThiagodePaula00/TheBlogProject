'use server'

import { asyncDelay } from "@/src/utils/async-delay";

export async function deletePostAction(id: string) {
    await asyncDelay(2000)

    return id;
}