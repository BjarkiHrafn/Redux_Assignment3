import { ADD_TODO, DELETE_TODO, UPDATE_DONE_TODO } from '../Actions/actionTypes';

const initialState = {
  todos: []
};

const todoReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: state.todos.concat(action.payload)
      };
      case DELETE_TODO:
        console.log("inside delete_todo, payload: ", action.payload);
        return {
          ...state,
          todos: state.todos.filter(item => {
            console.log(item.task, " !=== ", action.payload, ": ", item.task !== action.payload)
            item.task !== action.payload.task})
        }
        case UPDATE_DONE_TODO:
          return {
            ...state,
            todos: state.todos.map(todo => {
              if(todo.task === action.payload.task) {
                todo.done = !todo.done;
              }
            })
          }
    default:
      return state;
  }
}

export default todoReducer;
