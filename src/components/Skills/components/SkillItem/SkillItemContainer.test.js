import { mapStateToProps } from './SkillItemContainer';

it('should return correct state from the component', () => {
  const props = mapStateToProps({});
  expect(props).to.eql({});
});
