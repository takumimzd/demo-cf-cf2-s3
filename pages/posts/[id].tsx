import Link from "next/link";

const Post = () => {
  return (
    <div>
      <p>posts/[id].tsx</p>
      <div>
        <button>
          <Link href={"/posts"}>To posts/index.tsx</Link>
        </button>
      </div>
      <div>
        <button>
          <Link href={"/"}>To /</Link>
        </button>
      </div>
    </div>
  );
};

export default Post;
