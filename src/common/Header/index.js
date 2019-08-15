import React, { Component } from 'react';
import { Head, Logo, Nav, NavItem, NavSearch, Addition, Button, NavSearchWrapper, HotSearch, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem } from './style';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { Link } from 'react-router-dom';
class Header extends Component {
  getHotSearchList = () => {
    const { focused, mouseIn, page, totalPage, hotSearchList, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;

    // 将immutable类型数据转为js类型数据
    const newList = hotSearchList.toJS();

    const pageList = [];

    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>);
      }
    }

    if (focused || mouseIn) {
      return (
        <HotSearch onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={_ => handleChangePage(page, totalPage, this.spinIcon)}>
              <i
                ref={icon => {
                  this.spinIcon = icon;
                }}
                className="iconfont iconspin"
              />
              换一换
            </SearchInfoSwitch>
          </SearchInfoTitle>
          {pageList}
        </HotSearch>
      );
    } else {
      return null;
    }
  };
  render() {
    const { focused, hotSearchList, handleFocus, handleBlur } = this.props;

    return (
      <Head>
        <Link to="/home">
          <Logo />
        </Link>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载APP</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <i className="iconfont iconAa" />
          </NavItem>
          <NavSearchWrapper>
            <CSSTransition in={focused} timeout={200} classNames="slide">
              <NavSearch onFocus={_ => handleFocus(hotSearchList)} onBlur={handleBlur} className={focused ? 'focused' : ''} />
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
    hotSearchList: state.getIn(['Header', 'hotSearchList']),
    mouseIn: state.getIn(['Header', 'mouseIn']),
    page: state.getIn(['Header', 'page']),
    totalPage: state.getIn(['Header', 'totalPage'])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleFocus(list) {
      console.log(list);
      // 获取热门搜索数据
      list.size === 0 && dispatch(actionCreators.getHotSearchList());
      dispatch(actionCreators.onFocus());
    },
    handleBlur() {
      dispatch(actionCreators.onBlur());
    },
    // 鼠标移入
    handleMouseEnter() {
      dispatch(actionCreators.onMouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.onMouseLeave());
    },
    // 切换页数
    handleChangePage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/gi, '');
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      spin.style.transform = `rotate(${originAngle + 360}deg)`;
      console.log(spin.style, originAngle);

      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1));
      } else {
        dispatch(actionCreators.changePage(1));
      }
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
