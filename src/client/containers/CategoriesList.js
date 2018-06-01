import { connect } from 'react-redux';
import CategoriesList from '../components/CategoriesList';
import * as actionCreators from '../actions';


const mapStateToProps = state => ({
  categories: state.categories,
});

export default connect(mapStateToProps, actionCreators)(CategoriesList);
