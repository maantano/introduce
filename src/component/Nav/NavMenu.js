import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { throttle } from "lodash"; // lodash의 throttle 함수 사용
import Nav from "./Nav";
import NavOpen from "./NavOpen";
const NavMenu = () => {
  const naviStatus = useSelector((state) => state.naviReducer.value);
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = throttle(() => {
    console.log("call handleResize !!");
    setWidth(window.innerWidth);
  }, 500);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleResize]);
  return (
    <div className="bg-black">
      {naviStatus || width < 810 ? <Nav /> : <NavOpen />}
    </div>
  );
};

export default NavMenu;
