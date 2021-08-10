import React from "react";
import "./style.css";

import RightArrow from "../../static/img/rightArrow.svg";
import AnalysisPic from "../../static/img/analysis.svg";
import TicketsPic from "../../static/img/tickets.svg";

function Info() {
  return (
    <div className="profile">
      <div className="profile-pic"></div>
      <p className="profile-name">猫猫</p>
    </div>
  );
}

function Feature() {
  return (
    <div className="feature-block">
      <div>
        <a href="" className="feature-link">
          <img className="feature-img" src={AnalysisPic} alt="" />
          <p>个性分析</p>
        </a>
      </div>
      <div className="divider"></div>
      <div>
        <a href="" className="feature-link">
          <img className="feature-img" src={TicketsPic} alt="" />
          <p>优惠券</p>
        </a>
      </div>
    </div>
  );
}

function Settings() {
  return (
    <div className="settings-block">
      <div className="settings-link">
        <a href="">
          <p>口味设置</p>
          <img src={RightArrow} alt="" />
        </a>
      </div>
      <div className="settings-divider"></div>
      <div className="settings-link">
        <a href="">
          <p>积分兑换</p>
          <img src={RightArrow} alt="" />
        </a>
      </div>
      <div className="settings-divider"></div>
      <div className="settings-link">
        <a href="">
          <p>联系客服</p>
          <img src={RightArrow} alt="" />
        </a>
      </div>
      <div className="settings-divider"></div>
      <div className="settings-link">
        <a href="">
          <p>更多</p>
          <img src={RightArrow} alt="" />
        </a>
      </div>
    </div>
  );
}

export default function Personal() {
  return (
    <div className="personal">
      <div className="personal-bg"></div>
      <Info />
      <Feature />
      <Settings />
    </div>
  );
}
