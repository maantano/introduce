import React from "react";
import { toggle } from "../../redux/feature/navSlice";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

const Left = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="headerContainer">
        <div className="start">
          <div className="navigationBtn">
            <button
              onClick={() => {
                dispatch(toggle());
              }}
            >
              <div
                className="fill-slate-300"
                style={{ width: "20px", height: "18px" }}
              >
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
                  <path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"></path>
                </svg>
              </div>
            </button>
          </div>
          <NavLink className="flex items-center" to={"/"}>
            <div className="logo-container">
              <div style={{ width: "100%", height: "100%" }}>
                <div className="logo">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="external-icon"
                    viewBox="0 0 97 20"
                    style={{
                      width: "100%",
                      pointerEvents: "none",
                      display: "block",
                      height: "100%",
                      fill: "white",
                    }}
                    focusable="false"
                  >
                    <svg
                      viewBox="0 0 97 20"
                      preserveAspectRatio="xMidYMid meet"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path
                          d="M27.9704 3.12324C27.6411 1.89323 26.6745 0.926623 25.4445 0.597366C23.2173 2.24288e-07 14.2827 0 14.2827 0C14.2827 0 5.34807 2.24288e-07 3.12088 0.597366C1.89323 0.926623 0.924271 1.89323 0.595014 3.12324C-2.8036e-07 5.35042 0 10 0 10C0 10 -1.57002e-06 14.6496 0.597364 16.8768C0.926621 18.1068 1.89323 19.0734 3.12324 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6769 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9704 3.12324Z"
                          fill="#FF0000"
                        ></path>
                        <path
                          d="M11.4275 14.2854L18.8475 10.0004L11.4275 5.71533V14.2854Z"
                          fill="white"
                        ></path>
                      </g>
                    </svg>
                  </svg>
                </div>
              </div>
            </div>
            <span className="text-white ml-[-60px] mt-1">HOME</span>
            {/* <span className="text-white">HOME</span> */}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Left;
