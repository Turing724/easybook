import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  detailList: []
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_DETAIL_DATA:
      return state.set('detailList', action.detailList);
    default:
      return state;
  }
};
