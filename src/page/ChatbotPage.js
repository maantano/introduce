import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import config from "../component/Chatbot/config";
import MessageParser from "../component/Chatbot/MessageParse";
import ActionProvider from "../component/Chatbot/ActionProvider";

import "react-chatbot-kit/build/main.css";
import "../component/Chatbot/chatbot.css";
import "remixicon/fonts/remixicon.css";
import { useDispatch, useSelector } from "react-redux";
import { chatbotTogle } from "../redux/feature/chatbotSlice";
import styled from "styled-components";

const ChatbotDiv = styled.div`
  position: fixed;
  box-shadow: rgba(23, 73, 77, 0.15) 0px 20px 30px;
  z-index: 999999;
  border-radius: 20px;
  transform-origin: center bottom;
  border: 0px;
  height: ${(props) => (props.chatbotvisible === "true" ? "700px" : "0px")};
  max-height: calc(100vh - 138px);
  inset: auto 16px 122px auto;
  width: 380px;
  transition: ${(props) =>
    props.chatbotvisible
      ? "transform 400ms cubic-bezier(0.76, 0, 0.16, 1) 0ms, opacity 380ms cubic-bezier(0.76, 0, 0.16, 1) 20ms, height 0ms linear 0ms"
      : "transform 400ms cubic-bezier(0.66, 0, 0.1, 1) 0ms, opacity 200ms cubic-bezier(0.66, 0, 0.1, 1) 200ms, height 0ms linear 400ms"};
  opacity: ${(props) => (props.chatbotvisible === "true" ? 1 : 0)};
  pointer-events: ${(props) =>
    props.chatbotvisible === "true" ? "auto" : "none"};
`;

// const ChatbotDiv = styled.div`
//   position: fixed;
//   box-shadow: rgba(23, 73, 77, 0.15) 0px 20px 30px;
//   z-index: 999999;
//   border-radius: 20px;
//   transform-origin: center bottom;
//   border: 0px;
//   height: ${(props) => (props.chatbotvisible === "true" ? "700px" : "0px")};
//   max-height: calc(100vh - 138px);
//   inset: auto 16px 122px auto;
//   width: 380px;
// transition: ${(props) =>
//   props.chatbotvisible
//     ? "transform 400ms cubic-bezier(0.76, 0, 0.16, 1) 0ms, opacity 380ms cubic-bezier(0.76, 0, 0.16, 1) 20ms, height 0ms linear 0ms"
//     : "transform 400ms cubic-bezier(0.66, 0, 0.1, 1) 0ms, opacity 200ms cubic-bezier(0.66, 0, 0.1, 1) 200ms, height 0ms linear 400ms"};
// transform: ${(props) =>
//   props.chatbotvisible
//     ? "scale(1) translateY(640px)"
//     : "scale(1) translateY(0px)"};
//   opacity: ${(props) => (props.chatbotvisible === "true" ? 1 : 0)};
//   pointer-events: ${(props) =>
//     props.chatbotvisible === "true" ? "auto" : " none"};
// `;

const ChatbotPage = () => {
  const chatbotvisible = useSelector((state) => state.chatbotReducer.visible);
  console.log("ChatbotPage  | chatbotvisible ===>", chatbotvisible);
  return (
    <div className="m-24 ">
      <ChatbotDiv chatbotvisible={chatbotvisible.toString()}>
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </ChatbotDiv>
    </div>
  );
};

export default ChatbotPage;
