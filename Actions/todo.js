import { ADD_TODO, GET_TODOS } from './actionTypes';

export const addtodo = newTodo => {
  return {
    type: ADD_TODO,
    payload: newTodo
  }
}

export const getTodos = () => {
  return {
    type: GET_TODOS
  };
}
