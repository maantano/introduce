import React, { useState } from "react";
import "./Portfolio.css";

import pattern1 from "../../asset/patternMatching/pattern1.png";
import pattern2 from "../../asset/patternMatching/pattern2.png";
import pattern3 from "../../asset/patternMatching/pattern3.png";
import pattern4 from "../../asset/patternMatching/pattern4.jpeg";
import pattern5 from "../../asset/patternMatching/pattern5.jpeg";
import pattern6 from "../../asset/patternMatching/pattern6.jpeg";
import pattern8 from "../../asset/patternMatching/pattern8.jpeg";
import patternLogo from "../../asset/patternMatching/patternLogo.png";

import styled from "styled-components";
import { wrap } from "popmotion";
import { AnimatePresence, motion } from "framer-motion";

const images = [
  pattern1,
  pattern2,
  pattern3,
  pattern4,
  pattern5,
  pattern6,
  pattern8,
];

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
  width: 1000px;
  height: auto;
  max-height: 600px;
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
  "Pattern Matching Mode - R-peak 추가 기능",
  "Pattern Matching Mode - 유사 패턴 매칭 화면",
  "Pattern Matching Mode - 패턴 제외 기능",
  "Pattern Matching Mode - 화이트 보딩",
  "Pattern Matching Mode - 화이트 보딩",
  "Pattern Matching Mode - 화이트 보딩",
  "Pattern Matching Mode - 화이트 보딩",
];

