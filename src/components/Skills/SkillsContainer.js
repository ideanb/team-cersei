import { connect } from 'react-redux';
import Skills from './Skills';
import * as skillActions from '../../store/skills/actions';

function mapStateToProps(state) {
  return {
    skills: state.skills.data
  }
}

export default connect(
  mapStateToProps,
  {
    fetchSkills: skillActions.fetchSkills
  }
)(Skills);
