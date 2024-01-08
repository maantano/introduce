import React from "react";
import "./header.css";

import Left from "./Left";
import Center from "./Center";
import Right from "./Right";

const Header = () => {
  return (
    <div className="header-container flex justify-between">
      <Left />
      <Center />
      <Right />
    </div>
  );
};

export default Header;
