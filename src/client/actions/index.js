import { createAction } from 'redux-actions';

export const addCategory = createAction('CATEGORY_ADD');
export const removeCategory = createAction('CATEGORY_REMOVE');
export const updateCategory = createAction('CATEGORY_UPDATE');

export const addTask = createAction('TASK_ADD');
