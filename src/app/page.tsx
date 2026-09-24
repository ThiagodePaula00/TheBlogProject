import { Suspense } from "react";
import { SpinLoader } from "../components/spinLoader";
import { PostsList } from "../components/PostsList";
import { Container } from "../components/Container";
import { Header } from "../components/Header";
import Link from "next/link";
import Image from "next/image";

export default async function homePage() {

  return (
      <Container>
          <Header/>

          <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
            <Link className="w-full h-full overflow-hidden rounded-xl" href="#">
              <Image className="w-full h-full object-cover object-center group-hover:scale-105 transition" src='/imagens/bryen_0.png' width={1200} height={720} alt="Título do post" priority />
            </Link>
            <div className="flex flex-col gap-4 sm:justify-center">
              <time className="text-slate-600 block text-sm/tight" dateTime="2026-09-24">23/09/26 10:00</time>

              <h1 className="text-2xl/tight font-extrabold sm:text-4xl">
                <Link href="#">Lorem ipsum dolor sit amet.</Link>
              </h1>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, possimus optio magnam tempore unde tenetur quod praesentium rem! Commodi nam rem velit vitae distinctio ad debitis beatae nihil porro libero?
              </p>
            </div>
          </section>

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

// x e y se referem a eixos. px é padding no eixo x e py é padding no eixo y, por exemplo
/* dark:bg-slate-900 dark:text-slate-100 */