import React, { useState } from "react";

import "./nav.css";
import { useDispatch } from "react-redux";
import { navi } from "../../redux/feature/currentSlice";
const Nav = () => {
  const tabs = [
    {
      title: "포트폴리오",
      path:
        "m12 4.44 7 6.09V20h-4v-6H9v6H5v-9.47l7-6.09m0-1.32-8 6.96V21h6v-6h4v6h6V10.08l-8-6.96z",
    },
    {
      title: "개인공부",
      path:
        "M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z",
    },
    {
      title: "인생 그래프",
      path:
        "M10 9.35 15 12l-5 2.65zM12 7a5 5 0 105 5 5 5 0 00-5-5m0-1a6 6 0 11-6 6 6 6 0 016-6zm0-3a9 9 0 109 9 9 9 0 00-9-9m0-1A10 10 0 112 12 10 10 0 0112 2z",
    },
    {
      title: "경력 한눈에 보기",
      path:
        "M17 18v1H6v-1h11zm-.5-6.6-.7-.7-3.8 3.7V4h-1v10.4l-3.8-3.8-.7.7 5 5 5-4.9z",
    },
  ];
  const dispatch = useDispatch();
  const [selectedIndex, setIndex] = useState(0);
  const onClickIndx = (idx) => {
    setIndex(idx);
    dispatch(navi(idx));
  };
  return (
    <div className="left-0 bottom-0 top-14 box-border mt-14">
      <div className="nav-bar">
        {tabs.map((item, idx) => {
          return (
            <div
              className="nav-items"
              key={idx}
              onClick={() => onClickIndx(idx)}
            >
              <div className="item">
                <a>
                  <div className="icon">
                    <div className="icon-box">
                      <div
                        style={{ width: "24px", height: "18px", fill: "white" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          enableBackground="new 0 0 24 24"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          focusable="false"
                          style={{
                            pointerEvents: "none",
                            display: "block",
                            width: "100%",
                            height: "100%",
                          }}
                        >
                          <g>
                            <path d={item.path}></path>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <span className="title ">{item.title}</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Nav;
