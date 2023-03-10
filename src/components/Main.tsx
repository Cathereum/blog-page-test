import { createContext, useEffect, useState } from "react";
import { fetchPostsData } from "../API/fetchPostsData";
import { AddNewPostBtn } from "./AddNewPostBtn";
import { Modal } from "./Modal";
import { Posts } from "./Posts";
import { Select } from "./Select";
import { Ipost } from "../interfaces/interfaces";

type PostsContextProps = {
  allPosts: Ipost[];
  setAllPosts: React.Dispatch<React.SetStateAction<Ipost[]>>;
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};
export const PostsContext = createContext<PostsContextProps>({
  allPosts: [],
  setAllPosts: () => {},
  modal: false,
  setModal: () => {},
});

export const Main = () => {
  const [allPosts, setAllPosts] = useState<Ipost[]>([]);
  const [modal, setModal] = useState<boolean>(false);
  const [auth, setAuth] = useState(false);

  const getPosts = async () => {
    const response = await fetchPostsData();
    setAllPosts(response);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <PostsContext.Provider value={{ allPosts, modal, setModal, setAllPosts }}>
      <Select />
      {allPosts.length ? (
        <Posts />
      ) : (
        <h1 className="text-center text-5xl font-bold mt-20">
          Добавьте первый пост
        </h1>
      )}
      <AddNewPostBtn />
      {modal && <Modal />}
    </PostsContext.Provider>
  );
};
