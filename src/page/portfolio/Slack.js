import React, { useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import "./Portfolio.css";

import scroll from "../../asset/slack/scroll.png";
import infinite from "../../asset/slack/useSWRInfinite.png";
import scrollUi from "../../asset/slack/scrollbarUi.png";
import babel2 from "../../asset/slack/babel1.png";
import babel3 from "../../asset/slack/babel2.png";
import babel1 from "../../asset/slack/babel3.png";
import { wrap } from "popmotion";
import slackChat1 from "../../asset/slack/slackChat.png";
import slackChat2 from "../../asset/slack/slackChat2.png";
import slackLogin from "../../asset/slack/slackLogin.png";
import slackJoin from "../../asset/slack/slackJoin.png";

const Wrapper = styled(motion.div)`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const SlideWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 500px;
`;
const images = [slackLogin, slackJoin, slackChat1, slackChat2];

const Box = styled(motion.img)`
  position: absolute;
  width: 70%;
  object-fit: cover;

  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background-color: transparent;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const Box2 = styled(motion.div)`
  margin-bottom: 160px;
  position: absolute;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background-color: transparent;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const PrevNextBtn = styled.div`
  background-color: #212121;
  border-radius: 24px;
  box-shadow: 0 4px 4px rgba(255, 255, 255, 0.2),
    0 0 8px rgba(255, 255, 255, 0.2);
  color: #fff;
  cursor: pointer;
  height: 30px;
  width: 30px;
  z-index: 999;
`;

const boxVariants = {
  entry: (back) => ({
    x: back ? -300 : 300,
    opacity: 0,
    scale: 0,
  }),
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.5 },
  },
  exit: (back) => ({
    x: back ? 300 : -300,
    opacity: 0,
    scale: 0,
    transition: { duration: 0.5 },
  }),
};
const boxVariants2 = {
  entry: (back) => ({
    x: back ? -150 : 200,
    opacity: 0,
    scale: 0,
  }),
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.5 },
  },
  exit: (back) => ({
    x: back ? 150 : -200,
    opacity: 0,
    scale: 0,
    transition: { duration: 0.5 },
  }),
};
const ImageTitle = ["로그인", "회원가입", "다이렉트 메시지", "채널"];

