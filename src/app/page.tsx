import { Suspense } from "react";
import { SpinLoader } from "../components/Header/spinLoader";
import { PostsList } from "../components/PostsList";
import { Container } from "../components/Container";

export default async function homePage() {

  return (
      <Container>
        <header>
          <h1 className="text-6xl font-bold text-center py-8">
            Aqui é a header
          </h1>
          <p className="text-justify p-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptatem consequatur iure nisi iusto. Eos, modi fugiat nesciunt nostrum dolor nemo ipsa ullam alias, possimus non nihil repudiandae molestiae quasi? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla atque praesentium quod aspernatur, sunt debitis aut odio eligendi iusto quaerat? Inventore quasi atque voluptatum harum quidem consectetur accusantium sapiente nam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime sapiente rerum maiores suscipit beatae natus dicta facilis non assumenda amet qui, minus aliquid numquam ipsum quod earum quae recusandae dolorum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis cumque illo officia blanditiis neque suscipit? Iure totam accusantium eaque cumque? Nam dignissimos impedit modi eius. Quaerat quae perferendis officiis eaque.
          </p>
        </header>

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