const PatternMatching = () => {
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
          <img src={patternLogo} alt="Pattern Matching Logo" />
        </div>
        <div className="flex items-center pb-6">
          <div className="h-2 rounded-sm bg-white w-20"></div>
          <div className="h-[1px] rounded-sm bg-white w-full"></div>
        </div>

        <div className="p-2">
          <div className="text-3xl font-bold mb-4">
            AI 기반 ECG 데이터 차트 편집 에디터 - Pattern Matching
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
                프론트엔드 개발 (Pattern Matching, Shape Review)
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
              <p className="flex items-center text-2xl ml-3 w-4/5">
                Pattern Matching 70%
              </p>
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
                AI 기반 패턴 편집 자동화 도구로, 반복적인 비트 편집 작업을 줄여
                편집자의 리포트 생산 효율을 극대화하기 위함
              </div>
              <br />
              Shape Review로 커버되지 않는 특이 케이스의 수작업 편집 시간을
              단축하여 전체적인 편집 리소스 절감을 목표로 하였습니다. 반복적으로
              나타나는 유사 파형(Shape)을 자동으로 식별하고, 사용자가 설정한
              대표 비트를 기반으로 유사 비트를 찾아 일괄 수정/추가/삭제할 수
              있는 기능을 제공합니다.
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
              <h3 className="text-2xl font-bold mb-4 text-purple-400">
                유사 파형 자동 식별
              </h3>
              <p className="text-xl mb-4">
                반복적으로 나타나는 <strong>유사 파형(Shape)</strong>을 AI를
                통해 자동으로 식별합니다.
              </p>
              <ul className="text-lg space-y-2 ml-4">
                <li>• AI 기반 패턴 분석 및 인식</li>
                <li>• R-peak 자동 탐지 및 추가</li>
                <li>• 유사 패턴 실시간 시각화</li>
              </ul>
            </div>

            <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-green-400">
                일괄 편집 기능
              </h3>
              <p className="text-xl mb-4">
                사용자가 설정한 대표 비트를 기반으로 유사 비트를 찾아 일괄
                수정/추가/삭제할 수 있습니다.
              </p>
              <ul className="text-lg space-y-2 ml-4">
                <li>• 대표 비트 설정 기능</li>
                <li>• 유사 패턴 일괄 수정/추가/삭제</li>
                <li>• 편집 히스토리 관리</li>
              </ul>
            </div>

            <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">
                성능 최적화
              </h3>
              <p className="text-xl mb-4">
                빠르고 정확한 비트 편집을 통해 리포트 품질과 생산성을 동시에
                향상시킵니다.
              </p>
              <ul className="text-lg space-y-2 ml-4">
                <li>• Highchart 기반 실시간 시각화</li>
                <li>• OPFS 캐싱으로 성능 최적화</li>
                <li>• Redux를 통한 효율적인 상태 관리</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Project Overview */}
      {/* <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">프로젝트 개요</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              주요 기능
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• KMP, Boyer-Moore, Rabin-Karp 알고리즘 시각화</li>
              <li>• 실시간 패턴 매칭 과정 애니메이션</li>
              <li>• 단계별 알고리즘 동작 과정 설명</li>
              <li>• 사용자 정의 텍스트 및 패턴 입력</li>
              <li>• 알고리즘 성능 비교 분석</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              기술 스택
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Frontend: React.js, TypeScript</li>
              <li>• Animation: Framer Motion</li>
              <li>• Styling: Tailwind CSS</li>
              <li>• State Management: Redux Toolkit</li>
              <li>• Deployment: Vercel</li>
            </ul>
          </div>
        </div>
      </div> */}

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

      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center pb-6">
          <div className="h-2 rounded-sm bg-white w-20"></div>
          <div className="h-[1px] rounded-sm bg-white w-full"></div>
        </div>

        <div className="p-2">
          <h2 className="text-3xl font-bold mb-4">달성 성과</h2>
          <div className="bg-green-600 bg-opacity-20 p-6 rounded-lg mb-8">
            <h3 className="text-2xl font-bold mb-4">API 성능 최적화</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-red-400 mb-2">기존</div>
                <div className="text-2xl mb-2">반복적인 비트 편집</div>
                <div className="text-3xl font-bold">약 13,000회</div>
                <div className="text-lg text-gray-300">API 호출</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">
                  개선 후
                </div>
                <div className="text-2xl mb-2">반복적인 비트 편집</div>
                <div className="text-3xl font-bold">20~30회</div>
                <div className="text-lg text-gray-300">API 호출</div>
              </div>
            </div>
            <div className="text-center mt-6">
              <div className="text-2xl font-bold text-yellow-400">
                → API 호출 수를 90% 이상 감소시켜 대량 편집의 효율을 획기적으로
                개선
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-4 mt-12">기술적 성과 및 학습</h2>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">
              1. 전략 패턴과 커스텀 훅 분리를 통한 구조 개선
            </h3>
            <p className="text-xl mb-4">
              프로젝트 초기에는 하나의 커스텀 훅 안에 30~40개의 함수가 포함되어
              있어, 코드의 가독성 저하, 역할 불분명, 유지보수 어려움 등의 문제가
              있었습니다. 이를 해결하기 위해{" "}
              <strong>전략 패턴(Strategy Pattern)</strong>을 도입하고, 기능
              단위로 역할이 명확한 커스텀 훅을 분리했습니다.
            </p>
            <ul className="text-lg space-y-2 ml-4">
              <li>
                • 각 훅이 하나의 책임을 가지도록 분리 → 단일 책임 원칙(SRP) 실현
              </li>
              <li>
                • 불필요한 의존성과 조건 분기를 제거해 전략 선택만으로 동작을
                결정할 수 있도록 설계
              </li>
              <li>
                • 전략별 훅을 선택적으로 적용 가능하게 하여 유연성과 테스트
                편의성 향상
              </li>
              <li>
                • 신규 기능 추가 시 기존 코드 변경 없이 확장 가능한 구조로 전환
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">2. 커스텀 훅 구조</h3>
            <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
              <p className="text-lg mb-4">기능별로 분리된 커스텀 훅들:</p>
              <ul className="text-lg space-y-2 ml-4">
                <li>
                  • <strong>Validation 훅:</strong> 버튼 활성화/비활성화 검증
                </li>
                <li>
                  • <strong>R-peak 훅:</strong> R-peak 관련 로직 처리
                </li>
                <li>
                  • <strong>MouseEvent 훅:</strong> 마우스 이벤트 처리
                </li>
                <li>
                  • <strong>SimilarPattern 훅:</strong> 유사 패턴 이벤트 마커
                  렌더링
                </li>
                <li>
                  • <strong>BeatEdit 훅:</strong> 비트 편집 로직 처리
                </li>
                <li>
                  • <strong>Snackbar 훅:</strong> 스낵바 메시지 관리
                </li>
                <li>
                  • <strong>Navigation 훅:</strong> 네비게이션 처리
                </li>
                <li>
                  • <strong>ShortCut 훅:</strong> 단축키 처리
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col">
            <p className="text-lg mb-4">서비스 링크</p>
            <a
              className="p-4 text-purple-400 hover:text-purple-300"
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

export default PatternMatching;
