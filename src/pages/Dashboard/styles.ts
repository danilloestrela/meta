import styled from 'styled-components';
import { shade } from 'polished';

// template literals
export const Title = styled.h1`
  font-size: 48px;
  color: #97ca3d;
`;

export const BoxTitles = styled.h1`
  font-size: 24px;
  margin-top: 20px;
  color: #97ca3d;
`;

export const Form = styled.form`
  margin-top: 20px;
  max-width: 700px;

  display: flex;
  input {
    flex: 1;
    height: 50px;
    padding: 0 12px;
    border: 0;
    &:first-child {
      border-radius: 5px 0 0px 5px;
      border-right: 1px solid #000;
    }
  }

  button {
    min-width: 100px;
    height: 50px;
    background: #074491;
    color: #97ca3d;
    border: 0;
    border-radius: 0px 5px 5px 0px;
    &:hover {
      background: ${shade(0.1, '#074491')};
      cursor: pointer;
    }
  }
`;

export const BoxLogin = styled.div``;
export const BotBoxLogin = styled.div`
  margin-left: 30%;
  text-align: center;
  a {
    text-decoration: none;
    font-weight: bold;
    padding: 5px;
    &:hover {
      color: ${shade(0.1, '#97ca3d')};
    }
  }
`;
