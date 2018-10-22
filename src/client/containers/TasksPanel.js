import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TasksPanel from '../components/TasksPanel';
import * as actionCreators from '../actions/tasks';


const mapStateToProps = (state, ownProps) => ({
  searchText: state.tasks.searchText,
  activeCategoryId: ownProps.match.params.id || null,
});

export default withRouter(connect(mapStateToProps, actionCreators)(TasksPanel));
