import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListWrapper, ListItem, ListInfo } from '../style';
class List extends Component {
  render() {
    const { articleList } = this.props;
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
      </ListWrapper>
    );
  }
}

const mapStateToProps = state => ({
  articleList: state.getIn(['Home', 'articleList'])
});
export default connect(
  mapStateToProps,
  null
)(List);
