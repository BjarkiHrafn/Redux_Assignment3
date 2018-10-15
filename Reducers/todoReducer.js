import {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_DONE_TODO
} from "../Actions/actionTypes";

const initialState = {
  todos: []
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      console.log("added: ", action.payload);
      return {
        ...state,
        todos: state.todos.concat(action.payload)
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(item => item.task !== action.payload.task)
      };
    case UPDATE_DONE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.task === action.payload.task) {
            todo.done = !todo.done;
          }
          return todo;
        })
      };
    default:
      return state;
  }
};

export default todoReducer;
