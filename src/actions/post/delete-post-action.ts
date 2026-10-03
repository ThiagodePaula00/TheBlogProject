'use server'

import { postRepository } from "@/src/repository/post";
import { revalidatePath, updateTag } from "next/cache";

export async function deletePostAction(id: string) {
    if(!id || typeof id !== 'string') {
        return {
            error: 'Dados inválidos',
        };
    }

    const post = await postRepository.deleteById(id);

    if (!post) {
        return {
            error: 'Post não encontrado',
        };
    }

    updateTag('posts');
    updateTag(`post-${post.slug}`);
    revalidatePath('/admin/post');

    return {
        error: '',
    };
}