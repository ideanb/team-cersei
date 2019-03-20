import * as types from './types';
import * as api from '../../api/skills';

export const fetchSkills= () => {
  return async dispatch => {
    try {
      const skillReponse = await api.fetch();
      dispatch({ type: types.FETCH_SKILLS_SUCCESS, data: skillReponse.data });
    } catch (error) {
      dispatch({ type: types.FETCH_SKILLS_FAIL });
    }
  };
};

export const addSkill= (data) => {
  return async dispatch => {
    try {
      await api.add(data);
      dispatch({ type: types.ADD_SKILL_SUCCESS, data });
    } catch (error) {
      dispatch({ type: types.ADD_SKILL_FAIL });
    }
  };
};