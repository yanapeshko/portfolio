import React, { useState } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

export const Menu = ({ menu }) => {
  const [show, setShow] = useState(false);

  const _handleActiveSection = (e) => {
    window.location.hash = e.target.hash;
    setShow(!show);
  };

  return (
    <header className="l-header" id="header">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <nav className="nav bd-container">
          <span className="nav__logo">Menu</span>
          <div
            className={show ? "nav__menu show-menu" : "nav__menu"}
            id="nav-menu"
          >
            <ul className="nav__list">
              {menu.map(({ label, section, className }) => (
                <li className="nav__item" key={label}>
                  <NavLink
                    className="nav__link"
                    activeClassName="active-link"
                    onClick={_handleActiveSection}
                    to={{ pathname: "/", hash: section }}
                    isActive={(m, l) => (l.hash === section ? true : false)}
                  >
                    <i className={`bx ${className} nav__icon`} /> {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="nav__toggle"
            id="nav-toggle"
            onClick={() => setShow(!show)}
          >
            <i className="bx bx-grid-alt" />
          </div>
        </nav>
      </Router>
    </header>
  );
};
const Home = () => {
  return <Navigate to="/#home" />;
};
