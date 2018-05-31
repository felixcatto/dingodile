import React from 'react';


export default class extends React.Component {
  render() {
    return (
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Enter category title"/>
        <div className="input-group-append">
          <button className="btn btn-light">Add</button>
        </div>
      </div>
    );
  }
}
