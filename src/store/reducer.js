import { combineReducers } from 'redux-immutable';
import { reducer as HeaderReducer } from '../common/Header/store';
import { reducer as HomeReducer } from '../pages/Home/store';
import { reducer as DetailReducer } from '../pages/Detail/store';
// 合并组件的reducer;
const reducer = combineReducers({
  Header: HeaderReducer,
  Home: HomeReducer,
  Detail: DetailReducer
});

export default reducer;
