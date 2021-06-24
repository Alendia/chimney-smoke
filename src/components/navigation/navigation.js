import React from "react";
import "./style.css"

import MainButtonPic from "../../static/img/main.svg"
import OrderButtonPic from "../../static/img/order.svg"
import OrdersButtonPic from "../../static/img/orders.svg"
import PersonalButtonPic from "../../static/img/my.svg"


export default function Navigation() {
  return (
    <div className="navigation">
      <a href="" className="navigation-link">
        <img src={MainButtonPic} alt="" />
        <p>主页</p>
      </a>
      <a href="" className="navigation-link">
        <img src={OrderButtonPic} alt="" />
        <p>点单</p>
      </a>
      <a href="" className="navigation-link">
        <img src={OrdersButtonPic} alt="" />
        <p>订单</p>
      </a>
      <a href="" className="navigation-link">
        <img src={PersonalButtonPic} alt="" />
        <p>我的</p>
      </a>
    </div>
  );
}
