import React from 'react';


export default class extends React.Component {
  render() {
    return (
      <div className="category-list">
        <div className="category-item">
          <div>
            <div className="category-item__text">Category 1</div>
          </div>
          <div className="category-item__controls">
            <i className="category-item__control fa fa-edit"></i>
            <i className="category-item__control fa fa-trash-alt"></i>
            <i className="category-item__control fa fa-plus"></i>
          </div>
        </div>
        <div className="category-item">
          <div>
            <div className="category-item__text">Category 2</div>
          </div>
          <div className="category-item__controls">
            <i className="category-item__control fa fa-edit"></i>
            <i className="category-item__control fa fa-trash-alt"></i>
            <i className="category-item__control fa fa-plus"></i>
          </div>
        </div>
        <div className="category-item">
          <div>
            <div className="category-item__text">Category 3</div>
          </div>
          <div className="category-item__controls">
            <i className="category-item__control fa fa-edit"></i>
            <i className="category-item__control fa fa-trash-alt"></i>
            <i className="category-item__control fa fa-plus"></i>
          </div>
        </div>
      </div>
    );
  }
}
