import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem } from '../style';
class Topic extends Component {
  render() {
    return (
      <TopicWrapper>
        <TopicItem>
          <img src="" alt="" />
        </TopicItem>
      </TopicWrapper>
    );
  }
}

const mapState = state => ({
  topicList: state.getIn(['Home', 'topicList'])
});

export default connect(
  mapState,
  null
)(Topic);
