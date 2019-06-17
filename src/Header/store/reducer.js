import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  focused: false
});

export default (state = defaultState, action) => {
  if (action.type === actionTypes.ON_FOCUS) {
    return state.set('focused', true);
  }
  if (action.type === actionTypes.ON_BLUR) {
    return state.set('focused', false);
  }
  return state;
};
