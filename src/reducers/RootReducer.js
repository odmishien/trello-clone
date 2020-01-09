import { combineReducers } from 'redux';
import BoardReducer from './BoardReducer';

export const RootReducer = combineReducers({
  board: BoardReducer,
})

export default RootReducer;
