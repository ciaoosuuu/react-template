import React from "react";

import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <h1>logo</h1>
      <nav>
        <ul className={classes.list}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page">Page1</Link>
          </li>
          <li>
            <Link to="/page">Page2</Link>
          </li>
          <li>
            <Link to="/page">Page3</Link>
          </li>
        </ul>
      </nav>
      <h2>Auth</h2>
    </header>
  );
}

export default MainNavigation;