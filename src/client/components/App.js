import React from 'react';
import CategoriesPanel from './CategoriesPanel';
import CategoriesList from './CategoriesList';
import TasksPanel from './TasksPanel';
import TasksList from './TasksList';


export default class extends React.Component {
  render() {
    return (
      <div className="container pt-30">

        <div className="row row_gap-30 mb-30">
          <div className="col-4">
            <CategoriesPanel/>
          </div>
          <div className="col-8">
            <TasksPanel/>
          </div>
        </div>

        <div className="row row_gap-30">
          <div className="col-4">
            <CategoriesList/>
          </div>
          <div className="col-8">
            <TasksList/>
          </div>
        </div>

      </div>
    );
  }
}
