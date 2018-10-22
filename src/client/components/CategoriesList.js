import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import routes from '../routes';
import ss from './CategoriesList.local.scss';


const nestedListPadding = 15;
const defaultLeftPadding = 5;

export default class CategoriesList extends React.Component {
  inputRef = React.createRef()

  state = {
    newCategoryName: '',
    categoryInEditModeId: '',
  }

  removeCategory = id => () => this.props.removeCategory(id)

  editCategoryName = (id, name) => () => {
    this.setState({
      newCategoryName: name,
      categoryInEditModeId: id,
    }, () => this.inputRef.current.focus());
  }

  updateCategoryName = id => (e) => {
    if (e.type === 'keydown' && e.key !== 'Enter') return;

    const { newCategoryName } = this.state;
    this.setState(() => ({ categoryInEditModeId: '' }));
    this.props.updateCategory({ newCategoryName, id });
  }

  updateCategoryTmpName = (e) => {
    const newCategoryName = e.target.value;
    this.setState(() => ({ newCategoryName }));
  }

  addChildCategory = id => () => {
    this.props.addChildCategory({ parentCategoryId: id });
  }

  toggleCategoryOpenState = id => () => this.props.toggleCategoryOpenState(id)

  getInputRef = categoryId => (categoryId === this.state.categoryInEditModeId
    ? this.inputRef
    : null)

  renderCategory = (el) => {
    const { location } = this.props;
    const { newCategoryName, categoryInEditModeId } = this.state;
    const itemStyle = { paddingLeft: `${(el.nestedLvl * nestedListPadding) + defaultLeftPadding}px` };
    const categoryUrl = routes.categoryUrl(el.id);
    const isCategoryActive = location.pathname === categoryUrl;

    const inputClass = cn(ss.input, {
      'd-none': el.id !== categoryInEditModeId,
    });
    const textClass = cn(ss.text, {
      'd-none': el.id === categoryInEditModeId,
      [ss.text_active]: isCategoryActive,
    });
    const expandIconClass = cn(ss.expandIcon, 'fa', {
      'd-none': !el.hasChildren,
      'fa-chevron-right': !el.isOpened,
      'fa-chevron-down': el.isOpened,
    });
    const categoryListClass = cn(ss.list, {
      'd-none': !el.isOpened,
    });

    return (
      <li key={el.id}>

        <div className={ss.itemInner} style={itemStyle}>
          <div className="d-flex align-items-center">
            <div className={ss.expandIconWrap}>
              <i className={expandIconClass}
                onClick={this.toggleCategoryOpenState(el.id)}></i>
            </div>
            <input
              className={inputClass}
              placeholder="Edit me pls"
              value={newCategoryName}
              ref={this.getInputRef(el.id)}
              onChange={this.updateCategoryTmpName}
              onKeyDown={this.updateCategoryName(el.id)}
            />
            <Link to={isCategoryActive ? routes.homePath : categoryUrl} className={textClass}>
              {el.name}
            </Link>
          </div>
          <div className={ss.controls}>
            {el.id === categoryInEditModeId ?
              <i className={cn(ss.control, 'fa', 'fa-save')}
                onClick={this.updateCategoryName(el.id)}></i>
            :
              <i className={cn(ss.control, 'fa', 'fa-edit')}
                onClick={this.editCategoryName(el.id, el.name)}></i>
            }
            <i className={cn(ss.control, 'fa', 'fa-trash-alt')}
              onClick={this.removeCategory(el.id)}></i>
            <i className={cn(ss.control, 'fa', 'fa-plus')}
              onClick={this.addChildCategory(el.id)}></i>
          </div>
        </div>

        <ul className={categoryListClass}>
          {el.childCategories.map(this.renderCategory)}
        </ul>

      </li>
    );
  }

  render() {
    return (
      <ul className={cn(ss.list, ss.list_root)}>
        {this.props.categories.map(this.renderCategory)}
      </ul>
    );
  }
}


CategoriesList.propTypes = {
  removeCategory: PropTypes.func.isRequired,
  updateCategory: PropTypes.func.isRequired,
  addChildCategory: PropTypes.func.isRequired,
  toggleCategoryOpenState: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.any,
    parentCategoryId: PropTypes.any,
    childCategories: PropTypes.any,
    hasChildren: PropTypes.any,
    isOpened: PropTypes.any,
    name: PropTypes.any,
    nestedLvl: PropTypes.any,
  })).isRequired,
};
