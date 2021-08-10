import React from "react";
import Order from "../../components/order/order";
import "./style.css";

export default function CurrentOrder() {
  return (
    <div className="current-order">
      <Order />
    </div>
  );
}
