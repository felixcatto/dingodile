import React from 'react';


export default class extends React.Component {
  render() {
    const { tasks } = this.props;
    return (
      <div className="tasks-list">
        {tasks.map(el => (
          <div className="task-item" key={el.id}>
            <label className="mb-0 px-5">
              <input type="checkbox" className="d-block" />
            </label>
            <div className="task-item__text">{el.text}</div>
            <i className="task-item__edit-icon fa fa-edit"></i>
          </div>
        ))}
      </div>
    );
  }
}
