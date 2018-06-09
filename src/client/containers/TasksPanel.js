import { connect } from 'react-redux';
import TasksPanel from '../components/TasksPanel';
import * as actionCreators from '../actions';


const mapStateToProps = (state) => {
  const activeCategory = Object.values(state.categories.list)
    .find(el => el.isActive);
  const activeCategoryId = activeCategory ? activeCategory.id : '';
  return {
    searchText: state.tasks.searchText,
    activeCategoryId,
  };
};

export default connect(mapStateToProps, actionCreators)(TasksPanel);
