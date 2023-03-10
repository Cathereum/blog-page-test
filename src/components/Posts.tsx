import { useContext } from "react";
import { Ipost } from "../interfaces/interfaces";
import { PostsContext } from "./Main";
import { PostItem } from "./PostItem";

export const Posts = () => {
  const { allPosts } = useContext(PostsContext);
  return (
    <main className="container mx-auto my-2">
      <h1 className="text-center">Список постов:</h1>
      {allPosts.map((post: Ipost, index: number) => (
        <PostItem key={post.id} post={post} index={index} />
      ))}
    </main>
  );
};
