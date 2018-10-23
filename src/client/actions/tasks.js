import { createAction } from 'redux-actions';
import { sleep } from '../lib/utils';


export const setTaskStatus = createAction('TASK_UPDATE_STATUS');
export const updateTask = createAction('TASK_UPDATE');
export const updateShowDone = createAction('TASKS_UPDATE_SHOW_DONE');
export const updateSearchText = createAction('TASKS_UPDATE_SEARCH_TEXT');

export const addTaskRequest = createAction('TASK_ADD_REQUEST');
export const addTaskSuccess = createAction('TASK_ADD_SUCCESS');
export const addTaskFailure = createAction('TASK_ADD_FAILURE');
export const addTask = task => async (dispatch) => {
  dispatch(addTaskRequest());
  try {
    const fakeApiCall = () => sleep(3000);
    await fakeApiCall();
    dispatch(addTaskSuccess(task));
  } catch (e) {
    dispatch(addTaskFailure());
  }
};
