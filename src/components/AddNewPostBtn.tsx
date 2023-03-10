import { useContext } from "react";
import { PostsContext } from "./Main";

export const AddNewPostBtn = () => {
  const { setModal } = useContext(PostsContext);

  return (
    <button
      onClick={() => setModal(true)}
      className="fixed py-2 px-4 bg-yellow-400 rounded-full bottom-5 right-5 hover:bg-yellow-300"
    >
      Add Post
    </button>
  );
};
