import axios from 'axios';
import * as actionTypes from './actionTypes';

const homeData = data => ({
  type: actionTypes.CHANGE_HOME_DATA,
  topicList: data.topicList,
  articleList: data.articleList,
  recommendList: data.recommendList,
  writerList: data.writerList
});

export const getHomeData = () => {
  return dispatch => {
    axios
      .get('/api/home.json')
      .then(res => {
        const data = res.data.data;
        const action = homeData(homeData(data));
        dispatch(action);
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const getMoreList = () => {
  return dispatch => {};
};
