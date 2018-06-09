import React from 'react';
import cn from 'classnames';


const getMatchedItems = (tasks, value) => {
  if (!value) return tasks;
  const regex = new RegExp(value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'), 'i');
  return tasks
    .filter(el => el.text.match(regex))
    .map((el) => {
      const { text } = el;
      const [match] = text.match(regex);
      const { index } = text.match(regex);
      const before = text.slice(0, index);
      const after = text.slice(match.length + index);
      return {
        ...el,
        before,
        match,
        after,
      };
    });
};

export default class TasksList extends React.Component {
  toogleTaskStatus = id => (e) => {
    const isDone = e.target.checked;
    this.props.setTaskStatus({ id, isDone });
  }

  render() {
    const { canShowDone, searchText, activeCategoryId } = this.props;
    const taskStateClass = isDone => cn('task-item__text-wrap', {
      'task-item__text-wrap_done': isDone,
    });
    let { tasks } = this.props;
    if (canShowDone) {
      tasks = tasks.filter(el => el.isDone);
    }
    if (searchText) {
      tasks = getMatchedItems(tasks, searchText);
    }

    return (
      <React.Fragment>

        {tasks.length !== 0 &&
          <div className="tasks-list">
            {tasks.map(el => (
              <div className="task-item" key={el.id}>
                <label className="mb-0 px-5">
                  <input type="checkbox" className="d-block" checked={el.isDone}
                    onChange={this.toogleTaskStatus(el.id)}/>
                </label>
                <div className={taskStateClass(el.isDone)}>
                  {el.match ?
                    <React.Fragment>
                      <span>{el.before}</span
                      ><span className="task-item__matched-text">{el.match}</span
                      ><span>{el.after}</span>
                    </React.Fragment>
                  :
                    el.text
                  }
                </div>
                <i className="task-item__edit-icon fa fa-edit"></i>
              </div>
            ))}
          </div>
        }

        {!activeCategoryId &&
          <div className="tasks-list">
            <div className="task-item">
              <div className="task-item__text-wrap">Please Select a Category</div>
            </div>
          </div>
        }

      </React.Fragment>
    );
  }
}
