import React, { useState } from "react";
import "./Portfolio.css";

import shapeReview1 from "../../asset/shapeReview/shapeReview1.png";
import shapeReview2 from "../../asset/shapeReview/shapeReview2.png";
import shapeReview3 from "../../asset/shapeReview/shapeReview3.png";
import shapeReviewLogo from "../../asset/shapeReview/shapeReviewLogo.png";

import styled from "styled-components";
import { wrap } from "popmotion";
import { AnimatePresence, motion } from "framer-motion";

const images = [shapeReview1, shapeReview2, shapeReview3];

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

const ImageTitle = [
  "Shape Review - 이벤트 타입별 ECG FORM 그룹",
  "Shape Review - ECG 비트 데이터 편집",
  "Shape Review - ECG 파형 별 편집",
];

const ShapeReview = () => {
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
      <section className="w-full h-[300px] relative bg-gradient-to-r from-blue-50 to-green-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl font-bold text-blue-600 mb-4 tracking-wider">
            HUINNO
          </div>
          <div className="text-xl text-gray-600">
            AI-based Medical Data Analysis Platform
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pt-16 pb-12">
        <div className="h-20 w-56">
          <img src={shapeReviewLogo} alt="Shape Review Logo" />
        </div>
        <div className="flex items-center pb-6">
          <div className="h-2 rounded-sm bg-white w-20"></div>
          <div className="h-[1px] rounded-sm bg-white w-full"></div>
        </div>

        <div className="p-2">
          <div className="text-3xl font-bold mb-4">
            Shape Review - AI 기반 ECG 이벤트 형태 분류 및 편집 도구
          </div>
          <div className="grid grid-cols-2 gap-4 p-2">
            <div className="flex items-center">
              <div className="flex justify-center items-center text-2xl bg-gray-300 bg-opacity-20 rounded-md text-center w-1/4 p-[7px]">
                기간
              </div>
              <p className="flex items-center text-2xl ml-3 w-4/5">
                2024.05~현재
              </p>
            </div>
            <div className="flex">
              <div className="flex justify-center items-center text-2xl bg-gray-300 bg-opacity-20 rounded-md text-center w-1/4 p-[7px]">
                담당 파트
              </div>
              <p className="flex items-center ml-3 text-2xl w-4/5">
                프론트엔드 개발 (Shape Review 전체)
              </p>
            </div>
            <div className="flex">
              <div className="flex justify-center items-center text-2xl bg-gray-300 bg-opacity-20 rounded-md text-center w-1/4 p-[7px]">
                현황
              </div>
              <p className="flex items-center text-2xl ml-3 w-4/5">
                서비스 운영중
              </p>
            </div>
            <div className="flex">
              <div className="flex justify-center items-center text-2xl bg-gray-300 bg-opacity-20 rounded-md text-center w-1/4 p-[7px]">
                회사
              </div>
              <p className="ml-3 flex items-center text-2xl w-4/5">
                휴이노(HUINNO)
              </p>
            </div>
            <div className="flex">
              <div className="flex justify-center items-center text-2xl bg-gray-300 bg-opacity-20 rounded-md text-center w-1/4 p-[7px]">
                기여도
              </div>
              <p className="flex items-center text-2xl ml-3 w-4/5">80%</p>
            </div>
            <div className="flex">
              <div className="flex justify-center items-center text-2xl bg-gray-300 bg-opacity-20 rounded-md text-center w-1/4 p-[7px]">
                개발 환경
              </div>
              <p className="flex items-center text-2xl ml-3 w-4/5">
                React, Redux, TypeScript, JavaScript, styled-components
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
                이벤트 데이터를 형태(Shape) 기반으로 시각화·분류하여, 유사한
                이벤트 패턴을 빠르게 식별하고 효율적으로 편집/관리할 수 있도록
                돕는 도구입니다.
              </div>
              <br />
              Shape Review를 통해 의료진은 ECG 데이터의 편집 시간을 획기적으로
              단축할 수 있으며, 14일치 ECG 데이터를 수동 편집하는 데 기존
              2~3시간에서 약 30분으로 줄였습니다.
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
          <h2 className="text-3xl font-bold mb-4">주요 기능</h2>
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">
                형태 기반 자동 그룹화
              </h3>
              <p className="text-xl mb-4">
                이벤트 타입별로 유사한 <strong>모양(형태)</strong>과 시간 간격을
                가진 이벤트들을 자동으로 그룹화하여 보여줍니다.
              </p>
              <ul className="text-lg space-y-2 ml-4">
                <li>• AI 기반 형태 분석으로 자동 분류</li>
                <li>• 시각적으로 구분 가능한 그룹 표시</li>
                <li>• 시간 간격과 패턴을 고려한 스마트 그룹화</li>
              </ul>
            </div>

            <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-green-400">
                유사 패턴 비교 및 편집
              </h3>
              <p className="text-xl mb-4">
                사용자는 그룹화된 이벤트들을 한눈에 비교하고, 필요 시 개별 또는
                일괄 편집할 수 있습니다.
              </p>
              <ul className="text-lg space-y-2 ml-4">
                <li>• 그룹 내 이벤트들의 시각적 비교</li>
                <li>• 개별 이벤트 편집 기능</li>
                <li>• 일괄 편집으로 효율성 극대화</li>
              </ul>
            </div>

            <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">
                이상치 탐지
              </h3>
              <p className="text-xl mb-4">
                다수의 이벤트를 분석할 때, 특정 패턴이 반복되는지 파악하거나
                이상치를 찾는 데 유용합니다.
              </p>
              <ul className="text-lg space-y-2 ml-4">
                <li>• 반복 패턴 자동 식별</li>
                <li>• 이상치 및 예외 케이스 탐지</li>
                <li>• 데이터 품질 향상을 위한 검증 도구</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center pb-6">
          <div className="h-2 rounded-sm bg-white w-40"></div>
          <div className="h-[1px] rounded-sm bg-white w-full"></div>
        </div>
        <div className="p-2">
          <div className="text-white text-2xl mb-10">
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
                className="flex flex-col items-center justify-center"
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
                className="flex flex-col items-center justify-center"
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

      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center pb-6">
          <div className="h-2 rounded-sm bg-white w-20"></div>
          <div className="h-[1px] rounded-sm bg-white w-full"></div>
        </div>
        <div className="p-2">
          <h2 className="text-3xl font-bold mb-4">달성 성과</h2>
          <div className="bg-green-600 bg-opacity-20 p-6 rounded-lg mb-8">
            <h3 className="text-2xl font-bold mb-4">편집 시간 대폭 단축</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-red-400 mb-2">기존</div>
                <div className="text-2xl mb-2">14일치 ECG 데이터</div>
                <div className="text-3xl font-bold">2~3시간</div>
                <div className="text-lg text-gray-300">수동 편집</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">
                  개선 후
                </div>
                <div className="text-2xl mb-2">14일치 ECG 데이터</div>
                <div className="text-3xl font-bold">약 30분</div>
                <div className="text-lg text-gray-300">Shape Review 활용</div>
              </div>
            </div>
            <div className="text-center mt-6">
              <div className="text-2xl font-bold text-yellow-400">
                → 약 75~85% 이상의 편집 시간 절감 효과
              </div>
              <div className="text-lg text-gray-300 mt-2">
                작업 피로도 감소 및 리포트 생산성 향상에 기여
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center pb-6">
          <div className="h-2 rounded-sm bg-white w-20"></div>
          <div className="h-[1px] rounded-sm bg-white w-full"></div>
        </div>
        <div className="p-2">
          <h2 className="text-3xl font-bold mb-4">기술적 성과</h2>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">
              1. Optimistic Update with Redux
            </h3>
            <p className="text-xl mb-4">
              Redux를 사용한 프로젝트에서{" "}
              <strong>
                사용자 경험을 개선하기 위해 옵티미스틱 업데이트(Optimistic
                Update)
              </strong>
              를 직접 구현했습니다. 서버 응답을 기다리지 않고 클라이언트에서
              먼저 상태를 갱신함으로써, 즉각적인 UI 피드백을 제공하고 응답
              지연에 따른 체감 속도를 줄일 수 있었습니다.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">
              2. Origin Private FileSystem (OPFS) 캐싱
            </h3>
            <p className="text-xl mb-4">
              최초에 호출되는 편집할 데이터를 OPFS에 저장할 수 있는 편의 기능을
              통해, 서버 요청 전 이를 우선 참조하는 로직을 구성하면서 클라이언트
              기반 캐싱 전략에 대한 경험을 쌓았습니다.
            </p>
            <div className="bg-blue-600 bg-opacity-20 p-4 rounded-lg">
              <p className="text-xl font-bold">
                → 네트워크 호출을 줄이고 렌더링 지연 없이 빠른 응답성을 확보하여
                대용량 데이터의 초기 로딩 시간을 약 80% 이상 단축
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <p className="text-lg mb-4">서비스 링크</p>
            <a
              className="p-4 text-blue-400 hover:text-blue-300"
              href="https://huinno.com/memocare/"
              target="_blank"
              rel="noreferrer"
            >
              - https://huinno.com/memocare/
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShapeReview;
