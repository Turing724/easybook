import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style';
import Topic from './Components/Topic';
import List from './Components/List';
import Recommend from './Components/Recommend';
import Writer from './Components/Writer';
import { actionCreators } from './store';
class Home extends Component {
  backTop() {
    console.log(1);
    // 返回顶部
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="" />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {this.props.showScroll ? <BackTop onClick={this.backTop}>Top</BackTop> : null}
      </HomeWrapper>
    );
  }
  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow);
  }
  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow);
  }
}

const mapStateToProps = state => ({
  showScroll: state.getIn(['Home', 'showScroll'])
});
const mapDispatchToProps = dispatch => ({
  changeHomeData() {
    const action = actionCreators.getHomeData();
    dispatch(action);
  },
  changeScrollTopShow() {
    if (document.documentElement.scrollTop > 400) {
      dispatch(actionCreators.toggleShowScroll(true));
    } else {
      dispatch(actionCreators.toggleShowScroll(false));
    }
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
