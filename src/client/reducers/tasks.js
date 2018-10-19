import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { uniqueId } from 'lodash';
import * as actions from '../actions/tasks';


const initialState = {
  102: {
    id: '102',
    categoryId: '100',
    text: 'To-Do Item #1',
    isDone: false,
  },
  103: {
    id: '103',
    categoryId: '100',
    text: 'To-Do Item #2',
    isDone: true,
  },
  104: {
    id: '104',
    categoryId: '100',
    text: 'To-Do Item #3',
    isDone: false,
  },
};

const list = handleActions({
  [actions.addTask]: (state, { payload: task }) => {
    const id = uniqueId();
    return {
      ...state,
      [id]: { id, ...task },
    };
  },

  [actions.setTaskStatus]: (state, { payload }) => {
    const { id, isDone } = payload;
    return {
      ...state,
      [id]: { ...state[id], isDone },
    };
  },

  [actions.updateTask]: (state, { payload: task }) => ({
    ...state,
    [task.id]: task,
  }),
}, initialState);

const searchText = handleActions({
  [actions.updateSearchText]: (state, { payload: newSearchText }) => newSearchText,
}, '');

const canShowDone = handleActions({
  [actions.updateShowDone]: (state, { payload: canShowDoneValue }) => canShowDoneValue,
}, false);

export const tasks = combineReducers({
  list,
  searchText,
  canShowDone,
});
