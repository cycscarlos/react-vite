import React from "react";
import "./header.css";
import Botones from "./Botones";
import ME from "../../assets/img/me-logo.jpg";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Carlos Colmenares A.</h1>
        <h5 className="text-light">FullStack Developer</h5>
        <Botones />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
