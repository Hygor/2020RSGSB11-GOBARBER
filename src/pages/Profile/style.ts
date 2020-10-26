import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;

  header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 10rem;
    background-color: #28262e;
    display: flex;
    align-items: center;

    div {
      width: 100%;
      max-width: 70rem;
      margin: 0 auto;
    }

    a,
    svg {
      color: #999591;
      vertical-align: middle;
      height: 1rem;
    }
    a {
      text-decoration: none;
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      line-height: 1em;
      cursor: pointer;
      font-weight: 500;

      &:hover {
        color: #ff9000;

        svg {
          color: #ff9000;
        }
      }
    }
    svg {
      margin-right: 0.5rem;
      width: 1rem;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;
  width: 100%;
  max-width: 48rem;
  margin: 0 auto;

  a {
    text-decoration: none;
    margin-top: 2rem;
    display: block;
  }

  form {
    margin: 0 0 5rem;
    width: 21.25rem;
    text-align: center;
    transform: translateY(-2.5rem);

    a {
      color: #f0f0f0;
      &:hover {
        color: ${shade(0.2, '#f0f0f0')};
      }
    }
  }

  hr {
    border: none;
    margin: 1rem 0;
    border-bottom: 0.1rem solid #212229;
  }

  h1 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    text-align: left;
  }
`;

export const AvatarInput = styled.div`
  position: relative;
  width: 10rem;
  height: 10rem;
  margin: 0 auto 4rem;

  input {
    display: none;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 5rem;
    margin-bottom: 2rem;
  }
  label {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ff9000;
    border-radius: 1.25rem;
    border: none;
    cursor: pointer;

    &:hover {
      opacity: 0.5;
    }

    svg {
      color: black;
      opacity: 0.8;
      width: 1.2rem;
      height: 1.2rem;
    }
  }
`;
