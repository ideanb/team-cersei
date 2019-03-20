import { connect } from 'react-redux';
import App from './App';
import * as skillActions from '../../store/skills/actions';

function mapStateToProps() {
  return {};
}

export default connect(
  mapStateToProps,
  {
    addSkill: skillActions.addSkill
  }
)(App);
