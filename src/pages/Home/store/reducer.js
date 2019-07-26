import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defalutState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  writerList: []
});

export default (state = defalutState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
        writerList: fromJS(action.writerList)
      });
    default:
      return state;
  }
};
