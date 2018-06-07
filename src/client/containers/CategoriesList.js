import { connect } from 'react-redux';
import CategoriesList from '../components/CategoriesList';
import * as actionCreators from '../actions';


const getCategoriesTree = (categories) => {
  const addChildCategories = (currentCategory) => {
    const childCategories = categories
      .filter(category => category.parentCategoryId === currentCategory.id);
    if (childCategories.length === 0) {
      return { ...currentCategory, childCategories };
    }
    return {
      ...currentCategory,
      childCategories: childCategories.map(el => addChildCategories(el)),
    };
  };

  return categories
    .filter(category => !category.parentCategoryId)
    .map(el => addChildCategories(el));
};

const mapStateToProps = state => {
  const categoriesList = Object.values(state.categories.list);
  return {
    categories: getCategoriesTree(categoriesList),
  };
};

export default connect(mapStateToProps, actionCreators)(CategoriesList);
