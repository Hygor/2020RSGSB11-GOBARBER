import React from 'react';
import GlobalStyles from './styles/global';

import Signin from './pages/Signin';
import Signup from './pages/Signup';

const App: React.FC = () => (
  <div className="App">
    {/* <Signin /> */}
    <Signup />
    <GlobalStyles />
  </div>
);

export default App;
