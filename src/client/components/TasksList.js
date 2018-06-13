import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Modal from './Modal';
import ss from './TasksList.scss.local';


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
  state = {
    editedTask: {},
  }

  toogleTaskStatus = id => (e) => {
    const isDone = e.target.checked;
    this.props.setTaskStatus({ id, isDone });
  }

  showModal = id => () => {
    const task = this.props.tasks.find(el => el.id === id);
    this.setState(() => ({ editedTask: task }));
  }

  closeModal = () => this.setState(() => ({ editedTask: {} }))

  onTaskSave = () => {
    this.props.updateTask(this.state.editedTask);
    this.setState(() => ({ editedTask: {} }));
  }

  updateEditedTaskIsDone = (e) => {
    const isDone = e.target.checked;
    const { editedTask } = this.state;
    this.setState(() => ({ editedTask: { ...editedTask, isDone } }));
  }

  updateEditedTaskText = (e) => {
    const text = e.target.value;
    const { editedTask } = this.state;
    this.setState(() => ({ editedTask: { ...editedTask, text } }));
  }

  updateEditedTaskCategoryId = (e) => {
    const categoryId = e.target.value;
    const { editedTask } = this.state;
    this.setState(() => ({ editedTask: { ...editedTask, categoryId } }));
  }

  render() {
    const { editedTask } = this.state;
    const {
      canShowDone,
      searchText,
      activeCategoryId,
      categories,
    } = this.props;

    const taskStateClass = isDone => cn(ss.textWrap, {
      [ss.textWrap_done]: isDone,
    });

    let { tasks } = this.props;
    if (canShowDone) {
      tasks = tasks.filter(el => el.isDone);
    }
    if (searchText) {
      tasks = getMatchedItems(tasks, searchText);
    }

    return (
      <div>

        {tasks.length !== 0 &&
          <div className={ss.list}>
            {tasks.map(el => (
              <div className={ss.item} key={el.id}>
                <label className="mb-0 px-5">
                  <input type="checkbox" className="d-block" checked={el.isDone}
                    onChange={this.toogleTaskStatus(el.id)}/>
                </label>
                <div className={taskStateClass(el.isDone)}>
                  {el.match ?
                    <React.Fragment>
                      <span>{el.before}</span
                      ><span className={ss.matchedText}>{el.match}</span
                      ><span>{el.after}</span>
                    </React.Fragment>
                  :
                    el.text
                  }
                </div>
                <i className={cn(ss.editIcon, 'fa', 'fa-edit')} onClick={this.showModal(el.id)}></i>
              </div>
            ))}
          </div>
        }

        {!activeCategoryId &&
          <div className={ss.list}>
            <div className={ss.item}>
              <div className={ss.textWrap}>Please Select a Category</div>
            </div>
          </div>
        }

        {editedTask.id &&
          <Modal isOpen={true} onClose={this.closeModal}>
            <input type="text" className="form-control mb-15" placeholder="Task text"
              value={editedTask.text} onChange={this.updateEditedTaskText}/>
            <label className="d-flex align-items-center mb-15">
              <input type="checkbox" className="mr-10" placeholder="Task text"
                checked={editedTask.isDone} onChange={this.updateEditedTaskIsDone}/>
              <span>is Done</span>
            </label>
            <select className="form-control mb-35" value={editedTask.categoryId}
              onChange={this.updateEditedTaskCategoryId}
            >
              {categories.map(el => (
                <option value={el.id} key={el.id}>{el.name}</option>
              ))}
            </select>
            <div className="d-flex justify-content-end">
              <button type="button" className="btn btn-primary" onClick={this.onTaskSave}>
                Save
              </button>
            </div>
          </Modal>
        }

      </div>
    );
  }
}


TasksList.propTypes = {
  setTaskStatus: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  canShowDone: PropTypes.bool.isRequired,
  searchText: PropTypes.string.isRequired,
  activeCategoryId: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.any,
    categoryId: PropTypes.any,
    isDone: PropTypes.any,
    text: PropTypes.any,
  })).isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.any,
    name: PropTypes.any,
  })).isRequired,
};
