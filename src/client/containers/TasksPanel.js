import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TasksPanel from '../components/TasksPanel';
import * as actionCreators from '../actions/tasks';
import routes from '../routes';


const mapStateToProps = (state, ownProps) => ({
  searchText: state.tasks.searchText,
  activeCategoryId: routes.getCategory(ownProps.location.pathname),
});

export default withRouter(connect(mapStateToProps, actionCreators)(TasksPanel));
