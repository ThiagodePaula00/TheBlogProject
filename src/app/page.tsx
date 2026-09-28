import { Suspense } from "react";
import { SpinLoader } from "../components/spinLoader";
import { PostsList } from "../components/PostsList";
import { PostFeatured } from "../components/PostFeatured";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Teste de título',
  description: "Essa seria a descrição dessa página.",
};

export default async function homePage() {

  return (
    <>
          <PostFeatured/>

        <Suspense fallback={<SpinLoader/>}>
            <PostsList />
        </Suspense>
    </>

  );
}

// x e y se referem a eixos. px é padding no eixo x e py é padding no eixo y, por exemplo.
/* dark:bg-slate-900 dark:text-slate-100 */