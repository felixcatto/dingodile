import React from 'react';


export default class extends React.Component {
  render() {
    return (
      <div className="tasks-list">
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
    );
  }
}
