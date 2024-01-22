import React from "react";

import Header from "../component/Header/Header";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { chatbotTogle } from "../redux/feature/chatbotSlice";
import ChatbotPage from "../component/Contents/ChatbotPage";

const ChatbotBnt = styled.div`
  color-scheme: light;
  height: 45px;
  width: 45px;
  position: fixed;
  bottom: 35px;
  right: 16px;
  transform: none;
  transform-origin: right bottom;
  border: 0px;
  margin-top: 0px;
  opacity: 1;
  box-shadow: rgba(23, 73, 77, 0.15) 0px 20px 30px;
  animation: 0.2s ease-in 0.5s 1 normal forwards running firstAni,
    0.7s cubic-bezier(0.66, 0, 0.12, 1) 0s 1 normal none running secondAni;
  z-index: 999999;
  border-radius: 50%;
  border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  @keyframes firstAni {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes secondAni {
    0% {
      transform: translateY(0px) rotate(0deg);
    }
    30% {
      transform: translateY(-5px) rotate(2deg);
    }
    60% {
      transform: translateY(0px) rotate(0deg);
    }
    90% {
      transform: translateY(-1px) rotate(0deg);
    }
    100% {
      transform: translateY(0px) rotate(0deg);
    }
  }
`;

const ChatbotBtnBg = styled.button`
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  transition: border-color 0.25s ease-in-out 0s, box-shadow 0.1s ease-in-out 0s,
    background-color 0.25s ease-in-out 0s, color 0.25s ease-in-out 0s;
  margin: 0px;
  border-radius: 4px;
  cursor: pointer;
  overflow: hidden;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: inherit;
  font-weight: 400;
  -webkit-font-smoothing: subpixel-antialiased;
  box-sizing: border-box;
  user-select: none;
  height: 40px;
  line-height: 38px;
  font-size: 14px;
  background-color: transparent;
  border: none;
  padding: 0px;
  width: 40px;
  color: rgb(104, 115, 125);
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
`;

const VisibleFalse = styled.div`
  position: absolute;
  left: 0px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  transition: top 0.5s cubic-bezier(0.66, 0, 0.12, 1) 0s;
  top: ${(props) => (props.chatbotvisible === "false" ? "0px" : "-100px")};
`;

const VisibleTrue = styled.div`
  position: absolute;
  left: 0px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  transition: top 0.5s cubic-bezier(0.66, 0, 0.12, 1) 0s;
  top: ${(props) => (props.chatbotvisible === "true" ? "0px" : "100%")};
  /* top: 100%; */
`;
const Root = () => {
  const dispatch = useDispatch();
  const chatbotvisible = useSelector((state) => state.chatbotReducer.visible);
  console.log("root  | chatbotvisible ===>", chatbotvisible);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <ChatbotBnt onClick={() => dispatch(chatbotTogle())}>
        <ChatbotBtnBg
          type="button"
          shape="circle"
          aria-label="메시징 창 열기"
          className="sc-htpNat sc-1w3tvxe-1 hdJsfE sc-EHOje bsmmQV"
        >
          <VisibleFalse
            aria-hidden="false"
            chatbotvisible={chatbotvisible.toString()}
          >
            <svg
              fill="white"
              position="right"
              className="sc-1k07fow-1 cbnSms"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10,18 L6,22 L6,18 L10,18 Z M17,6 C19.7614237,6 22,8.23857625 22,11 C22,13.7614237 19.7614237,16 17,16 L17,16 L7,16 C4.23857625,16 2,13.7614237 2,11 C2,8.23857625 4.23857625,6 7,6 L7,6 Z"
                transform="translate(12.000000, 14.000000) scale(-1, 1) translate(-12.000000, -14.000000) "
              ></path>
            </svg>
          </VisibleFalse>
          <VisibleTrue
            aria-hidden="true"
            className=""
            chatbotvisible={chatbotvisible.toString()}
          >
            <svg
              fill="white"
              className="sc-1k07fow-0 fVXBLf"
              xmlns="http://www.w3.org/2000/svg"
              width="17px"
              height="12px"
              viewBox="0 0 21 15"
              focusable="false"
              role="presentation"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.1005 2.7169L10.9931 11.8244C10.4724 12.3451 9.62815 12.3451 9.10745 11.8244L-8.00829e-06 2.7169L1.88561 0.831278L10.0503 8.99593L18.2149 0.831278L20.1005 2.7169Z"
              ></path>
            </svg>
          </VisibleTrue>
          {/* )} */}
        </ChatbotBtnBg>
        {/* </div> */}
      </ChatbotBnt>
      <ChatbotPage />
    </>
  );
};

export default Root;
