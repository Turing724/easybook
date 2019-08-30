import { fromJS } from 'immutable';
import { actionTypes } from '../../Detail/store';

const defaultState = fromJS({
  isLogin: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_REQS:
      return state.set('isLogin', action.value);
    default:
      return state;
  }
};
