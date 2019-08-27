import { fromJS } from 'immutable';

const defaultState = fromJS({
  isLogin: false
});

const reducer = (state = defaultState, action) => {
  return state;
};

export default reducer;
