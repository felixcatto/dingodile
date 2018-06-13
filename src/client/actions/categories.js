import { createAction } from 'redux-actions';

export const addCategory = createAction('CATEGORY_ADD');
export const removeCategory = createAction('CATEGORY_REMOVE');
export const updateCategory = createAction('CATEGORY_UPDATE');
export const addChildCategory = createAction('CATEGORY_ADD_CHILD');
export const toggleCategoryOpenState = createAction('CATEGORY_TOGGLE_OPEN_STATE');
