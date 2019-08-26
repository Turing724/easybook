import React, { Component } from 'react';
import { LoginWrapper, LoginContainer, LoginTitle, LoginForm, Input, Button } from './style';
import { connect } from 'react-redux';
class Login extends Component {
  render() {
    return (
      <LoginWrapper>
        <LoginContainer>
          <LoginTitle>登录</LoginTitle>
          <LoginForm>
            <Input type="text" placeholder="手机号或邮箱" />
            <Input type="password" className="passWord" placeholder="邮箱" />
            <Button>登录</Button>
          </LoginForm>
        </LoginContainer>
      </LoginWrapper>
    );
  }
}

export default connect(
  null,
  null
)(Login);
