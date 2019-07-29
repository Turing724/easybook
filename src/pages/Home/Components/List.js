import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListWrapper, ListItem, ListInfo, LoadMore } from '../style';
import { actionCreators } from '../../../common/Header/store';
class List extends Component {
  render() {
    const { articleList, getMore } = this.props;
    return (
      <ListWrapper>
        {articleList.map(item => {
          return (
            <ListItem key={item.get('id')}>
              <img className="pic" src={item.get('imgUrl')} alt="" />
              <ListInfo>
                <h3 className="title">{item.get('title')}</h3>
                <p className="desc">{item.get('desc')}</p>
              </ListInfo>
            </ListItem>
          );
        })}
        <LoadMore onClick={getMore}>更多文字</LoadMore>
      </ListWrapper>
    );
  }
}

const mapStateToProps = state => ({
  articleList: state.getIn(['Home', 'articleList'])
});

const mapDispatchToProps = dispatch => ({
  // 获取更多文字
  getMore() {
    dispatch(actionCreators.getMoreList());
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
