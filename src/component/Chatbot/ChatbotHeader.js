import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { chatbotReset } from "../../redux/feature/chatbotSlice";

const HeaderContainer = styled.div`
  background-color: white;
  border-bottom: 1px solid #cac7c7;

  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  .ri-close-line,
  .ri-arrow-left-s-line {
    font-size: 1.5rem;
    color: #979797;
  }
`;
const ChatbotHeaderTitle = styled.div`
  color: black;
  font-size: 1.125rem;
  line-height: 1.5rem;
  font-weight: 600;
  letter-spacing: -0.028125rem;
`;
const ChatbotHeaderSubTitle = styled.div`
  color: black;
  font-size: 0.875rem;
  line-height: 1.25rem;
  letter-spacing: -0.009375rem;
`;

const ChatbotHeader = () => {
  const dispatch = useDispatch();
  return (
    <HeaderContainer>
      <div className="flex flex-col">
        <ChatbotHeaderTitle>챗봇과 대화하기 </ChatbotHeaderTitle>
        <ChatbotHeaderSubTitle>
          💬챗봇을 통해 문의를 해결해보세요!
        </ChatbotHeaderSubTitle>
      </div>
      <i className="ri-close-line" onClick={() => dispatch(chatbotReset())} />
    </HeaderContainer>
  );
};

export default ChatbotHeader;
