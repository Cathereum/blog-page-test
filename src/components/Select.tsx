import { useContext, useState } from "react";
import { PostsContext } from "./Main";

export const Select = () => {
  const { allPosts, setAllPosts } = useContext(PostsContext);

  const [selectedSort, setSelectedSort] = useState<string>("");
  const sortPost = (selected: string) => {
    setSelectedSort(selected);
    setAllPosts(
      [...allPosts].sort((a: string | any, b: string | any) =>
        a[selected].localeCompare(b[selected])
      )
    );
  };

  return (
    <div className="container mx-auto my-2">
      <select
        className="border py-2 border-teal-500"
        value={selectedSort}
        onChange={(selected) => sortPost(selected.target.value)}
      >
        <option disabled value={"value1"}>
          Сортировка
        </option>
        <option value={"title"}>По названию</option>
        <option value={"body"}>По описанию</option>
      </select>
    </div>
  );
};
