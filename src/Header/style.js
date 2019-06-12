import styled from 'styled-components';
import LogoImage from '../statics/logo.png';
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

  .iconMagnifier {
    position: absolute;
    right: 5px;
    bottom: 4px;
    display: inline-block;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
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
