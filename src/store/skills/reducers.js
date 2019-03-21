import { combineReducers } from 'redux';
import * as types from './types';

const data = (state = [], action = {}) => {
  switch (action.type) {
    case types.FETCH_SKILLS_SUCCESS: {
      return [...action.data];
    }
    case types.ADD_SKILL_SUCCESS: {
      return [...state, action.data];
    }
    case types.DELETE_SKILL_SUCCESS: {
      const { skillId } = action;
      const newState = state.filter(skill => skill.id !== skillId);
      return [...newState];
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
