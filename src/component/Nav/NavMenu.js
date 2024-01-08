import React from "react";
import { useSelector } from "react-redux";

import Nav from "./Nav";
import NavOpen from "./NavOpen";
const NavMenu = () => {
  const naviStatus = useSelector((state) => state.naviReducer.value);
  return <div>{naviStatus ? <Nav /> : <NavOpen />}</div>;
};

export default NavMenu;
