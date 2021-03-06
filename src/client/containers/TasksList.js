import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TasksList from '../components/TasksList';
import * as actionCreators from '../actions/tasks';


const mapStateToProps = (state, ownProps) => {
  const activeCategoryId = ownProps.match.params.id || null;
  const tasks = Object.values(state.tasks.list)
    .filter(el => el.categoryId === activeCategoryId);

  return {
    tasks,
    activeCategoryId,
    categories: Object.values(state.categories.list),
    canShowDone: state.tasks.canShowDone,
    searchText: state.tasks.searchText,
  };
};

export default withRouter(connect(mapStateToProps, actionCreators)(TasksList));
