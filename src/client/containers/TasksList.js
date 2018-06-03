import { connect } from 'react-redux';
import TasksList from '../components/TasksList';
import * as actionCreators from '../actions';


const mapStateToProps = state => ({
  tasks: Object.values(state.tasks),
});

export default connect(mapStateToProps, actionCreators)(TasksList);
