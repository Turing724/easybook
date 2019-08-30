import { actionTypes } from './index';
import axios from 'axios';
const Login = () => ({
  type: actionTypes.LOGIN_REQS,
  value: true
});

// const Logout = () => ({
//   type: actionTypes.LOGOUT_REQS,
//   value: false
// });

export const submitLogin = (account, password) => {
  return dispatch => {
    axios.get(`/api/login.json?account=${account}&password=${password}`).then(res => {
      const result = res.data.data;
      if (result) {
        dispatch(Login());
        console.log('登录成功');
      } else {
        console.log('登录失败');
      }
    });
  };
};
