import { useContext, useState } from "react";
import { Ipost } from "../interfaces/interfaces";
import { PostsContext } from "./Main";

type PostItemProps = {
  post: Ipost;
  index: number;
};

export const PostItem = ({ post, index }: PostItemProps) => {
  const { allPosts, setAllPosts } = useContext(PostsContext);
  const [showBody, setShowBody] = useState(false);

  const removePost = (id: number) => {
    setAllPosts(allPosts.filter((post) => post.id !== id));
  };
  return (
    <div className="border flex justify-between px-2 py-4 my-2">
      <div>
        <h2 className="text-red-600 text-2xl">Пост № {index + 1}</h2>
        <h1 className="text-lg font-bold">{post.title}</h1>
        <p className="text-base w-[650px]">
          {showBody ? post.body : `${post.body.slice(0, 80)}.....`}
        </p>
      </div>
      <div className="flex items-center">
        <button
          onClick={() => setShowBody((prev) => !prev)}
          className="border py-2 px-4 bg-blue-400 text-white hover:bg-blue-500"
        >
          {showBody ? "Свернуть" : "Развернуть"}
        </button>
        <button
          onClick={() => removePost(post.id)}
          className="border py-2 px-4 bg-blue-400 text-white hover:bg-blue-500"
        >
          Удалить
        </button>
      </div>
    </div>
  );
};
