import React from 'react'
import { BrowserRouter as Router,Route } from 'react-router-dom';

import './styles/app.scss'

import Signin from './pages/Signin';

function App() {
  return (
    <Router>
      <Route exact path="/signin" component={Signin} />
    </Router>
  );
}

export default App;
