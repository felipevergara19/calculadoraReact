import React from "react";
import logoImage from "../Images/Felipe Vergara-logos_black_short.png";
import '../stylesheet/Logo.css'

const Logo = () => {
  return (
  <div className="logo-contenedor">
    <img src={logoImage} className="logoImage" alt=" Mi Logo" />
  </div>
  );
};

export default Logo;
