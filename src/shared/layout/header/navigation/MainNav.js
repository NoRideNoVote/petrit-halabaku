import React from "react";
import MainHeader from "../MainHeader";
import NavLinks from "../navigation/NavLinks";


import "./main-nav.scss"

const MainNav = () => {
  return (
    <MainHeader>
      <div className="navigation__title">
        <a href="#top">Portfolio</a>
      </div>

      <div className="navigation__menu-btn">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className="navigation__header-nav">
        <NavLinks />
      </nav>
    </MainHeader>
  );
};

export default MainNav;