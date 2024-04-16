import React from "react";
import Logo from "../assets/logo.jpg";
import "./header.css";

export const Header = () => {
  return (
    <div>
      <img src={Logo} className="logo" alt="" />
    </div>
  );
};