const Slack = () => {
  const [visible, setVisible] = useState(0);
  const imageIndex = wrap(0, images.length, visible);
  const [back, setBack] = useState(false);
  const nextPlease = () => {
    setBack(false);
    setVisible((prev) =>
      prev === images.length - 1 ? images.length - 1 : prev + 1
    );
  };
  const prevPlease = () => {
    setBack(true);
    setVisible((prev) => (prev === 0 ? 0 : prev - 1));
  };

  return (
    <div className="mt-24 bg-black text-white flex flex-col justify-center items-center">
      <section className="w-full h-[300px] relative bg-white">
        <div className="font-bold text-black text-4xl flex h-full justify-center items-center">
          <p>Slack</p>
        </div>
      </section>

      <section className="container mx-auto px-4 pt-16 pb-12 ">
        <div className="h-20 w-56">
          <div className="font-bold text-white text-3xl h-full flex justify-start items-center pl-4">
            <p>Slack</p>
          </div>
        </div>
        <div className="flex items-center pb-6">
          <div className="h-2 rounded-sm bg-white w-20"></div>
          <div className="h-[1px] rounded-sm bg-white w-full"></div>
        </div>

        <div className="p-2">
          <div className=" text-3xl font-bold mb-4">실시간 메신저 프로젝트</div>
          <div className="grid grid-cols-2 gap-4 p-2">
            <div className="flex items-center">
              <div className="flex justify-center items-center text-2xl bg-gray-300 bg-opacity-20 rounded-md text-center w-1/4 p-[7px]">
                기간
              </div>
              <p className="flex items-center text-2xl ml-3 w-4/5">
                2024.03.28~2024.03.30
              </p>
            </div>
            <div className="flex">
              <div className="flex justify-center items-center text-2xl bg-gray-300 bg-opacity-20 rounded-md text-center w-1/4 p-[7px]">
                담당 파트
              </div>
              <p className="flex items-center ml-3 text-2xl w-4/5">
                Front 개발 및 번들링
              </p>
            </div>
            <div className="flex">
              <div className="flex justify-center items-center text-2xl bg-gray-300 bg-opacity-20 rounded-md text-center w-1/4 p-[7px]">
                현황
              </div>
              <p className="flex items-center text-2xl ml-3 w-4/5">개발 완료</p>
            </div>
            <div className="flex">
              <div className="flex justify-center items-center text-2xl bg-gray-300 bg-opacity-20 rounded-md text-center w-1/4 p-[7px]">
                참가인원
              </div>
              <p className="ml-3 flex items-center text-2xl w-4/5">민경언</p>
            </div>
            <div className="flex">
              <div className="flex justify-center items-center text-2xl bg-gray-300 bg-opacity-20 rounded-md text-center w-1/4 p-[7px]">
                기여도
              </div>
              <p className="flex items-center text-2xl ml-3 w-4/5">100%</p>
            </div>
            <div className="flex">
              <div className="flex justify-center items-center text-2xl bg-gray-300 bg-opacity-20 rounded-md text-center w-1/4 p-[7px]">
                개발 환경
              </div>
              <p className="flex items-center text-2xl ml-3 w-4/5">
                react, javascript, tyepscript, babel, webpack, swr, sass,
                styled-components, socket,
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center pb-6">
          <div className="h-2 rounded-sm bg-white w-56"></div>
          <div className="h-[1px] rounded-sm bg-white w-full"></div>
        </div>
        <div className="p-2">
          <h2 className="text-3xl font-bold mb-4">프로젝트 소개</h2>
          <div className="p-2">
            <div className="text-lg">
              <div className="inline-block font-bold mb-4 p-3 bg-red-600 rounded-lg">
                웹소켓을 이용하여 실시간 통신이 가능한 메신저 프로젝트를
                진행했습니다.
              </div>
              <br />
              다양한 라이브러리 사용과 babel, webpack 설정을 진행하여
              빌드하였습니다.
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center pb-6">
          <div className="h-2 rounded-sm bg-white w-40"></div>
          <div className="h-[1px] rounded-sm bg-white w-full"></div>
        </div>
        <div className="p-2 text-lg">
          <h2 className="text-3xl font-bold mb-4">주요 업무 요약</h2>
          {/* <div className="grid grid-cols-2 gap-4"> */}
          <div className="">
            <div className="p-2">
              <p className="text-2xl">라이브러리</p>
              <ul className="p-3">
                <li className="py-1">
                  1. build
                  <div className="pl-10">
                    <p>
                      {" "}
                      - webpack, webpack-dev-server, babel-loader, css-loader,
                      style-loader @babel/core, @babel/preset-env, 그 외 types
                    </p>
                    <div className="grid grid-cols-3 gap-4 h-[400px]">
                      <img
                        className="object-contain h-full"
                        src={babel1}
                        alt="babel1"
                      />
                      <img
                        className="object-contain h-full"
                        src={babel2}
                        alt="babel2"
                      />
                      <img
                        className="object-contain h-full"
                        src={babel3}
                        alt="babel3"
                      />
                    </div>
                  </div>
                </li>
                <li className="py-1">
                  2. 상태관리
                  <div className="pl-10">
                    <p> - swr</p>
                    <p> - redux를 대체할 수 있는 상태관리 라이브러리</p>
                  </div>
                </li>
                <li className="py-1">
                  3. Scroll
                  <div className="pl-10">
                    <p>
                      {" "}
                      - react-custom-scrollbars : InfiniteSWR, Scroll UI, Scoll
                      callback{" "}
                    </p>
                    <div className="grid grid-cols-3 gap-4 h-[200px]">
                      <img
                        className="object-contain h-full"
                        src={scroll}
                        alt="scroll"
                      />
                      <img
                        className="object-contain h-full"
                        src={infinite}
                        alt="infinite"
                      />
                      <img
                        className="object-contain h-full"
                        src={scrollUi}
                        alt="scrollUi"
                      />
                    </div>
                    <p> - redux를 대체할 수 있는 상태관리 라이브러리</p>
                  </div>
                </li>
                <li className="py-1">
                  4. 그외
                  <div className="pl-10">
                    <p> - react-toastify : 에러 toast 표시 </p>
                    <p> - socket.io-client : 소켓 통신 을 위한 라이브러리</p>
                    <p> - gravatar : git 계정 형태의 고유 이미지 생성</p>
                    <p>
                      {" "}
                      - dayjs : Moment.js와 호환가능한 더 경량화 된 날짜
                      formating 라이브러리
                    </p>
                    <p> - regexify-string : 정규표현식 지원 라이브러리</p>
                    <p> - eslint & prettier : 컨벤션 설정</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 ">
        <div className="p-2">
          <section className="container mx-auto px-4 py-12">
            <div className="flex items-center pb-6">
              <div className="h-2 rounded-sm bg-white w-40"></div>
              <div className="h-[1px] rounded-sm bg-white w-full"></div>
            </div>
            <div className="p-2 flex flex-col mb-36">
              <div className="text-white text-2xl mb-20 ">
                <Box2
                  custom={back}
                  variants={boxVariants2}
                  initial="entry"
                  animate="center"
                  exit="exit"
                  key={visible}
                >
                  {ImageTitle[imageIndex]}
                </Box2>
              </div>
              <div className="flex items-center justify-center mt-20">
                <Wrapper>
                  <PrevNextBtn
                    onClick={prevPlease}
                    className="flex flex-col items-center justify-center "
                  >
                    <div
                      style={{
                        width: "24px",
                        height: "24px",
                        fill: "currentcolor",
                      }}
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
                        <path d="M14.96 18.96 8 12l6.96-6.96.71.71L9.41 12l6.25 6.25-.7.71z"></path>
                      </svg>
                    </div>
                  </PrevNextBtn>

                  <SlideWrap>
                    <AnimatePresence custom={back}>
                      <Box
                        custom={back}
                        variants={boxVariants}
                        src={images[imageIndex]}
                        initial="entry"
                        animate="center"
                        exit="exit"
                        key={visible}
                      />
                    </AnimatePresence>
                  </SlideWrap>
                  <PrevNextBtn
                    onClick={nextPlease}
                    className="flex flex-col items-center justify-center "
                  >
                    <div
                      style={{
                        width: "24px",
                        height: "24px",
                        fill: "currentcolor",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 0 24 24"
                        width="20"
                        focusable="false"
                        style={{
                          pointerEvents: "none",
                          display: "block",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <path d="m9.4 18.4-.7-.7 5.6-5.6-5.7-5.7.7-.7 6.4 6.4-6.3 6.3z"></path>
                      </svg>
                    </div>
                  </PrevNextBtn>
                </Wrapper>
              </div>
            </div>
          </section>
        </div>
      </section>
      <section className="container mx-auto px-4 py-12 ">
        <div className="flex items-center pb-6">
          <div className="h-2 rounded-sm bg-white w-20"></div>
          <div className="h-[1px] rounded-sm bg-white w-full"></div>
        </div>
        <div className="p-2">
          <div>
            <h2 className="text-3xl font-bold mb-4">회고</h2>
            <p className="text-2xl mt-10">1. webpack 빌드</p>
            <p className="text-xl mt-4 mb-8">
              <br />
              webpack 설정을 직접 진행해보고 번들을 만들어 봤습니다. CRA를
              사용할때보다 경량화된 번들을 만들수 있었습니다. next js 에서 full
              stack 프로젝트를 지원하지만 백엔드 빌드시 프론트엔드 소스도 함께
              빌드된다는 점을 추가적으로 알게되었습니다.
            </p>
            <p className="text-2xl mt-10">2. 웹 소캣 통신</p>
            <p className="text-xl mt-4 mb-8">
              <br />
              웹소켓 관련 라이브러리를 사용해보고, 소캣 통신에 대한 학습을 진행
              할 수 있었습니다. on, emit, disconnect 과 함께 특정 키를 통해
              url로 소켓 연결을 설정하는 방법을 학습했습니다.
            </p>
            <p className="text-2xl mt-10">3. 다양한 라이브러리 사용</p>
            <p className="text-xl mt-4 mb-8">
              <br />
              gravatar, scroll, toast, 같이 처음 사용해보는 라이브러리를 경험할
              수 있었습니다. 웹에서 다양한 인피니티 스크롤 사용 케이스를
              경험했습니다.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Slack;
