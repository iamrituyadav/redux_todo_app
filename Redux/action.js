export const ADD_TODO = "ADD_TODO";

export const add_todo = (data) => {
  return {
    type: ADD_TODO,
    payload: data,
  };
};
