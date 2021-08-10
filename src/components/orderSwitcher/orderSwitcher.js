import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default function OrderSwitcher() {
  return (
    <div className="order-switcher">
      <div className="order-switch-link">
        <Link className="order-switch-link-intro" to="/current-order">
          当前订单
        </Link>
      </div>
      <div className="divider"></div>
      <div className="order-switch-link">
        <Link className="order-switch-link-intro" to="/history-order">
          历史订单
        </Link>
      </div>
    </div>
  );
}
