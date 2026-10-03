import { findAllPostAdmin } from "@/src/lib/post/queries/admin";
import Link from "next/link";
import { DelelePostButton } from "../admin/PostDeleteButton";

export default async function PostListAdmin() {
  const posts = await findAllPostAdmin();

  return (
    <div className='mb-16'>
      {posts.map((post) => (
        <div
          className={`py-2 px-2 ${!post.published && "bg-slate-300"} flex gap-2 items-center justify-between`}
          key={post.id}
        >
          <Link href={`/admin/post/${post.id}`}>{post.title}</Link>

          {!post.published && <span className="text-xl text-slate-600 italic"> (Não publicado)</span>}

          <DelelePostButton id={post.id} title={post.title}/>
        </div>
      )
      )};

      <div className={`fixed z-50 inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center`}>

        <div className="bg-slate-100 p-6 rounded-lg max-w-2xl mx-6 flex flex-col gap-6 shadow-lg shadow-black/30 text-center">

          <h3 className="text-xl font-extrabold">Título</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, quis! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur neque vitae facilis voluptates in illo amet blanditiis deserunt, maxime incidunt quas eligendi, provident quam necessitatibus eius laudantium eos quia ab!</p>

        <div className="flex items-center justify-around">

          <button className="bg-slate-300 hover:bg-slate-400 transition text-slate-950 flex items-center justify-center py-2 px-4 rounded-lg cursor-pointer" autoFocus>
            Cancelar
          </button>

          <button className="bg-blue-500 hover:bg-blue-600 transition text-blue-50 flex items-center justify-center py-2 px-4 rounded-lg cursor-pointer">
            Ok
          </button>
        </div>

      </div>
      </div>
    </div>
  );
}