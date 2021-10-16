import React from "react";

import Header from "./components/header";
import Home from "./pages/home";
import Cart from "./pages/cart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cart" exact component={Cart} />
      </Switch>
    </Router>
  );
};

export default App;
