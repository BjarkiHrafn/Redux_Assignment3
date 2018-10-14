import { createStore, combineReducers } from 'redux';
import todoReducer from './Reducers/todoReducer';

const mainReducer = combineReducers({
  todos: todoReducer
});

const configureStore = () => {
  return createStore(mainReducer);
}

export default configureStore;
