import React, { Component } from 'react';
import { Head, Logo, Nav, NavItem, NavSearch, Addition, Button, NavSearchWrapper } from './style';
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
            <NavSearch onFocus={this.handleFocus} />
            <i className="iconfont iconMagnifier" />
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
