import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface ToastProps {
  type?: 'success' | 'error' | 'info';
  hasDescription: number | boolean;
}

const toastVariations = {
  info: css`
    color: skyblue;
  `,
  error: css`
    color: tomato;
  `,
  success: css`
    color: yellowgreen;
  `,
};

export const Container = styled(animated.div)<ToastProps>`
  width: 24rem;
  position: relative;
  padding: 1rem 2rem 1rem 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.5);
  background: rgba(25, 30, 40, 1);
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.5rem;

  ${props => toastVariations[props.type || 'info']}

  ${props =>
    props.hasDescription === false &&
    css`
      align-items: center;
    `}

  & > svg {
    margin-right: 1rem;
  }

  div {
    flex-grow: 1;

    strong {
      display: inline-block;
    }

    p {
      margin-top: 0.5rem;
      font-size: 1rem;
      opacity: 0.6;
      line-height: 1.2rem;
    }
  }

  button {
    border: none;
    position: absolute;
    top: 0;
    right: 0;
    background: transparent;
    color: unset;
    padding: 1rem;
  }
`;
