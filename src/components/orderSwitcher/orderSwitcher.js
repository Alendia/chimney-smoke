import React from 'react';
import "./style.css"

export default function OrderSwitcher() {
  return (
    <div className="order-switcher">
      <div className="order-switch-link">
        <a href="">
          当前订单
        </a>
      </div>
      <div className="divider"></div>
      <div className="order-switch-link">
        <a href="">
          历史订单
        </a>
      </div>
    </div>
  )
}