// import { createStoreHook } from "react-redux";
import { legacy_createStore as createStore } from "redux";

import { TodoReducer } from "./reducer";

export const store = createStore(TodoReducer);

// store.subscribe(() => {
//   console.log("Subscribe", store.getState());
// });
