import { combineReducers } from 'redux';
import * as types from './types';

const data = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_SKILLS_SUCCESS: {
      return action.data;
    }
    case types.ADD_SKILL_SUCCESS: {
      return [...state.skills.data, action.data];
    }
    default: {
      return state;
    }
  }
};

export default combineReducers({
  data,
  meta: {}
});
