import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OrderSwitcher from "../../components/orderSwitcher/orderSwitcher";
import CurrentOrder from "../currentOrder/currentOrder";
import HistoryOrder from "../historyOrder/historyOrder";
import "./style.css"

export default function Orders() {
  return (
    <Router>
      <div className="order-homepage">
        <OrderSwitcher />
        <Switch>
          <Route exact path="/orders">
            <CurrentOrder />
          </Route>
          <Route exact path="/current-order">
            <CurrentOrder />
          </Route>
          <Route path="/history-order">
            <HistoryOrder />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
