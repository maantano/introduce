import React, { useState } from "react";
import "./Portfolio.css";

import demo from "../../asset/maantanoTicker/demo.gif";

import styled from "styled-components";
import { wrap } from "popmotion";
import { AnimatePresence, motion } from "framer-motion";

const images = [demo];

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
  height: 700px;
`;

const Box = styled(motion.img)`
  position: absolute;
  width: 800px;
  height: auto;
  max-height: 700px;
  object-fit: contain;

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
const ImageTitle = ["Maantano Ticker - 실시간 주식 시세 메뉴바 앱 데모"];

const MaantanoTicker = () => {
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
      {/* Header Section */}
      <section className="w-full h-[300px] relative bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl font-bold text-black mb-4 tracking-wider">
            Maantano Ticker
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className="container mx-auto px-4 pt-16 pb-12">
        <div className="flex items-center pb-6">
          <div className="h-2 rounded-sm bg-white w-20"></div>
          <div className="h-[1px] rounded-sm bg-white w-full"></div>
        </div>

        <div className="p-2">
          <div className="text-3xl font-bold mb-4">
            Maantano Ticker - macOS 메뉴바 실시간 주식 시세 앱
          </div>
          <div className="grid grid-cols-2 gap-4 p-2">
            <div className="flex items-center">
              <div className="flex justify-center items-center text-2xl bg-gray-300 bg-opacity-20 rounded-md text-center w-1/4 p-[7px]">
                기간
              </div>
              <p className="flex items-center text-2xl ml-3 w-4/5">
                2024~현재 (v1.4.0)
              </p>
            </div>
            <div className="flex">
              <div className="flex justify-center items-center text-2xl bg-gray-300 bg-opacity-20 rounded-md text-center w-1/4 p-[7px]">
                담당 파트
              </div>
              <p className="flex items-center ml-3 text-2xl w-4/5">
                풀스택 개발 (Electron + Node.js)
              </p>
            </div>
            <div className="flex">
              <div className="flex justify-center items-center text-2xl bg-gray-300 bg-opacity-20 rounded-md text-center w-1/4 p-[7px]">
                현황
              </div>
              <p className="flex items-center text-2xl ml-3 w-4/5">
                Homebrew 배포중
              </p>
            </div>
            <div className="flex">
              <div className="flex justify-center items-center text-2xl bg-gray-300 bg-opacity-20 rounded-md text-center w-1/4 p-[7px]">
                참가인원
              </div>
              <p className="ml-3 flex items-center text-2xl w-4/5">
                1명 (개인)
              </p>
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
                Electron, JavaScript, Node.js, CSS3
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Introduction */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center pb-6">
          <div className="h-2 rounded-sm bg-white w-56"></div>
          <div className="h-[1px] rounded-sm bg-white w-full"></div>
        </div>
        <div className="p-2">
          <h2 className="text-3xl font-bold mb-4">프로젝트 소개</h2>
          <div className="p-2">
            <div className="text-lg">
              <div className="inline-block font-bold mb-4 p-3 bg-blue-700 rounded-lg">
                macOS 메뉴바에서 한국 및 미국 주식 실시간 시세를 확인하는 경량
                데스크톱 앱
              </div>
              <br />
              네이버 증권 API와 Yahoo Finance API를 활용하여 한국(KOSPI/KOSDAQ)
              및 미국(NASDAQ/NYSE/AMEX) 주식을 모두 지원합니다. 5초 간격 자동
              시세 갱신, 메뉴바 텍스트 색상 커스터마이징, 종목 드래그 앤 드롭
              정렬, 스마트 자동완성 검색 등 편리한 기능을 제공하며, Homebrew를
              통해 간편하게 설치할 수 있습니다.
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center pb-6">
          <div className="h-2 rounded-sm bg-white w-40"></div>
          <div className="h-[1px] rounded-sm bg-white w-full"></div>
        </div>
        <div className="p-2 text-lg">
          <h2 className="text-3xl font-bold mb-4">주요 기능</h2>
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">
                다중 시장 실시간 시세
              </h3>
              <p className="text-xl mb-4">
                한국과 미국 주식 시장의{" "}
                <strong>실시간 시세를 동시에 조회</strong>합니다.
              </p>
              <ul className="text-lg space-y-2 ml-4">
                <li>• 한국: 네이버 증권 API (KOSPI/KOSDAQ 4,000+ 종목)</li>
                <li>• 미국: Yahoo Finance API (NASDAQ/NYSE/AMEX 100+ 종목)</li>
                <li>• 5초 간격 자동 시세 갱신</li>
                <li>
                  • 정규장/시간외 거래 시간 지원 (한국 09:00-15:30, 미국
                  09:30-16:00 EST)
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-indigo-400">
                macOS 메뉴바 통합
              </h3>
              <p className="text-xl mb-4">
                메뉴바에 <strong>현재가와 등락률을 실시간 표시</strong>합니다.
              </p>
              <ul className="text-lg space-y-2 ml-4">
                <li>• 첫 번째 종목의 현재가, 등락률 메뉴바 표시</li>
                <li>• 10가지 텍스트 색상 커스터마이징</li>
                <li>• 4가지 텍스트 크기 옵션 (Tiny~Large)</li>
              </ul>
            </div>

            <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">
                종목 관리 & 검색
              </h3>
              <p className="text-xl mb-4">
                편리한 <strong>종목 관리와 스마트 검색</strong> 기능을
                제공합니다.
              </p>
              <ul className="text-lg space-y-2 ml-4">
                <li>• 종목명/코드 자동완성 검색</li>
                <li>• 드래그 앤 드롭으로 종목 순서 변경</li>
                <li>• 다중 종목 동시 추적 및 관리</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Image Slider */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center pb-6">
          <div className="h-2 rounded-sm bg-white w-40"></div>
          <div className="h-[1px] rounded-sm bg-white w-full"></div>
        </div>
        <div className="p-2 ">
          <div className="text-white text-2xl mb-10 ">
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
          <div className="flex items-center justify-center p-20">
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

      {/* Tech Stack & Achievements */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center pb-6">
          <div className="h-2 rounded-sm bg-white w-20"></div>
          <div className="h-[1px] rounded-sm bg-white w-full"></div>
        </div>

        <div className="p-2">
          <h2 className="text-3xl font-bold mb-4">기술 스택</h2>
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">
                Frontend
              </h3>
              <ul className="text-lg space-y-2 ml-4">
                <li>• Electron 28.x - 데스크톱 앱 프레임워크</li>
                <li>• Vanilla JavaScript - UI 로직</li>
                <li>• CSS3 - 스타일링</li>
              </ul>
            </div>
            <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-indigo-400">
                Backend & Tools
              </h3>
              <ul className="text-lg space-y-2 ml-4">
                <li>• Node.js - 런타임</li>
                <li>• axios, cheerio - HTTP / HTML 파싱</li>
                <li>• canvas - 메뉴바 아이콘 렌더링</li>
                <li>• electron-store - 로컬 데이터 저장</li>
                <li>• electron-builder - 앱 빌드 및 패키징</li>
                <li>• GitHub Actions - CI/CD 자동화</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-4 mt-12">배포 및 설치</h2>
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg mb-8">
            <h3 className="text-2xl font-bold mb-4 text-orange-400">
              Homebrew로 설치
            </h3>
            <pre className="text-base bg-black bg-opacity-50 p-4 rounded-lg overflow-x-auto">
              {`# 설치
brew install --cask --no-quarantine maantano/maantano/maantano-ticker

# 업그레이드
brew upgrade --cask maantano-ticker

# 삭제
brew uninstall --cask maantano-ticker`}
            </pre>
          </div>

          <div className="flex flex-col">
            <p className="text-lg mb-4">GitHub</p>
            <a
              className="p-4 text-blue-400 hover:text-blue-300"
              href="https://github.com/maantano/maantano-ticker"
              target="_blank"
              rel="noreferrer"
            >
              - https://github.com/maantano/maantano-ticker
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MaantanoTicker;
