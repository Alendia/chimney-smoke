import React from "react";
import "./style.css";

export default function Order() {
  return (
    <div className="order">
      <div className="order-address">
        <p>喵喵大街</p>
      </div>
      <div className="order-info">
        <div className="order-progress">等待出货</div>
        <div className="order-time">2021-05-01 12:15:30</div>
      </div>
      <div className="meal-info">
        <div className="meal-pic"></div>
        <div className="meal-details">
          <div className="meal-name">喵</div>
          <div className="meal-intro">不好次</div>
        </div>
      </div>
      <div className="order-price">
        <p>￥28.00</p>
      </div>
      <div className="buttons">
        <div id="details" className="round-button">
          <p>订单详情</p>
        </div>
        <div id="onemore" className="round-button">
          <p>再来一单</p>
        </div>
      </div>
    </div>
  );
}
