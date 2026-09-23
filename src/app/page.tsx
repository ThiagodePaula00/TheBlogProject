import { SpinLoader } from "../components/Header/spinLoader";
import { postRepository } from "../repository/post";

export default function homePage() {

  return (
    <div>
      <SpinLoader containerClasses="min-h-[500px] bg-amber-500" />
    </div>
  );
}