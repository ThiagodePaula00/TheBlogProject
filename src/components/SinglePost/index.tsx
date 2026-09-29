import { findPostBySlugCached } from "@/src/lib/post/queries";

type SinglePostprops = {
    slug: string
}

export async function SinglePost({slug}: SinglePostprops) {
    const post = await findPostBySlugCached(slug);

      return (
    <div>
      <p>{post.content}</p>
    </div>
  );
}