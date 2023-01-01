import Link from "next/link";

const Posts = () => {
  return (
    <div>
      <p>posts/index.tsx</p>
      <div>
        <button>
          <Link href={"/posts/1"}>To posts/index.tsx</Link>
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

export default Posts;
