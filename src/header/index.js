import React from "react";

import { Link } from 'react-router-dom';

import "./style.scss";

export default function Header() {
  return (
    <nav className="uk-navbar-container uk-margin" uk-navbar="mode: click">
      <div className="uk-navbar-left">
        <ul className="uk-navbar-nav">
          <li className="uk-active">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <a href="#">Item</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
