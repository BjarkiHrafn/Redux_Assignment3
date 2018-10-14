import { ADD_TODO } from './actionTypes';

export const addtodo = newTodo => {
  return {
    type: ADD_TODO,
    payload: newTodo
  }
}
