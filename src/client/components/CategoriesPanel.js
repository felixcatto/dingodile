import React from 'react';


export default class extends React.Component {
  state = {
    newCategoryText: '',
  }

  onTextChange = (e) => {
    const newCategoryText = e.target.value;
    this.setState(() => ({ newCategoryText }));
  }

  onCategoryAdd = () => {
    this.props.addCategory({
      name: this.state.newCategoryText,
      parentCategoryId: null,
    });
    this.setState(() => ({ newCategoryText: '' }));
  }

  render() {
    const { newCategoryText } = this.state;
    return (
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Enter category title"
          value={newCategoryText} onChange={this.onTextChange}/>
        <div className="input-group-append">
          <button className="btn btn-light" onClick={this.onCategoryAdd}>Add</button>
        </div>
      </div>
    );
  }
}
