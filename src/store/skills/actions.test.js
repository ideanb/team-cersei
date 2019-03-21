import configureMockStore from 'redux-mock-store';
import sinon from 'sinon';
import thunk from 'redux-thunk';
import * as skillActions from './actions';
import * as api from '../../api/skills';

const mockStore = configureMockStore([thunk]);
const store = mockStore();

let fetchStub;
let addStub;
let removeStub;
const skills = [{ id: 1, name: 'fake', experience: '1 Year' }];

beforeEach(() => {
  fetchStub = sinon.stub(api, 'fetch');
  fetchStub.returns(new Promise(res => res({ data: skills })));
  addStub = sinon.stub(api, "add");
  removeStub = sinon.stub(api, 'remove');
});

afterEach(() => {
  fetchStub.restore();
  addStub.restore();
  removeStub.restore();
});

it('should fetch skills', async () => {
  await store.dispatch(skillActions.fetchSkills());
  const actions = store.getActions();
  expect(actions[0]).eql({ type: 'FETCH_SKILLS_SUCCESS', data: skills });
});

it('should add skills', async () => {
  const expectedData = { id: 3, name: 'other fake', experience: '7+ Years' };
  await store.dispatch(
    skillActions.addSkill(expectedData)
  );
  const actions = store.getActions();
  expect(actions[1]).eql({ type: 'ADD_SKILL_SUCCESS', data: expectedData });
});

it('should remove skills', async () => {
  const expectedSkillId = 2;
  await store.dispatch(
    skillActions.removeSkill(expectedSkillId)
  );
  const actions = store.getActions();
  expect(actions[2]).eql({ type: 'DELETE_SKILL_SUCCESS', skillId: expectedSkillId });
});
