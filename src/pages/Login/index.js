import React, { Component } from 'react';
import { LoginWrapper, LoginContainer, LoginTitle, LoginForm, Input, Button } from './style';
import { connect } from 'react-redux';
import { dispatch } from '../../../../../AppData/Local/Microsoft/TypeScript/3.5/node_modules/rxjs/internal/observable/pairs';
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
const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});
export default connect(
  null,
  null
)(Login);
