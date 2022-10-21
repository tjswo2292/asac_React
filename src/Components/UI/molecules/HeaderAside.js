import React from "react";

import { AiOutlineSearch, AiOutlineBell } from "react-icons/ai";

import "./headerAside.css";

const HeaderAside = () => {
  return (
    <ul className="header-aside-container">
      <li className="aside-item">
        <button type="click" className="aside-box">
          <AiOutlineSearch className="aside-icon" />
        </button>
      </li>
      <li className="aside-item">
        <button type="click" className="aside-box">
          <AiOutlineBell className="aside-icon" />
        </button>
      </li>
      <li className="aside-item">
        <button type="click" className="aside-box">
          <div className="profile-img">
            <img src={process.env.PUBLIC_URL + "/assets/profileImg.png"} />
          </div>
        </button>
      </li>
      <li className="aside-item">
        <a href="#">
          <span className="company-service">기업 서비스</span>
        </a>
      </li>
    </ul>
  );
};

export default HeaderAside;
