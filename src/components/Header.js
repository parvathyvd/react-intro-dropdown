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
  const [featureOpen, setFeatureOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [open, setOpen] = useState(true);

  const onCloseHandler = () => {
    setOpen(false);
  };
  const onOpenHandler = (e) => {
    setOpen(true);
  };
  const onFeatureOpen = (e) => {
    setFeatureOpen((prev) => !prev);
  };
  const onComapnyOpen = (e) => {
    setCompanyOpen((prev) => !prev);
  };

  return (
    <header>
      <figure className="logo">
        <img src={logo} alt="logo" />
      </figure>
      <figure className="mobile-menu-icon">
        <img src={hamburger} alt="menu" onClick={onOpenHandler} />
      </figure>
      {open && (
        <nav className="navigation">
          <figure className="mobile-menu-icon close">
            <img src={close} onClick={onCloseHandler} alt="close" />
          </figure>
          <ul className="nav-main">
            <li className="hasInner">
              <a onClick={onFeatureOpen} data-id="1">
                Features
                <img
                  className={`arrow ${featureOpen && "rotate"}`}
                  src={arrowDown}
                  alt="arrowDown"
                />
              </a>
              {featureOpen && (
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
              <a onClick={onComapnyOpen} data-id="2">
                Company
                <img
                  className={`arrow ${companyOpen && "rotate"}`}
                  src={arrowDown}
                  alt="arrowDown"
                />
              </a>
              {companyOpen && (
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
