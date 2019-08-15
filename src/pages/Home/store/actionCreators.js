import axios from 'axios';
import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const homeData = data => ({
  type: actionTypes.CHANGE_HOME_DATA,
  topicList: data.topicList,
  articleList: data.articleList,
  recommendList: data.recommendList,
  writerList: data.writerList
});

const moreHomeList = (data, nextPage) => ({
  type: actionTypes.GET_MORE_lIST,
  moreArticleList: fromJS(data),
  nextPage
});
export const toggleShowScroll = show => ({
  type: actionTypes.TOGGLE_SHOW_scroll,
  show
});

export const getHomeData = () => {
  return dispatch => {
    axios
      .get('/api/home.json')
      .then(res => {
        const data = res.data.data;
        const action = homeData(data);
        dispatch(action);
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const getMoreList = page => {
  return dispatch => {
    axios
      .get(`/api/homeList.json?page=${page}`)
      .then(res => {
        const action = moreHomeList(res.data.data, page + 1);
        dispatch(action);
      })
      .catch(error => {
        console.log(error);
      });
  };
};
