import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  hotSearchList: [],
  page: 1,
  totalPage: 1
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.ON_FOCUS:
      return state.set('focused', true);
    case actionTypes.ON_BLUR:
      return state.set('focused', false);
    case actionTypes.CAHNGE_LIST:
      return state.merge({
        hotSearchList: action.data,
        totalPage: action.totalPage
      });
    case actionTypes.ON_MOUSE_ENTER:
      return state.set('mouseIn', true);
    case actionTypes.ON_MOUSE_LEAVE:
      return state.set('mouseIn', false);
    case actionTypes.CHANGE_PAGE:
      return state.set('page', action.page);
    default:
      return state;
  }
};
