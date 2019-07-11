import React, { Component } from 'react';
import { WriterWrapper, WriterTitle, WriterSwitch, WriterInfo, WriterInfoItem } from '../style';
class Writer extends Component {
  render() {
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
          <WriterInfoItem>
            <img
              src="//upload.jianshu.io/users/upload_avatars/5205317/1179d71b-e7c6-4023-89e8-bba25f88272b.jpg"
              alt=""
            />
            <p>名字</p>
            <p>关注</p>
          </WriterInfoItem>
        </WriterInfo>
      </WriterWrapper>
    );
  }
}
export default Writer;
