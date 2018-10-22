import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { uniqueId, omit } from 'lodash';
import * as actions from '../actions/categories';


const initialState = {
  100: {
    id: '100',
    name: 'Category 100',
    parentCategoryId: null,
    isOpened: false,
  },
  101: {
    id: '101',
    name: 'Category 101',
    parentCategoryId: null,
    isOpened: false,
  },
  102: {
    id: '102',
    name: 'Category 102',
    parentCategoryId: '101',
    isOpened: false,
  },
};

const list = handleActions({
  [actions.addCategory]: (state, { payload }) => {
    const id = uniqueId();
    return {
      ...state,
      [id]: {
        id,
        isOpened: false,
        ...payload,
      },
    };
  },

  [actions.removeCategory]: (state, { payload: id }) => omit(state, id),

  [actions.updateCategory]: (state, { payload }) => {
    const { id, newCategoryName } = payload;
    const category = state[id];
    return {
      ...state,
      [id]: { ...category, name: newCategoryName },
    };
  },

  [actions.toggleCategoryOpenState]: (state, { payload: id }) => {
    const category = state[id];
    return {
      ...state,
      [id]: { ...category, isOpened: !category.isOpened },
    };
  },

  [actions.addChildCategory]: (state, { payload }) => {
    const id = uniqueId();
    const { parentCategoryId } = payload;
    const parentCategory = state[parentCategoryId];

    return {
      ...state,
      [parentCategoryId]: {
        ...parentCategory,
        isOpened: true,
      },
      [id]: {
        id,
        name: `New Category #${id}`,
        isOpened: false,
        ...payload,
      },
    };
  },
}, initialState);

export const categories = combineReducers({
  list,
});
