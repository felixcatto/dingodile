import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CategoriesPanel from '../containers/CategoriesPanel';
import CategoriesList from '../containers/CategoriesList';
import TasksPanel from '../containers/TasksPanel';
import TasksList from '../containers/TasksList';


export default function App() {
  return (
    <BrowserRouter>
      <div className="container pt-30">

        <div className="row mb-30">
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
    </BrowserRouter>
  );
}
