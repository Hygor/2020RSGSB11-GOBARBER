import styled from 'styled-components';
import { shade } from 'polished';
import signupBackground from '../../assets/sign-up-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  order: 1;
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;
  width: 100%;
  max-width: 43.75rem;

  a {
    text-decoration: none;
    margin-top: 2rem;
    display: block;
  }

  form {
    margin: 5rem 0;
    width: 21.25rem;
    text-align: center;
    a {
      color: #f0f0f0;
      &:hover {
        color: ${shade(0.2, '#f0f0f0')};
      }
    }
  }

  & > a {
    color: #f0f0f0;
    display: flex;
    align-items: center;
    &:hover {
      color: ${shade(0.2, '#f0f0f0')};
    }

    & > svg {
      margin-right: 1rem;
    }
  }

  h1 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signupBackground}) center center no-repeat;
  background-clip: content-box;
  background-size: cover;
`;
