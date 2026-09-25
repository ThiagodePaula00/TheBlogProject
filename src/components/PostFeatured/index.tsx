import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";

export function PostFeatured() {
    const slug = 'qualquer';
    const postLink = `/post/${slug}`;
    
    return (
          <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">

              <PostCoverImage linkProps={{ href: postLink }} imageProps={{ width: 1200, height: 700, src: '/imagens/bryen_9.png', alt:'Alt da image', priority: true}} />

            <div className="flex flex-col gap-4 sm:justify-center">
              <time className="text-slate-600 block text-sm/tight" dateTime="2026-09-24">23/09/26 10:00</time>

              <PostHeading as='h1' url={postLink}>
                Lorem, ipsum dolor.
              </PostHeading>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, possimus optio magnam tempore unde tenetur quod praesentium rem! Commodi nam rem velit vitae distinctio ad debitis beatae nihil porro libero?
              </p>
            </div>
          </section>
    )
}