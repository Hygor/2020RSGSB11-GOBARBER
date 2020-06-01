import styled from 'styled-components';

export const Container = styled.div`
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
