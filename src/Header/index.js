import React from 'react';
import {
  Head,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  NavSearchWrapper,
  HotSearch,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem
} from './style';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from './store';
const Header = props => {
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
          <CSSTransition in={props.focused} timeout={200} classNames="slide">
            <NavSearch
              onFocus={props.handleFocus}
              onBlur={props.hanfleBlur}
              className={props.focused ? 'focused' : ''}
            />
          </CSSTransition>
          <i
            className={props.focused ? 'focused iconfont iconMagnifier' : 'iconfont iconMagnifier'}
          />
          <HotSearch>
            <SearchInfoTitle>
              热门搜索
              <SearchInfoSwitch>
                <i className="iconfont iconqiehuan" />
                换一换
              </SearchInfoSwitch>
            </SearchInfoTitle>
            <SearchInfoItem>程序员</SearchInfoItem>
            <SearchInfoItem>程序员</SearchInfoItem>
            <SearchInfoItem>程序员</SearchInfoItem>
            <SearchInfoItem>程序员</SearchInfoItem>
            <SearchInfoItem>程序员</SearchInfoItem>
            <SearchInfoItem>程序员</SearchInfoItem>
          </HotSearch>
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
};

const mapStateToProps = state => {
  return {
    focused: state.getIn(['Header', 'focused'])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleFocus() {
      dispatch(actionCreators.onFocus());
    },
    hanfleBlur() {
      dispatch(actionCreators.onBlur());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
