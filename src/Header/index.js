import React, { Component } from 'react';
import { Head, Logo, Nav, NavItem, NavSearch, Addition, Button, NavSearchWrapper } from './style';
import { CSSTransition } from 'react-transition-group';
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false
    };
  }
  handleFocus = () => {
    this.setState({
      focused: true
    });
  };
  hanfleBlur = () => {
    this.setState({
      focused: false
    });
  };
  render() {
    return (
      <Head>
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载APP</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <i className="iconfont iconAa" />
          </NavItem>
          <NavSearchWrapper>
            <CSSTransition in={this.state.focused} timeout={200} classNames="slide">
              <NavSearch
                onFocus={this.handleFocus}
                onBlur={this.hanfleBlur}
                className={this.state.focused ? 'focused' : ''}
              />
            </CSSTransition>
            <i
              className={
                this.state.focused ? 'focused iconfont iconMagnifier' : 'iconfont iconMagnifier'
              }
            />
          </NavSearchWrapper>
        </Nav>
        <Addition>
          <Button className="write">
            <i className="iconfont iconpan_icon pencil" />
            写文章
          </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </Head>
    );
  }
}
export default Header;
