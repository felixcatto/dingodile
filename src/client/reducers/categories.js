import { handleActions } from 'redux-actions';
import { uniqueId, omit } from 'lodash';
import * as actions from '../actions';
import initialState from '../lib/initialState';


export const categories = handleActions({
  [actions.addCategory]: (state, { payload }) => {
    const category = { id: uniqueId(), ...payload };
    return {
      ...state,
      [category.id]: category,
    };
  },
  [actions.removeCategory]: (state, { payload: id }) => omit(state, id),
  [actions.updateCategory]: (state, { payload }) => {
    const { id, newCategoryName } = payload;
    const category = state[id];
    return {
      ...state,
      [payload.id]: { ...category, name: newCategoryName },
    };
  },
}, initialState.categories);
