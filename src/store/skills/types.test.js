import * as types from './types';

it("should has correct values for types fetchs", () => {
  expect(types.FETCH_SKILLS).to.equal('FECTH_SKILLS');
  expect(types.FETCH_SKILLS_SUCCESS).to.equal('FETCH_SKILLS_SUCCESS');
  expect(types.FETCH_SKILLS_FAIL).to.equal('FETCH_SKILLS_FAIL');
});

it("should has correct values for types add", () => {
  expect(types.ADD_SKILL).to.equal('ADD_SKILL');
  expect(types.ADD_SKILL_SUCCESS).to.equal('ADD_SKILL_SUCCESS');
  expect(types.ADD_SKILL_FAIL).to.equal('ADD_SKILL_FAIL');
});

it("should has correct values for types remove", () => {
  expect(types.DELETE_SKILL).to.equal('DELETE_SKILL');
  expect(types.DELETE_SKILL_SUCCESS).to.equal('DELETE_SKILL_SUCCESS');
  expect(types.DELETE_SKILL_FAIL).to.equal('DELETE_SKILL_FAIL');
});