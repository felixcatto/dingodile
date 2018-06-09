import React from 'react';
import cn from 'classnames';


const nestedListPadding = 15
const defaultLeftPadding = 5;

export default class CategoriesList extends React.Component {
  state = {
    newCategoryName: '',
    categoryInEditModeId: '',
  }

  removeCategory = id => () => this.props.removeCategory(id)

  editCategoryName = (id, name, inputRef) => () => {
    this.setState(() => ({
      newCategoryName: name,
      categoryInEditModeId: id,
    }));
    setTimeout(() => inputRef.current.focus(), 50);
  }

  updateCategoryName = id => (e) => {
    if (e.type === 'keydown' && e.key !== 'Enter') return;

    const { newCategoryName } = this.state;
    this.setState(() => ({ categoryInEditModeId: ''}));
    this.props.updateCategory({ newCategoryName, id });
  }

  updateCategoryTmpName = (e) => {
    const newCategoryName = e.target.value;
    this.setState(() => ({ newCategoryName }));
  }

  addChildCategory = id => () => {
    this.props.addChildCategory({
      parentCategoryId: id,
      inputRef: React.createRef(),
    });
  }

  toggleCategoryOpenState = id => () => this.props.toggleCategoryOpenState(id)

  toggleCategoryActiveState = id => () => this.props.toggleCategoryActiveState(id)

  renderCategory = (el) => {
    const { newCategoryName, categoryInEditModeId } = this.state;
    const itemStyle = { paddingLeft: `${(el.nestedLvl * nestedListPadding) + defaultLeftPadding}px` };

    const inputClass = cn('category-item__input', {
      'd-none': el.id !== categoryInEditModeId,
    });
    const textClass = cn('category-item__text', {
      'd-none': el.id === categoryInEditModeId,
    });
    const expandIconClass = cn('category-item__expand-icon fa', {
      'd-none': !el.hasChildren,
      'fa-chevron-right': !el.isOpened,
      'fa-chevron-down': el.isOpened,
    });
    const categoryListClass = cn('category-list', {
      'd-none': !el.isOpened,
    });
    const itemInnerClass = cn('category-item__inner', {
      'category-item__inner_active': el.isActive,
    });

    return (
      <li className="category-item" key={el.id}>

        <div className={itemInnerClass} style={itemStyle}>
          <div className="d-flex align-items-center">
            <div className="category-item__expand-icon-wrap">
              <i className={expandIconClass}
                onClick={this.toggleCategoryOpenState(el.id)}></i>
            </div>
            <input className={inputClass} placeholder="Edit me pls"
              value={newCategoryName} ref={el.inputRef}
              onChange={this.updateCategoryTmpName}
              onKeyDown={this.updateCategoryName(el.id)}/>
            <div className={textClass}
              onClick={this.toggleCategoryActiveState(el.id)}
            >
              {el.name}
            </div>
          </div>
          <div className="category-item__controls">
            {el.id === categoryInEditModeId ?
              <i className="category-item__control fa fa-save"
                onClick={this.updateCategoryName(el.id)}></i>
            :
              <i className="category-item__control fa fa-edit"
                onClick={this.editCategoryName(el.id, el.name, el.inputRef)}></i>
            }
            <i className="category-item__control fa fa-trash-alt"
              onClick={this.removeCategory(el.id)}></i>
            <i className="category-item__control fa fa-plus"
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
      <ul className="category-list category-list_root">
        {this.props.categories.map(this.renderCategory)}
      </ul>
    );
  }
}
