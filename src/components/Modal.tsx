import { useContext, useState } from "react";
import { Ipost } from "../interfaces/interfaces";
import { PostsContext } from "./Main";

export const Modal = () => {
  const { setModal, setAllPosts, allPosts } = useContext(PostsContext);
  const modalHandler = () => {
    setModal(false);
  };

  const [titleValue, setTitleValue] = useState("");
  const [bodyValue, setBodyValue] = useState("");
  const [newPost, setNewPost] = useState<Ipost>({
    id: 0,
    title: "",
    body: "",
  });

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    newPost.id = Date.now();
    newPost.title = titleValue;
    newPost.body = bodyValue;
    setAllPosts((prev: Ipost[]) => [...prev, newPost]);
    setNewPost({ id: 0, title: "", body: "" });
    setTitleValue("");
    setBodyValue("");
  };

  console.log(newPost);
  console.log(allPosts);

  return (
    <div
      onClick={modalHandler}
      className="fixed bg-black/50 bottom-0 top-0 left-0 right-0"
    >
      <form
        onSubmit={submitHandler}
        onClick={(e: React.MouseEvent<HTMLFormElement>) => e.stopPropagation()}
        action="submit"
        className="absolute w-[500px] p-5 rounded-2xl bg-white top-20 left-1/2 -translate-x-1/2 flex flex-col gap-2"
      >
        <h1>Для создания нового поста заполните все поля:</h1>
        <input
          value={titleValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTitleValue(e.target.value)
          }
          className="border py-1 px-2"
          type="text"
          placeholder="Название вашего поста..."
        />
        <textarea
          value={bodyValue}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setBodyValue(e.target.value)
          }
          className="border py-1 px-2"
          placeholder="Основной текст..."
        />
        <button className="py-2 px-4 bg-yellow-500 text-white rounded-lg hover:bg-green-400">
          Создать
        </button>
      </form>
    </div>
  );
};
