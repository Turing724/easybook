import React, { Component } from 'react';
import { LoginWrapper, LoginContainer, LoginTitle, LoginForm, Input } from './style';

class Login extends Component {
  render() {
    return (
      <LoginWrapper>
        <LoginContainer>
          <LoginTitle>登录</LoginTitle>
          <LoginForm>
            <Input type="text" placeholder="手机号或邮箱" />
            <Input type="password" className="passWord" placeholder="邮箱" />
          </LoginForm>
        </LoginContainer>
      </LoginWrapper>
    );
  }
}
export default Login;
