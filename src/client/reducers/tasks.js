import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { uniqueId } from 'lodash';
import * as actions from '../actions';
import initialState from '../lib/initialState';


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
}, initialState.tasks);

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
