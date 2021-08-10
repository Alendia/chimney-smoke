import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

import MainButtonPic from "../../static/img/main.svg";
import OrderButtonPic from "../../static/img/order.svg";
import OrdersButtonPic from "../../static/img/orders.svg";
import PersonalButtonPic from "../../static/img/my.svg";

export default function Navigation() {
  return (
    <div className="navigation">
      <Link to="/" className="navigation-link">
        <img src={MainButtonPic} alt="" />
        <p>主页</p>
      </Link>
      <Link to="/order-now" className="navigation-link">
        <img src={OrderButtonPic} alt="" />
        <p>点单</p>
      </Link>
      <Link to="/orders" className="navigation-link">
        <img src={OrdersButtonPic} alt="" />
        <p>订单</p>
      </Link>
      <Link to="/personal" className="navigation-link">
        <img src={PersonalButtonPic} alt="" />
        <p>我的</p>
      </Link>
    </div>
  );
}
