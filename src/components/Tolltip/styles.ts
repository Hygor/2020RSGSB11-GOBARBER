import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    color: #312e38;
    background: #ff9000;
    padding: 0.5rem;
    border-radius: 0.3rem;
    font-size: 0.93rem;
    font-weight: 500;
    width: 12rem;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.4s ease-in-out;

    position: absolute;
    bottom: calc(100% + 0.5rem);
    left: 50%;
    transform: translateX(-50%);

    &:before {
      content: '';
      display: block;
      width: 0.1rem;
      height: 0.1rem;
      position: absolute;
      border-style: solid;
      border-color: #ff9000 transparent;
      border-width: 0.4rem 0.4rem 0 0.4rem;
      bottom: -0.1rem;
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
