import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import ss from './TasksPanel.local.scss';


export default class TasksPanel extends React.Component {
  state = { newTaskText: '' }

  changeNewTaskText = (e) => {
    const newTaskText = e.target.value;
    this.setState(() => ({ newTaskText }));
  }

  addNewTask = (e) => {
    if (e.type === 'keydown' && e.key !== 'Enter') return;

    const { newTaskText } = this.state;
    const { activeCategoryId } = this.props;

    this.setState(() => ({ newTaskText: '' }));
    this.props.addTask({
      text: newTaskText,
      categoryId: activeCategoryId,
      isDone: false,
    });
  }

  updateShowDone = (e) => {
    const canShowDone = e.target.checked;
    this.props.updateShowDone(canShowDone);
  }

  updateSearchText = (e) => {
    const searchText = e.target.value;
    this.props.updateSearchText(searchText);
  }

  render() {
    const { searchText, activeCategoryId } = this.props;
    const canAddTask = Boolean(activeCategoryId);
    return (
      <div className={ss.panel}>
        <label className={cn(ss.item, ss.item_noStretch, 'ilabel', 'mb-0')}>
          <input type="checkbox" onChange={this.updateShowDone}/>
          <span className="ml-10">Show done</span>
        </label>
        <div className={ss.item}>
          <input type="text" className="form-control" placeholder="Search"
            onChange={this.updateSearchText} value={searchText}/>
        </div>
        <div className={ss.item}>
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Text input with button"
              onChange={this.changeNewTaskText} value={this.state.newTaskText}
              onKeyDown={this.addNewTask} disabled={!canAddTask}/>
            <div className="input-group-append">
              <button className="btn btn-light" onClick={this.addNewTask} disabled={!canAddTask}>
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


TasksPanel.propTypes = {
  addTask: PropTypes.func.isRequired,
  updateShowDone: PropTypes.func.isRequired,
  updateSearchText: PropTypes.func.isRequired,
  activeCategoryId: PropTypes.string.isRequired,
  searchText: PropTypes.string.isRequired,
};
