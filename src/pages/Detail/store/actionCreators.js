import axios from 'axios';
import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const DetailData = data => ({
  type: actionTypes.GET_DETAIL_DATA,
  detailList: fromJS(data)
});

export const getDetailData = id => {
  return dispatch => {
    axios
      .get(`/api/detail.json?id=${id}`)
      .then(res => {
        dispatch(DetailData(res.data.data));
      })
      .catch(error => {
        console.log(error);
      });
  };
};
