import { Suspense } from "react";
import { SpinLoader } from "../components/Header/spinLoader";
import { PostsList } from "../components/PostsList";

export default async function homePage() {

  return (
    <div>
      <header>
        <h1 className="text-6xl font-bold text-center py-8">
          Aqui é a header
        </h1>
      </header>

      <Suspense fallback={<SpinLoader/>}>
          <PostsList />
      </Suspense>

        <footer>
        <p className="text-6xl font-bold text-center py-8">
          Aqui é a footer
        </p>
      </footer>
    </div>
  );
}