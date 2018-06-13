import { connect } from 'react-redux';
import CategoriesPanel from '../components/CategoriesPanel';
import * as actionCreators from '../actions/categories';


const mapStateToProps = () => ({});

export default connect(mapStateToProps, actionCreators)(CategoriesPanel);
