import styled from 'styled-components';
export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`;
export const HomeLeft = styled.div`
  width: 625px;
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  .banner-img {
    height: 270px;
  }
`;

export const HomeRight = styled.div`
  padding-top: 30px;
  width: 280px;
  float: right;
`;

// Topic样式
export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`;
export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  padding-right: 10px;
  margin-left: 18px;
  margin-bottom: 10px;
  background: #f7f7f7;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .topic-pic {
    display: block;
    margin-right: 10px;
    float: left;
    width: 32px;
    height: 32px;
  }
`;
// List样式
export const ListWrapper = styled.div``;

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  margin: 0 0 15px;
  border-bottom: 1px solid #f0f0f0;
  .pic {
    display: block;
    float: right;
    width: 125px;
    height: 100px;
    border-radius: 4px;
  }
`;
export const ListInfo = styled.div`
  width: 460px;
  float: left;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
`;

// Recommend样式
export const RecommendWrapper = styled.div`
  margin-top: -4px;
  width: 280px;
`;
export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  background: url(${props => props.imgUrl});
  background-size: contain;
`;

// writer样式
export const WriterWrapper = styled.div`
  width: 280px;
  margin-top: 16px;
  overflow: hidden;
`;
export const WriterTitle = styled.div`
  font-size: 14px;
  color: #969696;
`;
export const WriterSwitch = styled.div`
  float: right;
`;
export const WriterInfo = styled.div``;
export const WriterInfoItem = styled.div`
  margin-top: 15px;
  width: 100%;
  overflow: hidden;
  .pic {
    float: left;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 1px solid #ddd;
    margin-right: 10px;
  }
  .follow {
    margin-top: 5px;
    float: right;
    font-size: 13px;
    color: #42c02e;
  }
  .name {
    font-size: 14px;
    padding-top: 6px;
    color: #333;
    cursor: pointer;
    p {
      padding-top: 5px;
      font-size: 12px;
      color: #969696;
    }
  }
`;
