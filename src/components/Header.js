import React from "react";
import Logo from "../assets/OIP.jpg";
import "./header.css";

export const Header = () => {
  return (
    <div>
      <img src={Logo} className="logo" alt="" />
    </div>
  );
};
