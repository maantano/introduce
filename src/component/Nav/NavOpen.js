import React, { useState } from "react";
import "./navOpen.css";
import { navi } from "../../redux/feature/currentSlice";
import { useDispatch } from "react-redux";
const NavOpen = () => {
  const tabs = [
    {
      title: "포트폴리오",
      path:
        "m12 4.44 7 6.09V20h-4v-6H9v6H5v-9.47l7-6.09m0-1.32-8 6.96V21h6v-6h4v6h6V10.08l-8-6.96z",
    },
    // {
    //   title: "개인공부",
    //   path:
    //     "M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z",
    // },
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
  const [, setIndex] = useState(0);
  const onClickIndx = (idx) => {
    setIndex(idx);
    dispatch(navi(idx));
  };

  return (
    <div className="left-0 bottom-0 box-border top-0">
      <div id="contentContainer" className="navOpen flex">
        <div className="flex-col navSection mt-2">
          {tabs.map((item, idx) => {
            return (
              <div
                className="flex px-4 menu-item"
                key={idx}
                onClick={() => onClickIndx(idx)}
              >
                <div className="mr-5 icon">
                  <div style={{ width: "24px", height: "18px", fill: "white" }}>
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
                      <path d={item.path}></path>
                    </svg>
                  </div>
                </div>
                <div className="title">{item.title}</div>
              </div>
            );
          })}

          <div className="navOpen-mine">
            <div className="border"></div>
            <div className="px-4 flex">
              <div className="navOpen-div">나</div>
              <div className="navOpen-icon">
                <div style={{ width: "14px", height: "14px", fill: "white" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 16 16"
                    width="16"
                    focusable="false"
                    style={{
                      pointerEvents: "none",
                      display: "block",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <path d="M4.97 12.65 9.62 8 4.97 3.35l.71-.71L11.03 8l-5.35 5.35-.71-.7z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex px-4">
              <div className="mr-5 icon">
                <div style={{ width: "24px", height: "18px", fill: "white" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    focusable="false"
                    style={{
                      pointerEvents: "none",
                      display: "block",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <path d="M3,3v18h18V3H3z M4.99,20c0.39-2.62,2.38-5.1,7.01-5.1s6.62,2.48,7.01,5.1H4.99z M9,10c0-1.65,1.35-3,3-3s3,1.35,3,3 c0,1.65-1.35,3-3,3S9,11.65,9,10z M12.72,13.93C14.58,13.59,16,11.96,16,10c0-2.21-1.79-4-4-4c-2.21,0-4,1.79-4,4 c0,1.96,1.42,3.59,3.28,3.93c-4.42,0.25-6.84,2.8-7.28,6V4h16v15.93C19.56,16.73,17.14,14.18,12.72,13.93z"></path>
                  </svg>
                </div>
              </div>
              <div className="title">민경언</div>
            </div>
            <div className="flex px-4">
              <div className="mr-5 icon">
                <div style={{ width: "24px", height: "18px", fill: "white" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    style={{
                      pointerEvents: "none",
                      display: "block",
                      width: "100%",
                      height: "100%",
                    }}
                    viewBox="0 0 24 24"
                    width="24"
                    focusable="false"
                  >
                    <g>
                      <path d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM22 12c0 5.51-4.49 10-10 10S2 17.51 2 12h1c0 4.96 4.04 9 9 9s9-4.04 9-9-4.04-9-9-9C8.81 3 5.92 4.64 4.28 7.38c-.11.18-.22.37-.31.56L3.94 8H8v1H1.96V3h1v4.74c.04-.09.07-.17.11-.25.11-.22.23-.42.35-.63C5.22 3.86 8.51 2 12 2c5.51 0 10 4.49 10 10z"></path>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="title">1993.12.31</div>
            </div>
            <div className="flex px-4">
              <div className="mr-5 icon">
                <div style={{ width: "24px", height: "18px", fill: "white" }}>
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
                    <path d="m10 8 6 4-6 4V8zm11-5v18H3V3h18zm-1 1H4v16h16V4z"></path>
                  </svg>
                </div>
              </div>
              <div className="title">컴퓨터공학과 졸업</div>
            </div>

            <div className="flex px-4">
              <div className="mr-5 icon">
                <div style={{ width: "24px", height: "18px", fill: "white" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
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
                    <path d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM12 3c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"></path>
                  </svg>
                </div>
              </div>
              <div className="title">자격증 3개 취득 </div>
            </div>

            <div className="flex px-4">
              <div className="mr-5 icon">
                <div style={{ width: "24px", height: "18px", fill: "white" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
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
                    <path d="M17 18v1H6v-1h11zm-.5-6.6-.7-.7-3.8 3.7V4h-1v10.4l-3.8-3.8-.7.7 5 5 5-4.9z"></path>
                  </svg>
                </div>
              </div>
              <div className="title">일상 회화 가능(영어)</div>
            </div>
            <div className="flex px-4">
              <div className="mr-5 icon">
                <div style={{ width: "24px", height: "18px", fill: "white" }}>
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
                    <path d="M8 7c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1zm-1 9c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm3.79-7.77L21 18.44V20h-3.27l-5.76-5.76-1.27 1.27c.19.46.3.96.3 1.49 0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4c.42 0 .81.08 1.19.2l1.37-1.37-1.11-1.11C8 10.89 7.51 11 7 11c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4c0 .43-.09.84-.21 1.23zm-.71.71-.43-.44.19-.58c.11-.34.16-.64.16-.92 0-1.65-1.35-3-3-3S4 5.35 4 7s1.35 3 3 3c.36 0 .73-.07 1.09-.21l.61-.24.46.46 1.11 1.11.71.71-.71.71-1.37 1.37-.43.43-.58-.18C7.55 14.05 7.27 14 7 14c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3c0-.38-.07-.75-.22-1.12l-.25-.61.47-.47 1.27-1.27.71-.71.71.71L18.15 19H20v-.15l-9.92-9.91zM17.73 4H21v1.56l-5.52 5.52-2.41-2.41L17.73 4zm.42 1-3.67 3.67 1 1L20 5.15V5h-1.85z"></path>
                  </svg>
                </div>
              </div>
              <div className="title">병역 만기 전역</div>
            </div>
            <div className="border"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavOpen;
