import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import CategoriesPanel from '../containers/CategoriesPanel';
import CategoriesList from '../containers/CategoriesList';
import TasksPanel from '../containers/TasksPanel';
import TasksList from '../containers/TasksList';
import routes from '../routes';


export default function App() {
  return (
    <BrowserRouter>
      <div className="container pt-30">

        <div className="row mb-30">
          <div className="col-4">
            <CategoriesPanel/>
          </div>
          <div className="col-8">
            <Switch>
              <Route exact path={routes.homePath} component={TasksPanel}/>
              <Route path={routes.categoryPath} component={TasksPanel} />
            </Switch>
          </div>
        </div>

        <div className="row row_gap-30">
          <div className="col-4">
            <CategoriesList/>
          </div>
          <div className="col-8">
            <Switch>
              <Route exact path={routes.homePath} component={TasksList}/>
              <Route path={routes.categoryPath} component={TasksList} />
            </Switch>
          </div>
        </div>

      </div>
    </BrowserRouter>
  );
}
