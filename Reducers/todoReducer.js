import { ADD_TODO } from '../Actions/actionTypes';

const initialState = {
  todos: []
};

const todoReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO:
      console.log("payload: ", action.payload);
      return {
        ...state,
        todos: state.todos.concat(action.payload)
      };
    default:
      return state;
  }
}

export default todoReducer;
