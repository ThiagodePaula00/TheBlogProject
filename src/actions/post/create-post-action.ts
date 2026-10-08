'use server'

type CreatePostActionState = {
    numero: number;
}

export async function createPostAction(
    state: CreatePostActionState,
): Promise<CreatePostActionState> {
    
    return {
        numero: 0,
    };
}