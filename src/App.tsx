import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyles from './styles/global';

import StoreProvider from './stores';

import Routes from './routes';

const App: React.FC = () => (
  <Router>
    <StoreProvider>
      <Routes />
    </StoreProvider>
    <GlobalStyles />
  </Router>
);

export default App;
