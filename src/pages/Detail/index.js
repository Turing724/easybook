import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DetailWrapper, DetailTitle, DetailContent } from './style';
import { actionCreators } from './store';
class Detail extends Component {
  render() {
    return (
      <DetailWrapper>
        <DetailTitle>{this.props.detailList.get('title')}</DetailTitle>
        <img src={this.props.detailList.get('img')} alt="" />
        <DetailContent dangerouslySetInnerHTML={{ __html: this.props.detailList.get('content') }} />
      </DetailWrapper>
    );
  }

  componentDidMount() {
    this.props.getDetailData(this.props.match.params.id);
  }
}
const mapStateToProps = state => ({
  detailList: state.getIn(['Detail', 'detailList'])
});
const mapDispatchToProps = dispatch => ({
  getDetailData(id) {
    dispatch(actionCreators.getDetailData(id));
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail);
