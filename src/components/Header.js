import React from "react";
import Logo from "../assets/logo.png";

export const Header = () => {
  return (
    <header>
      <img src={Logo} className="logo" alt="" />
      <a href="/">Home</a>
    </header>
  );
};
