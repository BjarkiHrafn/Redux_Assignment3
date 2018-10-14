import { ADD_TODO } from './actionTypes';

export const addtodo = newTodo => {
  return {
    type: ADD_PLACE,
    payload: newTodo
  }
}
