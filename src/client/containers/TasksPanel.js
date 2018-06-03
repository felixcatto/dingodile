import { connect } from 'react-redux';
import TasksPanel from '../components/TasksPanel';
import * as actionCreators from '../actions';


const mapStateToProps = state => ({});

export default connect(mapStateToProps, actionCreators)(TasksPanel);
