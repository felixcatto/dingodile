import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions';


const tasks = handleActions({
  [actions.makeSomething]: (state, payload) => {
    return state;
  },
}, {});

export default combineReducers({
  tasks,
});