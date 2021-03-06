import React from "react";
import Navigation from "../../components/navigation/navigation";
import Order from "../../components/order/order";
import "./style.css";

export default function HistoryOrder() {
  return (
    <div className="history-order">
      <Order />
      <Navigation className="navigation" />
    </div>
  );
}
