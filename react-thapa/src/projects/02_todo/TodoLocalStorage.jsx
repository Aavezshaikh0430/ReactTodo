  const todoKey = 'ReactTodo';


export const setTodoLocalStorageData = () => {
  const rawTodo = localStorage.getItem(todoKey);
  if (!rawTodo) return [];
  return JSON.parse(rawTodo);
};

export const getTodoLocalStorageData = (inputValue) => {
 return localStorage.setItem(todoKey, JSON.stringify(inputValue));
};
