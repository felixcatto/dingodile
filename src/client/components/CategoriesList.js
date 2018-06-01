import React from 'react';
import cn from 'classnames';
import update from 'immutability-helper';


const updateCategories = categories => Object.keys(categories)
  .reduce((acc, id) => update(acc, {
    [id]: {
      $apply: category => ({
        ...category,
        newCategoryName: category.name,
        isInEditMode: false,
        inputRef: React.createRef(),
      }),
    },
  }), categories);

export default class CategoriesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { categories: updateCategories(this.props.categories) };
  }

  static getDerivedStateFromProps(props, state) {
    const propsCategoryNames = Object.values(props.categories).map(el => el.name).join();
    const stateCategoryNames = Object.values(state.categories).map(el => el.name).join();
    const isCategoriesNamesChanged = propsCategoryNames !== stateCategoryNames;
    if (isCategoriesNamesChanged) {
      return { categories: updateCategories(props.categories) };
    }
    return null;
  }

  removeCategory = id => () => this.props.removeCategory(id)

  editCategory = id => () => {
    const newState = update(this.state, {
      categories: {
        [id]: { $merge: { isInEditMode: true } },
      },
    });
    this.setState(() => newState);
    setTimeout(() => newState.categories[id].inputRef.current.focus(), 50);
  }

  saveCategory = id => (e) => {
    if (e.type === 'keydown' && e.key !== 'Enter') return;

    const { categories } = this.state;
    const newCategoryName = categories[id].newCategoryName;
    const newState = update(this.state, {
      categories: {
        [id]: { $merge: { isInEditMode: false } },
      },
    });
    this.setState(() => newState);
    this.props.updateCategory({ newCategoryName, id });
  }

  updateCategoryName = id => (e) => {
    const newCategoryName = e.target.value;
    const newState = update(this.state, {
      categories: {
        [id]: { $merge: { newCategoryName } },
      },
    });
    this.setState(() => newState);
  }

  getInputRef = id => this.state.categories[id].inputRef

  render() {
    const categories = Object.values(this.state.categories);
    const inputClass = isInEditMode => cn('category-item__input', {
      'd-none': !isInEditMode,
    });
    const textClass = isInEditMode => cn('category-item__text', {
      'd-none': isInEditMode,
    });

    return (
      <div className="category-list">
        {categories.map(el => (
          <div className="category-item" key={el.id}>
            <div>
              <input className={inputClass(el.isInEditMode)} placeholder="Edit me pls"
                ref={this.getInputRef(el.id)} value={el.newCategoryName}
                onChange={this.updateCategoryName(el.id)}
                onKeyDown={this.saveCategory(el.id)}/>
              <div className={textClass(el.isInEditMode)}>{el.name}</div>
            </div>
            <div className="category-item__controls">
              {el.isInEditMode ?
                <i className="category-item__control fa fa-save"
                  onClick={this.saveCategory(el.id)}></i>
              :
                <i className="category-item__control fa fa-edit"
                  onClick={this.editCategory(el.id)}></i>
              }
              <i className="category-item__control fa fa-trash-alt"
                onClick={this.removeCategory(el.id)}></i>
              <i className="category-item__control fa fa-plus"></i>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
