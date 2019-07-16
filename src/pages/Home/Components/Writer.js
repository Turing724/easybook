import React, { Component } from 'react';
import { connect } from 'react-redux';
import { WriterWrapper, WriterTitle, WriterSwitch, WriterInfo, WriterInfoItem } from '../style';
class Writer extends Component {
  render() {
    const { writerList } = this.props;
    return (
      <WriterWrapper>
        <WriterTitle>
          推荐作者
          <WriterSwitch>
            <i className="iconfont iconspin" />
            换一换
          </WriterSwitch>
        </WriterTitle>
        <WriterInfo>
          {writerList.map(item => {
            return (
              <WriterInfoItem>
                <p className="follow">
                  <i className="iconfont iconjiahao" />
                  关注
                </p>
                <img className="pic" src={item.get('avatar_source')} alt="" />
                <p className="name">
                  {item.get('nickname')}
                  <p>
                    写了{(item.get('total_wordage') / 1000).toFixed(1)}k字 ·{' '}
                    {(item.get('total_likes_count') / 1000).toFixed(1)}k喜欢
                  </p>
                </p>
              </WriterInfoItem>
            );
          })}
        </WriterInfo>
      </WriterWrapper>
    );
  }
}

const mapStateToProps = state => ({
  writerList: state.getIn(['Home', 'writerList'])
});
export default connect(
  mapStateToProps,
  null
)(Writer);
