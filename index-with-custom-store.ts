import { ADD_TODO_ACTION, initialState, reducer } from ".";

interface Action {
  type: string;
  payload?: any;
}

export interface Reducer<T> {
  (state: T, action: Action): T
}

class Store<T> {
  constructor(
    private _reducer: Reducer<T>,
    private _state: T
  ) {}

  getState(): T {
    return this._state;
  }

  dispatch(action: Action): void {
    this._state = this._reducer(this._state, action);
  }
}

const store = new Store(reducer, initialState);
store.dispatch(ADD_TODO_ACTION);
console.log(store.getState());
store.dispatch(ADD_TODO_ACTION);
console.log(store.getState());
store.dispatch(ADD_TODO_ACTION);
console.log(store.getState());

store.dispatch(ADD_TODO_ACTION);
store.dispatch(ADD_TODO_ACTION);
store.dispatch(ADD_TODO_ACTION);
store.dispatch(ADD_TODO_ACTION);
store.dispatch(ADD_TODO_ACTION);
store.dispatch(ADD_TODO_ACTION);
store.dispatch(ADD_TODO_ACTION);
store.dispatch(ADD_TODO_ACTION);
store.dispatch(ADD_TODO_ACTION);
store.dispatch(ADD_TODO_ACTION);
console.log(store.getState());