import { ADD_TODO } from "./action";

const initialState = [
  {
    title: "Learn React",
    isDone: false,
  },
  {
    title: "Learn Redux",
    isDone: true,
  },
];

export const TodoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return [...state, payload];

    default:
      return state;
  }
};
