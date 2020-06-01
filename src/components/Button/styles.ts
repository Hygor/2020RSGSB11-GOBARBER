import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  font-size: 1rem;
  border-radius: 0.25rem;
  background: #ff9000;
  color: #312e38;
  border: 0rem solid #232129;
  padding: 0 1rem;
  width: 100%;
  height: 3.5rem;
  font-weight: 500;
  margin-top: 1rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${shade(0.2, '#ff9000')};
  }
`;
