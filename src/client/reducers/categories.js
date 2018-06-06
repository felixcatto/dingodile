import React from 'react';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { uniqueId, omit } from 'lodash';
import update from 'immutability-helper';
import * as actions from '../actions';
import initialState from '../lib/initialState';


const list = handleActions({
  '@@INIT': state => Object.keys(state).reduce((acc, key) => update(acc, {
      [key]: { $merge: { inputRef: React.createRef() } },
    }), state),
  [actions.addCategory]: (state, { payload }) => {
    const id = uniqueId();
    return {
      ...state,
      [id]: { id, ...payload },
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
}, initialState.categories);

export const categories = combineReducers({
  list,
});
