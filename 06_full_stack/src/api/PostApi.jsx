import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

//get method.
export const getUser = () => {
  return api.get("/posts");
};

//delete method.

export const deleteUser = (id) => {
  return api.delete(`/posts/${id}`)
}

//post method.

export const postUser = (post) => {
  return api.post('/posts',post)
}

//update method  put method

export const updatePost = (id, post) => {
  return api.put(`/posts/${id}`, post)
}