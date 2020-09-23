import styled, { css } from 'styled-components';
import Tooltip from '../Tolltip';

interface ContainerProps {
  isFocused?: boolean;
  isFilled?: boolean;
  isErrored?: boolean;
}

export const Error = styled(Tooltip)`
  display: block;
  height: 1.3rem;
  color: tomato;
  margin-right: 1rem;

  span {
    color: #fff;
    background-color: tomato;

    &:before {
      border-color: tomato;
    }
  }
`;

export const Container = styled.div<ContainerProps>`
  color: #666360;
  background: #212229;
  border: 0.0625rem solid #232129;
  width: 100%;
  transition: border 0.25s;

  display: flex;
  align-items: center;
  font-size: 1rem;
  border-radius: 0.25rem;

  & > svg {
    margin-left: 1rem;
  }

  ${props =>
    props.isErrored &&
    css`
      color: tomato;
      border-color: tomato;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}

    ${props =>
      props.isFilled &&
      css`
        color: #ff9000;
      `}


  input {
    width: 100%;
    color: #f0f0f0;
    background-color: transparent;
    border: unset;
    padding: 1rem;
    font-size: 1rem;

    &::placeholder {
      color: #666360;
    }
  }
  & + div {
    margin-top: 0.5rem;
  }
`;
