import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defalutState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  writerList: [],
  articlePage: 1
});

export default (state = defalutState, action) => {
  console.log(state, action, 'action');

  switch (action.type) {
    case actionTypes.CHANGE_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
        writerList: fromJS(action.writerList)
      });
    case actionTypes.GET_MORE_lIST:
      return state.merge({
        articleList: state.get('articleList').concat(action.moreArticleList),
        articlePage: action.nextPage
      });
    default:
      return state;
  }
};
