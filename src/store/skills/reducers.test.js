import data from './reducers';
import * as types from './types';

const initialState = {
  data: []
};

it('should have initial state', () => {
  expect(data()).eql(initialState);
});

it('should return skills', () => {
  const action = { type: types.FETCH_SKILLS_SUCCESS, data: [1, 2, 3] };
  expect(data({}, action)).to.eql({ data: [1, 2, 3] });
});

it('should add skills', () => {
  const action = { type: types.ADD_SKILL_SUCCESS, data: { name: 'iduart'} };
  expect(data({}, action)).to.eql({ data: [ { name: 'iduart' } ] });
});

it('should remove skills', () => {
  const state = {
    data: [
      { id: 123},
      { id: 456},
    ]
  }
  const action = { type: types.DELETE_SKILL_SUCCESS, skillId: 123 };
  expect(data(state, action)).to.eql({ data: [ { id: 456 } ] });
});