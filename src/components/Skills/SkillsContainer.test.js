import { mapStateToProps } from './SkillsContainer';

it('should return correct state from the component', () => {
  const data = [1, 2, 3];
  const props = mapStateToProps({ skills: { data } });
  expect(props).to.eql({ skills: data });
});
