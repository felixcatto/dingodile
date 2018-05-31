import React from 'react';


export default class extends React.Component {
  render() {
    return (
      <div className="tasks-panel">
        <label className="tasks-panel__item tasks-panel__item_no-stretch mb-0">
          <input type="checkbox"/>
          <span className="ml-10">Show done</span>
        </label>
        <div className="tasks-panel__item">
          <input type="text" className="form-control" placeholder="Search"/>
        </div>
        <div className="tasks-panel__item">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Text input with button"/>
            <div className="input-group-append">
              <button className="btn btn-light">Add</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
