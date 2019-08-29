import styled from 'styled-components';

export const LoginWrapper = styled.div`
  width: 100%;
  min-height: 750px;
  background: #f1f1f1;
  padding-top: 14%;
`;
export const LoginContainer = styled.div`
  width: 400px;
  min-height: 500px;
  margin: 0 auto;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  padding: 50px 50px 30px;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const LoginTitle = styled.div`
  font-weight: 700;
  color: #ea6f5a;
  font-size: 18px;
  text-align: center;
  margin-bottom: 50px;
`;
export const LoginForm = styled.div`
  width: 300px;
  height: 100px;
  border: 1px solid #c8c8c8;
  border-radius: 4px;
`;
export const Input = styled.input`
  border: none;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: #fff;
  padding: 4px 12px 4px 35px;
  box-sizing: border-box;
  color: #777;
  background-color: hsla(0, 0%, 71%, 0.1);
  &.passWord {
    border-top: 1px solid #c8c8c8;
  }
`;
export const Button = styled.button`
  border: none;
  background-color: #3194d0;
  color: #fff;
  border-radius: 4px;
  margin-top: 20px;
  text-align: center;
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  cursor: pointer;
`;
