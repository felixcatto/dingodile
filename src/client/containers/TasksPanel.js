import { connect } from 'react-redux';
import TasksPanel from '../components/TasksPanel';
import * as actionCreators from '../actions';


const mapStateToProps = state => ({
  canShowDone: state.canShowDone,
  searchText: state.searchText,
});

export default connect(mapStateToProps, actionCreators)(TasksPanel);
