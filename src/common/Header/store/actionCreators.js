import axios from 'axios';
import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const changeList = data => ({
  type: actionTypes.CAHNGE_LIST,
  data: fromJS(data),
  page: 1,
  totalPage: Math.ceil(data.length / 10)
});
export const onFocus = () => ({
  type: actionTypes.ON_FOCUS
});

export const onBlur = () => ({
  type: actionTypes.ON_BLUR
});

export const onMouseEnter = () => ({
  type: actionTypes.ON_MOUSE_ENTER
});

export const onMouseLeave = () => ({
  type: actionTypes.ON_MOUSE_LEAVE
});

// 切换页数
export const changePage = page => ({
  type: actionTypes.CHANGE_PAGE,
  page
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
