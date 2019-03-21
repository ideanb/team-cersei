import { connect } from 'react-redux';
import SkillItem from './SkillItem';
import * as skillActions from '../../../../store/skills/actions';

export function mapStateToProps() {
  return {};
}

export default connect(
  mapStateToProps,
  {
    removeSkill: skillActions.removeSkill
  }
)(SkillItem);
