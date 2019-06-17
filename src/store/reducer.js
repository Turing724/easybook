import { combineReducers } from 'redux-immutable';
import { reducer as HeaderReducer } from '../Header/store';

// 合并组件的reducer;
const reducer = combineReducers({
  Header: HeaderReducer
});

export default reducer;
