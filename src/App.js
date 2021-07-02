import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./styles/app.scss";

import Signin from "./pages/Signin";
import Category from "./pages/Category";

function App() {
  return (
    <Router>
      <Route exact path="/signin" component={Signin} />
      <Route exact path="/category" component={Category} />
    </Router>
  );
}

export default App;
