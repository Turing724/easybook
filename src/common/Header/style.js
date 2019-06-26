import styled from 'styled-components';
import LogoImage from '../../statics/logo.png';
export const Head = styled.div`
  width: 100%;
  height: 58px;
  margin: 0 auto;
  border-bottom: 1px solid #f0f0f0;
  padding: 0 10px;
`;
export const Logo = styled.a.attrs({
  href: '/'
})`
  width: 100px;
  height: 56px;
  display: block;
  background: url(${LogoImage});
  position: absolute;
  top: 0;
  left: 0;
  background-size: contain;
`;
export const Nav = styled.div`
  width: 945px;
  height: 58px;
  margin: 0 auto;
  box-sizing: border-box;
`;
export const NavItem = styled.div`
  display: inline-block;
  width: 80px;
  height: 56px;
  line-height: 56px;
  margin-right: 10px;
  font-size: 16px;
  cursor: pointer;
  &.left {
    float: left;
    color: #333;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`;
export const NavSearchWrapper = styled.div`
  float: left;
  position: relative;
  .slide-enter {
    width: 160px;
    transition: all 0.2s ease-out;
  }
  .slide-enter-active {
    width: 240px;
  }
  .slide-exit {
    transition: all 0.2s ease-out;
  }
  .slide-exit-active {
    width: 160px;
  }
  .iconMagnifier {
    position: absolute;
    right: 5px;
    bottom: 4px;
    display: inline-block;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    &.focused {
      background: #777;
    }
  }
`;
export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  padding: 0 35px 0 20px;
  margin-top: 9px;
  margin-left: 20px;
  box-sizing: border-box;
  color: #777;
  border: none;
  outline: none;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
  }
`;
export const HotSearch = styled.div`
  position: absolute;
  top: 58px;
  left: 18px;
  width: 240px;
  padding: 0 20px 10px 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
`;
export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;
export const SearchInfoSwitch = styled.div`
  float: right;
  font-size: 13px;
  cursor: pointer;
  .iconspin {
    font-size: 13px;
    vertical-align: baseline;
    display: inline-block;
    margin-right: 3px;
    transition: all 0.2s ease-in;
    transform: rotate(0deg);
    transform-origin: center center;
  }
`;
export const SearchInfoItem = styled.a`
  display: inline-block;
  padding: 2px 6px;
  font-size: 12px;
  color: #787878;
  border: 1px solid #ddd;
  border-radius: 3px;
  margin-right: 10px;
  margin-bottom: 10px;
  cursor: pointer;
`;
export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;
export const Button = styled.div`
  float: right;
  line-height: 34px;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  border-radius: 20px;
  border: 1px solid rgba(236, 97, 73, 0.7);
  font-size: 15px;
  &.reg {
    color: #ea6f5a;
    background-color: transparent;
  }
  &.write {
    color: #fff;
    background-color: #ea6f5a;
  }
  .pencil {
    margin-right: 5px;
  }
`;
