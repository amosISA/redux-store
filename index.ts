interface Action {
  type: string;
  payload?: any;
}

interface AppItem {
  text: string;
  id: number;
}

interface AppState {
  todos: AppItem[];
}

export const initialState: AppState = {
  todos: [{
    text: `Item: ${Date.now().toString()}`,
    id: 0
  }]
};

const ADD_TODO = 'ADD_TODO';

export function reducer(state = initialState, action: Action): AppState {
  if (action.type === ADD_TODO) {
    return {
      todos: [{
        id: state.todos[0].id + 1,
        text: action.payload
      }].concat(state.todos)
    };
  }
  return state;
}

export const ADD_TODO_ACTION: Action = { type: ADD_TODO, payload: `Item: ${Date.now().toString()}` };
const REMOVE_TODO_ACTION: Action = { type: ADD_TODO };
const UPDATE_TODO_ACTION: Action = { type: ADD_TODO };

console.log(reducer(initialState, ADD_TODO_ACTION));
console.log(reducer(initialState, ADD_TODO_ACTION));
console.log(reducer(initialState, ADD_TODO_ACTION));
console.log(reducer(initialState, ADD_TODO_ACTION));