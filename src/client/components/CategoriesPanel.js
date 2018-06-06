import React from 'react';


export default class CategoriesPanel extends React.Component {
  state = {
    newCategoryText: '',
  }

  onTextChange = (e) => {
    const newCategoryText = e.target.value;
    this.setState(() => ({ newCategoryText }));
  }

  onCategoryAdd = (e) => {
    if (e.type === 'keydown' && e.key !== 'Enter') return;

    this.props.addCategory({
      name: this.state.newCategoryText,
      parentCategoryId: null,
      inputRef: React.createRef(),
    });
    this.setState(() => ({ newCategoryText: '' }));
  }

  render() {
    const { newCategoryText } = this.state;
    return (
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Enter category title"
          onChange={this.onTextChange} onKeyDown={this.onCategoryAdd}
          value={newCategoryText}/>
        <div className="input-group-append">
          <button className="btn btn-light" onClick={this.onCategoryAdd}>Add</button>
        </div>
      </div>
    );
  }
}
