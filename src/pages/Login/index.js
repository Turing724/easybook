import React, { Component } from 'react';
import { LoginWrapper, LoginContainer, LoginTitle, LoginForm, Input, Button } from './style';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { Redirect } from 'react-router';
class Login extends Component {
  render() {
    const { isLogin } = this.props;
    // console.log(this.props.isLogin);
    if (!isLogin) {
      return (
        <LoginWrapper>
          <LoginContainer>
            <LoginTitle>登录</LoginTitle>
            <LoginForm>
              <Input
                type="text"
                placeholder="手机号或邮箱"
                ref={input => {
                  this.account = input;
                }}
              />
              <Input
                type="password"
                className="passWord"
                placeholder="密码"
                ref={input => {
                  this.password = input;
                }}
              />
              <Button onClick={() => this.props.login(this.account, this.password)}>登录</Button>
            </LoginForm>
          </LoginContainer>
        </LoginWrapper>
      );
    } else {
      return <Redirect to="/"></Redirect>;
    }
  }
}
const mapStateToProps = state => {
  // isLogin: state.getIn(['Login', 'isLogin'])
  console.log(state.getIn(['Login', 'isLogin']), 'state');
};
const mapDispatchToProps = dispatch => ({
  login(account, password) {
    dispatch(actionCreators.submitLogin(account.value, password.value));
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
