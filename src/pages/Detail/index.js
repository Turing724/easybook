import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DetailWrapper, DetailTitle, DetailContent } from './style';
import { actionCreators } from './store';
class Detail extends Component {
  render() {
    // const { detailList } = this.props;
    return (
      <DetailWrapper>
        <DetailTitle>{this.props.detailList.get('title')}</DetailTitle>
        <img src={this.props.detailList.get('img')} alt="" />
        <DetailContent dangerouslySetInnerHTML={{ __html: this.props.detailList.get('content') }} />
      </DetailWrapper>
    );
  }
  componentDidMount() {
    this.props.getDetailData();
    console.log(this.props.location);
  }
}
const mapStateToProps = state => ({
  detailList: state.getIn(['Detail', 'detailList'])
});
const mapDispatchToProps = dispatch => ({
  getDetailData() {
    dispatch(actionCreators.getDetailData());
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail);
