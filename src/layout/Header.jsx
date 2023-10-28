import React from "react";

export const Header = () => {
  return (
    <nav className="nav header-nav green">
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          React Movies
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="#">User</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
