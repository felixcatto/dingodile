import { connect } from 'react-redux';
import TasksList from '../components/TasksList';
import * as actionCreators from '../actions';


const mapStateToProps = (state) => {
  const activeCategory = Object.values(state.categories.list)
    .find(el => el.isActive);
  const activeCategoryId = activeCategory ? activeCategory.id : '';
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

export default connect(mapStateToProps, actionCreators)(TasksList);
