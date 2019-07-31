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

const moreHomeList = data => ({
  type: actionTypes.GET_MORE_lIST,
  moreArticleList: fromJS(data)
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

export const getMoreList = () => {
  return dispatch => {
    axios
      .get('/api/homeList.json')
      .then(res => {
        const action = moreHomeList(res.data.data);
        dispatch(action);
      })
      .catch(error => {
        console.log(error);
      });
  };
};