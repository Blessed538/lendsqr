import React from "react";
import "./header.scss";
import searchIcon from "../../images/search.png";
import logo from "../../images/logo.svg";
import notification from "../../images/notification.png";
import profile from "../../images/profile.png";
import profileDropdown from "../../images/dropdown.png";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="right">
          <img src={logo} alt="logo" />
          <div className="searchContainer">
            <input placeholder="Search for anything.." type="search" />
            <span>
              <img src={searchIcon} alt="search" />
            </span>
          </div>
        </div>
        <div>
          <ul>
            <li>
              <a href="/">Docs</a>
            </li>
            <li>
              <img src={notification} alt="notification bell" />
            </li>
            <li>
              <img src={profile} alt="auth user profile" />
              <span>
                <img src={profileDropdown} alt="profile dropdown" />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
