import React from "react";
import styled from "styled-components";
import Spinner from "./Spinner.gif";

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 100px;
  left: 0;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoadingText = styled.div`
  font: 1rem "Noto Sans KR";
  text-align: center;
`;

const Loading = () => {
  return (
    <div className={`flex max-w-[1200px] w-[1200px] flex-wrap`}>
      <Background>
        <LoadingText>잠시만 기다려 주세요.</LoadingText>
         <img src={Spinner} alt="로딩중" width="5%" />
      </Background>
    </div>
  );
};

export default Loading;
