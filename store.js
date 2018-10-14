import { createStore } from 'redux';
import TodoReducer from './Reducers/todoReducer';

export default (store = createStore(TodoReducer));
