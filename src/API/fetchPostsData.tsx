import axios from "axios";
import { Ipost } from "../interfaces/interfaces";

const urlParams = {
  limit: 6,
};

export const fetchPostsData = async () => {
  const response = await axios.get<Ipost[]>(
    `https://jsonplaceholder.typicode.com/posts?_limit=${urlParams.limit}`
  );
  return response.data;
};
