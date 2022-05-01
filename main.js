import { add_todo } from "./Redux/action";
import { store } from "./Redux/store";

console.log("js loading", store);
render(store.getState());

document.getElementById("todo_submit_btn").addEventListener("click", () => {
  const todoText = document.getElementById("todo_input").value;
  const todoData = {
    title: todoText,
    isDone: false,
  };
  console.log("add todo", todoData);
  store.dispatch(add_todo(todoData));
});

store.subscribe(() => {
  console.log("subscribe", store.getState());
  const todos = store.getState();
  render(todos);
});

function render(todos) {
  const todoWrapper = document.getElementById("todoWrapper");
  todoWrapper.innerText = "";
  const todoList = document.createElement("ul");
  todos.map((item) => {
    const todoElement = document.createElement("li");
    todoElement.innerText = item.title;
    const button = document.createElement("button");
    button.innerText = item.isDone;
    const childDiv = document.createElement("div");
    childDiv.id = "childDiv";
    childDiv.append(todoElement, button);
    todoList.append(childDiv);
  });
  todoWrapper.append(todoList);
}
