import React from 'react';


export default class extends React.Component {
  render() {
    return (
      <div className="container pt-30">

        <div className="row row_gap-30 mb-30">
          <div className="col-4">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Enter category title"/>
              <div className="input-group-append">
                <button className="btn btn-light">Add</button>
              </div>
            </div>
          </div>
          <div className="col-8">
            <div className="tasks__panel">
              <label className="tasks__panel-item tasks__panel-item_no-stretch mb-0">
                <input type="checkbox"/>
                <span className="ml-10">Show done</span>
              </label>
              <div className="tasks__panel-item">
                <input type="text" className="form-control" placeholder="Search"/>
              </div>
              <div className="tasks__panel-item">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Text input with button"/>
                  <div className="input-group-append">
                    <button className="btn btn-light">Add</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row row_gap-30">
          <div className="col-4">
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
          </div>
          <div className="col-8">
            <div className="tasks__list">
              <div className="task-item">
                <label className="mb-0 px-5">
                  <input type="checkbox" className="d-block" />
                </label>
                <div className="task-item__text">To-Do Item #1</div>
                <i className="task-item__edit-icon fa fa-edit"></i>
              </div>
              <div className="task-item">
                <label className="mb-0 px-5">
                  <input type="checkbox" className="d-block" />
                </label>
                <div className="task-item__text">To-Do Item #1</div>
                <i className="task-item__edit-icon fa fa-edit"></i>
              </div>
              <div className="task-item">
                <label className="mb-0 px-5">
                  <input type="checkbox" className="d-block" />
                </label>
                <div className="task-item__text">To-Do Item #1</div>
                <i className="task-item__edit-icon fa fa-edit"></i>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
