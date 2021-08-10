import React from 'react';
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/home";
import OrderNow from "./pages/orderNow/orderNow";
import Personal from "./pages/personal/personal";
import Navigation from "./components/navigation/navigation";
import Orders from "./pages/orders/orders";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/order">
            <OrderNow />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/personal">
            <Personal />
          </Route>
        </Switch>
        <Navigation className="navigation" />
      </div>
    </Router>
  );
}

export default App;
