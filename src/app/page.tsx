import { Suspense } from "react";
import { SpinLoader } from "../components/spinLoader";
import { PostsList } from "../components/PostsList";
import { Container } from "../components/Container";
import { Header } from "../components/Header";
import { PostFeatured } from "../components/PostFeatured";

export default async function homePage() {

  return (
      <Container>
          <Header/>

            <PostFeatured/>

        <Suspense fallback={<SpinLoader/>}>
            <PostsList />
        </Suspense>

          <footer>
          <p className="text-6xl font-bold text-center py-8">
            Aqui é a footer
          </p>
        </footer>
      </Container>
  );
}

// x e y se referem a eixos. px é padding no eixo x e py é padding no eixo y, por exemplo.
/* dark:bg-slate-900 dark:text-slate-100 */