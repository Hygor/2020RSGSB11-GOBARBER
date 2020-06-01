import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: unset;
  }

  body {
    background-color: #312e38;
    color: #fcfcfc;
    -webkit-font-smoothing: antialiased;
    font: normal 16px/1rem 'Roboto Slab', Serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
