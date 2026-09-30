import { Suspense } from "react";
import { SpinLoader } from "../components/spinLoader";
import { PostsList } from "../components/PostsList";
import { PostFeatured } from "../components/PostFeatured";
// import { ServerComponent } from "../components/ServerComponent";
// import { ClientComponent } from "../components/ClientComponent";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: 'Teste de título',
//   description: "Essa seria a descrição dessa página.",
// };

export default async function homePage() {

  return (
    <>
        {/* <ClientComponent>
          <ServerComponent/>
        </ClientComponent> */}

        <Suspense fallback={<SpinLoader className="min-h-20 mb-16" />}>
          <PostFeatured/>
          <PostsList />
        </Suspense>
    </>

  );
}