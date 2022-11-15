import React, { useEffect, useState } from "react";
import logo from "../images/logo.svg";
import hamburger from "../images/icon-menu.svg";
import close from "../images/icon-close-menu.svg";
import planning from "../images/icon-planning.svg";
import todo from "../images/icon-todo.svg";
import reminders from "../images/icon-reminders.svg";
import calendar from "../images/icon-calendar.svg";
import arrowDown from "../images/icon-arrow-down.svg";

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(true);
  const [subMenuToggle, setSubMenuToggle] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");

  const onCloseHandler = () => {
    setMenuToggle(false);
  };
  const onOpenHandler = () => {
    setMenuToggle(true);
  };
  const onSubMenuToggle = (e) => {
    console.log(e.target.dataset.id);
    setActiveMenu(e.target.dataset.id);
    setSubMenuToggle(true);
  };

  return (
    <header>
      <figure className="logo">
        <img src={logo} alt="logo" />
      </figure>
      <figure className="mobile-menu-icon open">
        <img src={hamburger} alt="menu" onClick={onOpenHandler} />
      </figure>
      {menuToggle && (
        <nav className="navigation">
          <figure className="mobile-menu-icon close">
            <img src={close} onClick={onCloseHandler} alt="close" />
          </figure>
          <ul className="nav-main">
            <li className="hasInner">
              <a onClick={onSubMenuToggle} data-id="1">
                Features
                <img
                  className={`arrow ${
                    subMenuToggle && activeMenu == 1 && "rotate"
                  }`}
                  src={arrowDown}
                  alt="arrowDown"
                />
              </a>
              {subMenuToggle && activeMenu == 1 && (
                <ul className="nav-sub">
                  <li>
                    <a href="#">
                      <img src={todo} alt="todo" />
                      Todo List
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={calendar} alt="calendar" />
                      Calender
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={reminders} alt="reminders" />
                      Reminders
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={planning} alt="planning" />
                      Planning
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li className="hasInner">
              <a onClick={onSubMenuToggle} data-id="2">
                Company
                <img
                  className={`arrow ${
                    subMenuToggle && activeMenu == 2 && "rotate"
                  }`}
                  src={arrowDown}
                  alt="arrowDown"
                />
              </a>
              {subMenuToggle && activeMenu == 2 && (
                <ul className="nav-sub">
                  <li>
                    <a href="#">History</a>
                  </li>
                  <li>
                    <a href="#">Our Team</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a href="#"> Careers</a>
            </li>
            <li>
              <a href="#"> About</a>
            </li>
          </ul>

          <div className="login-block">
            <ul>
              <li>
                <a href="#">Login</a>
              </li>
              <li>
                <a href="#">Register</a>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
