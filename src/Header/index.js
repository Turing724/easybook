import React, { Component } from 'react';
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

class Header extends Component {
  getHotSearchList = () => {
    const { focused, hotSearchList } = this.props;
    if (focused) {
      return (
        <HotSearch>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch>
              <i className="iconfont iconqiehuan" />
              换一换
            </SearchInfoSwitch>
          </SearchInfoTitle>
          {hotSearchList.map((item, i) => {
            return <SearchInfoItem key={i}>{item}</SearchInfoItem>;
          })}
        </HotSearch>
      );
    } else {
      return null;
    }
  };
  render() {
    const { focused, handleFocus, handleBlur } = this.props;

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
            <CSSTransition in={focused} timeout={200} classNames="slide">
              <NavSearch
                onFocus={handleFocus}
                onBlur={handleBlur}
                className={focused ? 'focused' : ''}
              />
            </CSSTransition>
            <i className={focused ? 'focused iconfont iconMagnifier' : 'iconfont iconMagnifier'} />
            {this.getHotSearchList()}
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

const mapStateToProps = state => {
  return {
    focused: state.getIn(['Header', 'focused']),
    hotSearchList: state.getIn(['Header', 'hotSearchList'])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleFocus() {
      // 获取热门搜索数据
      dispatch(actionCreators.getHotSearchList());
      dispatch(actionCreators.onFocus());
    },
    handleBlur() {
      dispatch(actionCreators.onBlur());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
