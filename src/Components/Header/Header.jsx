import React from "react";
import "./Header.scss";
import Button from "../Button/Button";
import logo from "../../Assets/img/logo.png";

const Header = () => {
  return (
    <div className="l-header">
      <img className="l-header__logo" src={logo} alt="" />
      <Button text="Sign In"></Button>
    </div>
  );
};

export default Header;
