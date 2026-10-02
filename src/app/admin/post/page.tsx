import { findAllPostAdmin } from "@/src/lib/post/queries/admin";
import { Metadata } from "next";
import { Suspense } from "react";
import { SpinLoader } from "../../../components/spinLoader";

export const metadata: Metadata = {
    title: 'Post Admin',
};

export default function adminLoginPage() {
  return (
    <Suspense fallback={<SpinLoader className="min-h-20" />}>
      <AdminPosts />
    </Suspense>
  );
}

async function AdminPosts() {
    const posts = await findAllPostAdmin()

  return (
    <div className='py-16'>
        {posts.map(post => {
           return <p key={post.id}>{post.title}</p>
        })}
    </div>
    );
}