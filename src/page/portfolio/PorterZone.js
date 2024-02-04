import React, { useEffect, useState } from "react";
import "./Portfolio.css";

import logo from "../../logo.png";

import porterzoneLogo from "../../asset/porterzone/porterzoneLogo.png";

import poterZ2 from "../../asset/porterzone/poterZ2.jpg";
import poterZ3 from "../../asset/porterzone/poterZ3.jpg";
import poterZ4 from "../../asset/porterzone/poterZ4.jpg";
import poterZ5 from "../../asset/porterzone/poterZ5.jpg";
import poterZ6 from "../../asset/porterzone/poterZ6.jpg";
import poterZ7 from "../../asset/porterzone/poterZ7.jpg";
import poterzoneMain from "../../asset/porterzone/poterzoneMain.png";
import poterzoneMro from "../../asset/porterzone/poterzoneMroMain.png";

import styled from "styled-components";
import { wrap } from "popmotion";
import { AnimatePresence, motion } from "framer-motion";
import { storage } from "../../firebase-config";
import { getDownloadURL, listAll, ref } from "firebase/storage";

const images = [
  poterzoneMain,
  poterzoneMro,
  poterZ2,
  poterZ3,
  poterZ4,
  poterZ5,
  poterZ6,
  poterZ7,
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
  overflow: hidden;
`;

const Box = styled(motion.img)`
  position: absolute;
  width: 70%;
  height: 60%;
  object-fit: cover;
  border-radius: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background-color: transparent;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Box2 = styled(motion.div)`
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
  "PoterZone",
  "PoterZone MRO",
  "Admin (주문 관리)",
  "Admin (주문 내역)",
  "Admin (주문 상세내역)",
  "Admin (선물 하기)",
  "Admin (선물 상세내역)",
  "Admin (견적 관리)",
];

const PorterZone = () => {
  const [visible, setVisible] = useState(0);
  const imageIndex = wrap(0, images.length, visible);
  const [back, setBack] = useState(false);
  const [fileItem, setFileItem] = useState([]);
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

  const fetchData = async () => {
    const fileRef = ref(storage, "/poterzoneFile");
    try {
      const result = await listAll(fileRef);
      console.log("result ===>", result);
      const newUrls = await Promise.all(
        result.items.map(async (item) => {
          const url = await getDownloadURL(item);
          return url;
        })
      );
      setFileItem((prev) => [
        ...prev,
        ...newUrls.filter((url) => !prev.includes(url)),
      ]);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="mt-24 bg-black text-white flex flex-col justify-center items-center">
      <section className="w-full h-[300px] relative bg-white">
        <div
          style={{
            background: `url(${logo})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "100%",
          }}
        />
      </section>

      <section className="container mx-auto px-4 pt-16 pb-12">
        <div className="h-20 w-56">
          <img src={porterzoneLogo} alt="logo" />
        </div>
        <div className="flex items-center pb-6">
          <div className="h-2 rounded-sm bg-white w-20"></div>
          <div className="h-[1px] rounded-sm bg-white w-full"></div>
        </div>

        <div className="p-2">
          <div className=" text-3xl font-bold mb-4">
            더 포터존 : 이커머스 플랫폼(B2B) & MRO
          </div>
          <div className="grid grid-cols-2 gap-4 p-2">
            <div className="flex items-center">
              <div className="flex justify-center items-center text-2xl bg-gray-300 bg-opacity-20 rounded-md text-center w-1/4 p-[7px]">
                기간
              </div>
              <p className="flex items-center text-2xl ml-3 w-4/5">
                2021.02~2023.03
              </p>
            </div>
            <div className="flex">
              <div className="flex justify-center items-center text-2xl bg-gray-300 bg-opacity-20 rounded-md text-center w-1/4 p-[7px]">
                {/* <div className="flex justify-center items-center text-2xl bg-gray-300 bg-opacity-20 rounded-md text-center w-32 p-[7px]"> */}
                담당 파트
              </div>
              <p className="flex items-center ml-3 text-2xl w-4/5">
                프론트엔드 개발
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
                참가인원
              </div>
              <p className="ml-3 flex items-center text-2xl w-4/5">
                총 23명- PM: 1명, 프론트엔드: 7명, 백엔드: 9명, 퍼블리셔: 2명,
                기획: 6명, 운영 및 QA: 3 명, 디자인: 디자인 센터
              </p>
            </div>
            <div className="flex">
              <div className="flex justify-center items-center text-2xl bg-gray-300 bg-opacity-20 rounded-md text-center w-1/4 p-[7px]">
                기여도
              </div>
              <p className="flex items-center text-2xl ml-3 w-4/5">
                프론트 개발 - 35%
              </p>
            </div>
            <div className="flex">
              <div className="flex justify-center items-center text-2xl bg-gray-300 bg-opacity-20 rounded-md text-center w-1/4 p-[7px]">
                개발 환경
              </div>
              <p className="flex items-center text-2xl ml-3 w-4/5">
                react, redux-toolkit, javascript ,html, css, styled-component
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
                통합 이커머스 플랫폼과 연계 서비스의 융합을 통해 원스탑 토탈
                서비스를 제공합니다.
              </div>
              <br />
              기업에서 제품생산에 필요한 원부자재와 소모성 자재등 기업에 필요한
              모든것을 관리합니다.
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
          <div className="grid grid-cols-2 gap-4">
            <div className="p-2">
              <p className="text-2xl">Frontend</p>
              <ul className="p-3">
                <li className="py-1">
                  - 주문 도메인 개발
                  <ul className="pl-4">
                    <li> - 유저(구매 신청, 구매 신청 내역 확인)</li>
                    <li> - 관리자(구매 신청 승인, 구매 승인 상세 내역)</li>
                  </ul>
                </li>
                <li className="py-1">
                  - 견적 도메인 개발
                  <ul className="pl-4">
                    <li> - 유저(견적 신청, 견적 신청 내역 확인)</li>
                    <li> - 관리자(신청 내역 확인)</li>
                  </ul>
                </li>
                <li className="py-1">- 연동 및 부가서비스 개발</li>
                <li className="py-1">- 인증서 관리 및 등록</li>
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
          <div className="flex items-center justify-center">
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
        <div className="flex flex-col text-xl mt-28">
          <p>링크(URL)</p>
          <a
            className="py-2 pl-4"
            href="https://theporterzone.com/"
            target="_black"
          >
            - theporterzone.com
          </a>
          <a
            className="py-2 pl-4"
            href="https://theporterzone.com/mro"
            target="_black"
          >
            - theporterzone.com/mro
          </a>
        </div>
      </section>
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center pb-6">
          <div className="h-2 rounded-sm bg-white w-20"></div>
          <div className="h-[1px] rounded-sm bg-white w-full"></div>
        </div>

        <div className="p-2">
          <h2 className="text-3xl font-bold mb-4">회고</h2>
          <div>
            <p className="text-2xl mt-10 mb-8">1. 테스트 및 코드 리뷰</p>
            <p className="text-xl mt-10 mb-8">
              테스트 코드 작성 및 문서화
              <br />
              테스트 코드 작성을 위한 규칙과 가이드 문서를 작성했습니다. 서비스
              초기 개발 단계에서는 테스트 코드 작성과 테스트를 진행하였지만,
              일정과 업무 때문에 테스트를 소홀히 하게 되었습니다. 테스트 코드
              작성에는 여러가지 이유가 있지만, 리팩토링을 진행할 때 부담을
              덜어준다는 점이 가장 와닿았습니다. 실제로 다른 프로젝트에서
              리팩토링을 진행할때 브라우저에서 확인하고, QA팀과 핑퐁이 많았는데,
              테스트 코드를 작성하고 통과가 되면 QA팀에 넘겨 반복되는 일을 줄일
              수 있다고 생각합니다. 다음 프로젝트에서는 조금더 비중을 두고
              싶습니다.
            </p>
            <div
              className="rounded-xl p-4"
              style={{ backgroundColor: "#212121" }}
            >
              <div className="p-3 inline-block font-bold bg-red-600 rounded-lg">
                <p className="">File</p>
              </div>
              <div className="mt-3">
                <ul className="text-xl">
                  <li className="py-1">
                    <a href={fileItem[0]} target="_blank" rel="noreferrer">
                      - Front-end 테스트 개요
                    </a>
                  </li>
                  <li>
                    <a href={fileItem[1]} target="_blank" rel="noreferrer">
                      - Jest, testing-library 를 이용한 React 단위
                      테스트 작성 방법
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <p className="text-2xl mt-10 mb-8">2. 인증서 관리 및 등록</p>
            <p className="text-xl mt-10 mb-8">
              SSL 인증서 관리 및 등록을 진행했습니다.
              <br />
              생성되는 컨테이너를 대표 인증서를 통해서 ssl 인증서를 적용시키도록
              구성되어있습니다. 발급 받은 인증서의 기간에 맞게 교체하고
              관리했습니다.
            </p>
            <div
              className="rounded-xl p-4"
              style={{ backgroundColor: "#212121" }}
            >
              <div className="p-3 inline-block font-bold bg-red-600 rounded-lg">
                <p className="">File</p>
              </div>
              <div className="mt-4">
                <ul className="text-xl">
                  <li className="py-1">
                    <a href={fileItem[2]} target="_blank" rel="noreferrer">
                      - 인증서 관리 및 등록 History
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PorterZone;
