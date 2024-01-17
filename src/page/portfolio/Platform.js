import React, { useEffect, useState } from "react";
import "./Portfolio.css";
import logo from "../../asset/platform/douzone-logo.png";
import platformLogo from "../../asset/platform/platform-logo.png";

import image1 from "../../asset/platform/yogamoon.png";
import image2 from "../../asset/platform/dforest.png";
import image3 from "../../asset/platform/krinruck.png";
import image4 from "../../asset/platform/amaranth.png";
import reservation from "../../asset/platform/dforestReserve.png";

import styled from "styled-components";
import { wrap } from "popmotion";
import { AnimatePresence, motion } from "framer-motion";
import { storage } from "../../firebase-config";
import { getDownloadURL, listAll, ref } from "firebase/storage";

const images = [image1, image2, image3, image4];

const projectDue = [
  "2020.10~2021.01",
  "2020.06~2020.09",
  "2019.11~2020.02",
  "2019.07~2019.11",
];
const itemDescription = [
  {
    item: [
      "- 기여도: 100%",
      "- 상품 결제 개발",
      "- 네이버 페이, 카카오 페이 연동 개발",
      "- 레슨 예약 시스템 개발",
      "- UI/UX 구축 개발",
      "- react, redux, javascript, html, css",
    ],
    title: "요가문 서울 (호스팅 정지)",
  },
  {
    item: [
      "- 기여도: 100%",
      "- 투어 및 단체 예약 개발",
      "- UI/UX 구축 개발",
      "- javascript, jquery, html, css",
    ],
    link: "https://www.dforest.co.kr/",
    title: " www.dforest.co.kr (강아지 숲)",
  },
  {
    item: [
      "- 기여도: 100%",
      "- 사내 게시판 서비스 개발",
      "- 비즈니스 워치(뉴스 기사) 연동 개발",
      "- UI/UX 구축 개발",
      "- javascript, jquery, html, css",
    ],
    link: "https://www.kaits.or.kr/",
    title: "www.kaits.or.kr (한국산업기술보호협회)",
  },
  {
    item: [
      "- 기여도: 40%",
      "- UI/UX 구축 개발",
      "- react, javascript, html, css",
    ],
    link: "https://www.amaranth10.com/",
    title: "www.amaranth10.com (아마란쓰10)",
  },
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
  width: 500px;
  height: 500px; /* 높이를 원하는 비율로 조절할 수 있습니다. */
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
const Box3 = styled(motion.div)`
  position: absolute;
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
  "요가문 서울",
  "강아지 숲",
  "한국산업기술보호협회",
  "아마란쓰 10",
];

const Platform = () => {
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
    const fileRef = ref(storage, "/platformFile");
    try {
      const result = await listAll(fileRef);

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
      <section className="w-full h-[300px] relative bg-white overflow-hidden">
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
          <img src={platformLogo} alt="logo" />
        </div>
        <div className="flex items-center pb-6">
          <div className="h-2 rounded-sm bg-white w-20"></div>
          <div className="h-[1px] rounded-sm bg-white w-full"></div>
        </div>

        <div className="p-2">
          <div className=" text-3xl font-bold mb-4">플랫폼개발 Unit : 구축</div>
          <div className="grid grid-cols-2 gap-4 p-2">
            <div className="flex items-center">
              <div className="flex justify-center items-center text-2xl bg-gray-300 bg-opacity-20 rounded-md text-center w-32 p-[7px]">
                기간
              </div>
              <p className="flex items-center text-2xl ml-3">2019.07~2021.02</p>
            </div>
            <div className="flex">
              <div className="flex justify-center items-center text-2xl bg-gray-300 bg-opacity-20 rounded-md text-center w-32 p-[7px]">
                담당 파트
              </div>
              <p className="flex items-center ml-3 text-2xl">프론트엔드 개발</p>
            </div>
            <div className="flex">
              <div className="flex justify-center items-center text-2xl bg-gray-300 bg-opacity-20 rounded-md text-center w-32 p-[7px]">
                현황
              </div>
              <p className="flex items-center text-2xl ml-3">In some case</p>
            </div>
            <div className="flex">
              <div className="flex justify-center items-center text-2xl bg-gray-300 bg-opacity-20 rounded-md text-center w-36 p-[7px]">
                참가인원
              </div>
              <p className="ml-3 flex items-center text-2xl">
                In some case : 개발 인원, 기획 인원, 디자인 센터 참여
              </p>
            </div>
            <div className="flex">
              <div className="flex justify-center items-center text-2xl bg-gray-300 bg-opacity-20 rounded-md text-center w-32 p-[7px]">
                기여도
              </div>
              <p className="flex items-center text-2xl ml-3">
                프론트 개발 - 100%
              </p>
            </div>
            <div className="flex">
              <div className="flex justify-center items-center text-2xl bg-gray-300 bg-opacity-20 rounded-md text-center w-36 p-[7px]">
                개발 환경
              </div>
              <p className="flex items-center text-2xl ml-3">
                javascript, react, redux, javascript, jquery, html, css,
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
                그룹사 프로젝트 및 구축 개발을 진행합니다.
              </div>
              <br />
              그룹사 프로젝트 2건, 구축 개발 2건을 진행했습니다.
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center pb-6">
          <div className="h-2 rounded-sm bg-white w-60"></div>
          <div className="h-[1px] rounded-sm bg-white w-full"></div>
        </div>
        <div className="p-2 text-lg">
          <h2 className="text-3xl font-bold mb-4">주요 업무 요약</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-2">
              <Box3
                custom={back}
                variants={boxVariants2}
                initial="entry"
                animate="center"
                exit="exit"
                key={visible}
              >
                <p className="text-2xl">
                  {ImageTitle[imageIndex]} ({projectDue[imageIndex]})
                </p>
                <ul className="p-3">
                  {itemDescription[imageIndex].item.map(
                    (projectItem, index) => (
                      <li key={index} className="py-1">
                        {projectItem}
                      </li>
                    )
                  )}
                </ul>
                {itemDescription[imageIndex].link ? ( // Check if link is defined
                  <a
                    href={itemDescription[imageIndex].link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    URL : {itemDescription[imageIndex].title}
                  </a>
                ) : (
                  <div>URL : {itemDescription[imageIndex].title}</div>
                )}
              </Box3>
            </div>
            <div>
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
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center pb-6">
          <div className="h-2 rounded-sm bg-white w-20"></div>
          <div className="h-[1px] rounded-sm bg-white w-full"></div>
        </div>

        <div className="p-2">
          <h2 className="text-3xl font-bold mb-4">회고</h2>
          <p className="text-2xl mt-10 mb-8">
            1. 연동 개발의 경험(요가문 서울)
          </p>
          <p className="text-xl mt-10 mb-8">
            결제 서비스 개발 및 연동
            <br />
            네이버 페이, 카카오 페이, 자사 내 PG 연동과 함께 결제 시스템을
            개발한 경험을 했습니다. 연동 개발과 커머스, 금융 서비스와 관련된
            업무를 진행하게 되었습니다. 이후 금융 서비스에 KISA 에서 진행하는
            오픈 뱅킹 및 송금 교육을 수료 했습니다.
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
                  <a href={fileItem[0]} target="_blank" rel="noreferrer">
                    - Kakao 페이 연동 개발
                  </a>
                </li>

                <li>
                  <a href={fileItem[1]} target="_blank" rel="noreferrer">
                    - 네이버 페이 연동 개발
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <p className="text-2xl mt-10 mb-8">
            2. 상세날짜 표현의 한계(강아지 숲)
          </p>

          <div
            className="text-xl mt-10 mb-8 flex flex-col rounded-xl p-2"
            style={{ backgroundColor: "#212121" }}
          >
            <div className="">
              <div className="p-3 inline-block font-bold bg-red-600 rounded-lg mb-3">
                <p className="">이슈</p>
              </div>
              <p className="p-4">
                예약상세 조회화면에서 날짜의 선택이 긴 리스트로 표현되어
                예약경험이 떨어진다고 생각했습니다.
              </p>
            </div>
            <div className="">
              <div className="p-3 inline-block font-bold bg-red-600 rounded-lg mb-3">
                <p className="">해결 방법</p>
              </div>
              <p className="p-4">
                예약 날짜 선택을 리스트가 이닌 캘린더로 표현하여 경험을
                높였습니다.
              </p>
            </div>
            <div className="p-10">
              <img src={reservation} alt="reservation" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Platform;
