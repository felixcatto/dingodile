import { createAction } from 'redux-actions';

export const addCategory = createAction('CATEGORY_ADD');
export const removeCategory = createAction('CATEGORY_REMOVE');
export const updateCategory = createAction('CATEGORY_UPDATE');

export const addTask = createAction('TASK_ADD');
export const setTaskStatus = createAction('TASK_UPDATE_STATUS');
export const updateShowDone = createAction('TASKS_UPDATE_SHOW_DONE');
export const updateSearchText = createAction('TASKS_UPDATE_SEARCH_TEXT');
