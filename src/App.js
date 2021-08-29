import React from 'react';
import {HomePage} from './Pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle  from './globalStyles';
import {Navbar} from './components';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <HomePage />
    </Router>
  );
}

export default App;
