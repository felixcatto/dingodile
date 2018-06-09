import React from 'react';


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
      <div className="tasks-panel">
        <label className="tasks-panel__item tasks-panel__item_no-stretch ilabel mb-0">
          <input type="checkbox" onChange={this.updateShowDone}/>
          <span className="ml-10">Show done</span>
        </label>
        <div className="tasks-panel__item">
          <input type="text" className="form-control" placeholder="Search"
            onChange={this.updateSearchText} value={searchText}/>
        </div>
        <div className="tasks-panel__item">
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
