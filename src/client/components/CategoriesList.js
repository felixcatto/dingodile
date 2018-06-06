import React from 'react';
import cn from 'classnames';


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


  render() {
    const { categories } = this.props;
    const { newCategoryName, categoryInEditModeId } = this.state;
    const inputClass = id => cn('category-item__input', {
      'd-none': id !== categoryInEditModeId,
    });
    const textClass = id => cn('category-item__text', {
      'd-none': id === categoryInEditModeId,
    });

    return (
      <div className="category-list">
        {categories.map(el => (
          <div className="category-item" key={el.id}>
            <div>
              <input className={inputClass(el.id)} placeholder="Edit me pls"
                value={newCategoryName} ref={el.inputRef}
                onChange={this.updateCategoryTmpName}
                onKeyDown={this.updateCategoryName(el.id)}/>
              <div className={textClass(el.id)}>{el.name}</div>
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
              <i className="category-item__control fa fa-plus"></i>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
