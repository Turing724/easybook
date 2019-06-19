import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  focused: false,
  hotSearchList: [],
  page: 1,
  pageSize: 10
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.ON_FOCUS:
      return state.set('focused', true);
    case actionTypes.ON_BLUR:
      return state.set('focused', false);
    case actionTypes.CAHNGE_LIST:
      return state.set('hotSearchList', action.data);
    default:
      return state;
  }
};
