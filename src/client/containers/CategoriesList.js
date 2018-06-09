import { connect } from 'react-redux';
import CategoriesList from '../components/CategoriesList';
import * as actionCreators from '../actions';


const getCategoriesTree = (categories) => {
  const addChildCategories = (currentCategory, nestedLvl) => {
    const childCategories = categories
      .filter(category => category.parentCategoryId === currentCategory.id);
    if (childCategories.length === 0) {
      return {
        ...currentCategory,
        childCategories,
        nestedLvl,
        hasChildren: false,
      };
    }
    return {
      ...currentCategory,
      nestedLvl,
      childCategories: childCategories.map(el => addChildCategories(el, nestedLvl + 1)),
      hasChildren: true,
    };
  };

  return categories
    .filter(category => !category.parentCategoryId)
    .map(el => addChildCategories(el, 0));
};

const mapStateToProps = (state) => {
  const categoriesList = Object.values(state.categories.list);
  return {
    categories: getCategoriesTree(categoriesList),
  };
};

export default connect(mapStateToProps, actionCreators)(CategoriesList);
