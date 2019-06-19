import axios from 'axios';
import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const changeList = data => ({
  type: actionTypes.CAHNGE_LIST,
  data: fromJS(data)
});
export const onFocus = () => ({
  type: actionTypes.ON_FOCUS
});

export const onBlur = () => ({
  type: actionTypes.ON_BLUR
});

// 获取热门搜索列表
export const getHotSearchList = () => {
  return dispatch => {
    axios
      .get('/api/headerList.json')
      .then(res => {
        const data = res.data.data;
        dispatch(changeList(data));
      })
      .catch(error => {
        console.log(error);
      });
  };
};
