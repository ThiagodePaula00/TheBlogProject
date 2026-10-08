'use server'

import { PublicPost } from "@/src/dto/post/dto";

type CreatePostActionState = {
    formState: PublicPost;
    errors: string[];
}

export async function createPostAction(
    Prevstate: CreatePostActionState,
    formData: FormData,
): Promise<CreatePostActionState> {

    const title = formData.get('title')?.toString() || '';
;
    return {
        formState: {...Prevstate.formState, title},
        errors: [],
    };
}