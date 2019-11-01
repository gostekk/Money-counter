import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';

import Navigation from '../components/Navigation';
import Content from '../components/Content';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navigation />
      <Content />
    </React.Fragment>
  );
}

export default App;
