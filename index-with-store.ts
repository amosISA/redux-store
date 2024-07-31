import { configureStore, removeListener } from "@reduxjs/toolkit";
import { ADD_TODO_ACTION, reducer } from ".";

const store = configureStore({ reducer });

store.subscribe(() => console.log(store.getState()));

store.dispatch(ADD_TODO_ACTION);
store.dispatch(ADD_TODO_ACTION);
store.dispatch(ADD_TODO_ACTION);
store.dispatch(ADD_TODO_ACTION);
store.dispatch(ADD_TODO_ACTION);
store.dispatch(ADD_TODO_ACTION);