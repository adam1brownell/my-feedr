import {combineReducers} from 'redux';
import ScrollReducer from './scrollEvents';
import TimeReducer from './timeEvents';
import AccountReducer from './accountEvents';

export default combineReducers({
  scroll: ScrollReducer,
  time: TimeReducer,
  account: AccountReducer
})
