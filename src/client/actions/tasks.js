import { createAction } from 'redux-actions';

export const addTask = createAction('TASK_ADD');
export const setTaskStatus = createAction('TASK_UPDATE_STATUS');
export const updateTask = createAction('TASK_UPDATE');
export const updateShowDone = createAction('TASKS_UPDATE_SHOW_DONE');
export const updateSearchText = createAction('TASKS_UPDATE_SEARCH_TEXT');
