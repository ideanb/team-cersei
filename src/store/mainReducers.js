import { combineReducers } from 'redux';
import skills from './skills/reducers';

const rootReducer = combineReducers({
  skills
});

export default rootReducer;