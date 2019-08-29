import React, { Component } from 'react';
import { LoginWrapper, LoginContainer, LoginTitle, LoginForm, Input, Button } from './style';
import { connect } from 'react-redux';
import { actionCreators } from './store';

class Login extends Component {
  render() {
    return (
      <LoginWrapper>
        <LoginContainer>
          <LoginTitle>登录</LoginTitle>
          <LoginForm>
            <Input
              type="text"
              placeholder="手机号或邮箱"
              innerRef={input => {
                this.account = input;
              }}
            />
            <Input
              type="password"
              className="passWord"
              placeholder="密码"
              innerRef={input => {
                this.password = input;
              }}
            />
            <Button onClick={() => this.props.login(this.account, this.password)}>登录</Button>
          </LoginForm>
        </LoginContainer>
      </LoginWrapper>
    );
  }
}
// const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  login(account, password) {
    dispatch(actionCreators.submitLogin(account.value, password.value));
  }
});
export default connect(
  null,
  mapDispatchToProps
)(Login);
