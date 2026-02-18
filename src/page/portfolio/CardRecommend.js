import React, { useEffect, useState } from "react";
import "./Portfolio.css";

import cardMain from "../../asset/cardRecommend/cardMain.png";
import card1 from "../../asset/cardRecommend/card1.png";
import card2 from "../../asset/cardRecommend/card2.png";
import card3 from "../../asset/cardRecommend/card3.png";
import card4 from "../../asset/cardRecommend/card4.png";
import card5 from "../../asset/cardRecommend/card5.png";
import card6 from "../../asset/cardRecommend/card6.png";

import firebaseImg from "../../asset/cardRecommend/firebase.png";
import nodeImg from "../../asset/cardRecommend/node.png";
import motion2 from "../../asset/cardRecommend/motionVariants.png";
import motion3 from "../../asset/cardRecommend/motionComponent2.png";
import motion1 from "../../asset/cardRecommend/motionComponent.png";

import cardBanner2 from "../../asset/cardRecommend/cardP2.png";
import cardlogo from "../../asset/cardRecommend/cardPicker.png";
import styled from "styled-components";
import { wrap } from "popmotion";
import { AnimatePresence, motion } from "framer-motion";
import { storage } from "../../firebase-config";
import { getDownloadURL, listAll, ref } from "firebase/storage";

const images = [cardMain, card1, card2, card3, card4, card5, card6];

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
  height: 500px;
  object-fit: contain;
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
  "메인페이지",
  "카드 조회 페이지",
  "카드 목록 리스트 페이지",
  "상세 페이지",
  "소비패턴 분석 페이지",
  "소비패턴 분석 결과 페이지",
  "소비패턴 분석 결과 페이지",
];

const CardRecommend = () => {
  const [visible, setVisible] = useState(0);
  const imageIndex = wrap(0, images.length, visible);
  const [back, setBack] = useState(false);
  const [, setFileItem] = useState([]);
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
      <section className="w-full h-[300px] relative bg-white overflow-hidden flex justify-center items-center">
        <img
          src={cardBanner2}
          className="w-[500px] h-[150px]"
          alt="cardPicker banner"
        />
      </section>

      <section className="container mx-auto px-4 pt-8">
        <div className="h-20 w-56 mb-6">
          <img src={cardlogo} alt="cardlogo" />
        </div>

        <div className="flex items-center pb-6">
          <div className="h-2 rounded-sm bg-white w-20"></div>
          <div className="h-[1px] rounded-sm bg-white w-full"></div>
        </div>

        <div className="p-2">
          <div className=" text-3xl font-bold mb-4">
            카드 추천 및 소비 패턴 분석 서비스
          </div>
          <div className="grid grid-cols-2 gap-4 p-2">
            <div className="flex items-center">
              <div className="flex justify-center items-center text-2xl bg-gray-300 bg-opacity-20 rounded-md text-center w-1/4 p-[7px]">
                기간
              </div>
              <p className="flex items-center text-2xl ml-3 w-4/5">
                2023.08~2023.09
              </p>
            </div>
            <div className="flex">
              <div className="flex justify-center items-center text-2xl bg-gray-300 bg-opacity-20 rounded-md text-center w-1/4 p-[7px]">
                담당 파트
              </div>
              <p className="flex items-center ml-3 text-2xl w-4/5">개발</p>
            </div>
            <div className="flex">
              <div className="flex justify-center items-center text-2xl bg-gray-300 bg-opacity-20 rounded-md text-center w-1/4 p-[7px]">
                현황
              </div>
              <p className="flex items-center text-2xl ml-3 w-4/5">배포 완료</p>
            </div>
            <div className="flex">
              <div className="flex justify-center items-center text-2xl bg-gray-300 bg-opacity-20 rounded-md text-center w-1/4 p-[7px]">
                참가인원
              </div>
              <p className="flex items-center text-2xl ml-3 w-4/5">민경언</p>
            </div>
            <div className="flex">
              <div className="flex justify-center items-center text-2xl bg-gray-300 bg-opacity-20 rounded-md text-center w-1/4 p-[7px]">
                기여도
              </div>
              <p className="flex items-center text-2xl ml-3 w-4/5">
                Front, Back , Design - 100%
              </p>
            </div>
            <div className="flex">
              <div className="flex justify-center items-center text-2xl bg-gray-300 bg-opacity-20 rounded-md text-center w-1/4 p-[7px]">
                개발 환경
              </div>
              <p className="flex items-center text-2xl ml-3 w-4/5">
                javascript, react, redux-toolkit, javascript, styled-compoent,
                tailwind, html, css, firebase, node, mysql, python
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
                카드 추천 및 소비 패턴 분석 서비스
              </div>
              <br />
              카드 목록을 조회합니다. 카테고리 별 카드 들을 조회하고, 해당
              카드들의 상세 정보를 노출하고, 카드 발급 페이지로 이동시킵니다.
              고객의 카드 사용 파일을 업로드 하고 본인이 사용한 내역들을
              분석하고 가장 할인 혜택이 많은 카드를 추천해줍니다.
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
                <li className="py-1"> - UI & UX 개발</li>
                <li className="py-1"> - 카드 검색 개발</li>
                <li className="py-1"> - 카드 리스트 조회 개발</li>
                <li className="py-1"> - 카드 상세 개발</li>
                <li className="py-1"> - 소비 패턴 분석 개발</li>
              </ul>
            </div>
            <div>
              <p className="text-2xl">Backend</p>
              <ul className="p-3">
                <li className="py-1"> - 페이어베이스 연동</li>
                <li className="py-1"> - 카드 데이터 수집</li>{" "}
                <li className="py-1"> - API 개발</li>
                <li className="pl-5"> - 카드 목록 조회</li>
                <li className="pl-5"> - 카드 상세 조회</li>
                <li className="pl-5"> - 카테고리 조회</li>
                <li className="pl-5"> - 소비패턴 분석</li>
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
        <div className="flex flex-col">
          <p className="text-lg">링크(URL)</p>
          <a className="p-4" href="http://www.we-builder.co.kr" target="_black">
            - www.we-builder.co.kr
          </a>
          <a
            className="p-4"
            href="https://www.youtube.com/watch?v=2lnHmCrrlQY"
            target="_black"
          >
            - Pro editor guide video
          </a>
        </div>
      </section>
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center pb-6">
          <div className="h-2 rounded-sm bg-white w-20"></div>
          <div className="h-[1px] rounded-sm bg-white w-full"></div>
        </div>

        <div className="p-2">
          <div>
            <h2 className="text-3xl font-bold mb-4">회고</h2>

            <p className="text-2xl mt-10 mb-8">1. 서버리스 리팩토링</p>
            <p className="text-xl mt-10 mb-8">
              node 서버를 통해 API를 만들어 데이터를 가져오던 방식에서
              서버리스(파이어베이스)를 사용하여 데이터를 받아오도록
              변경했습니다. 데이터베이스, 파일 스토리지, 인증 부분에서 많은
              이점이 있는것을 직접 확인해보고 프론트엔드 개발자들에게 큰 도움이
              될 수 있다는 생각을 했습니다. 하지만 렌더링 시간이나 속도
              측면에서는 단점이 있고, 로딩처리나 부수적인 작업이 생기기 때문에
              적절히 사용해야할 것이라 생각했습니다. 그리고 쿼리 측면에서도 제한
              사항이 있었습니다. OR, LIKE 처럼 간단한 데이터 검색 키워드도
              사용이 불가능 했기 때문에, 제한사항이 많다고 생각했습니다. 그리고
              추가적으로 웹뷰에도 제한 사항이 웹뷰 서비스를 이용할 수 없다는
              내용이 있습니다. 주소 검색이나, 토스 페이먼츠를 사용할 수
              없습니다. 작은 프로젝트들에게는 상당한 강점들이 많다고 생각하지만,
              규모가 커지면서 스케일 업이 필요한 상황이 온다면 변경을
              해야할것이라는 것을 느꼈습니다.
            </p>
            <div>
              <div className="grid grid-cols-2 gap-4">
                <div
                  className="rounded-xl p-2"
                  style={{ backgroundColor: "#212121" }}
                >
                  <div className="p-3 inline-block font-bold bg-red-600 rounded-lg">
                    <p className="">Before</p>
                  </div>
                  <img src={nodeImg} alt="123" />
                </div>
                <div
                  className="rounded-xl"
                  style={{ backgroundColor: "#212121" }}
                >
                  <div className="m-2 p-3 inline-block font-bold bg-red-600 rounded-lg">
                    <p className="">After</p>
                  </div>
                  <img src={firebaseImg} alt="123" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="text-2xl mt-10 mb-8">2. 다양한 라이브러리 사용</p>
            <p className="text-xl mt-10 mb-8">
              이 프로젝트로 csv-parser, papaparse, xlsx, slick-carousel,
              framer-motion, python-shell, firebase 등 여러가지 패키지를
              사용해봤습니다. 특히 framer-motion가 사용해본 것이 도움이 되었다고
              생각합니다. 직접 에니메이션이나 인터렉션을 만들고 적용하려면 더
              많은 시간이 들어왔는데, 간단히 사용할 수 있고 앞으로 많이 사용하게
              될것이라고 생각했습니다.
            </p>
            <div>
              <div className="grid grid-cols-3 gap-4">
                <div
                  className="rounded-xl p-2"
                  style={{ backgroundColor: "#212121" }}
                >
                  <div className="p-3 inline-block font-bold bg-red-600 rounded-lg mb-3">
                    <p className="">Styled</p>
                  </div>
                  <img src={motion1} alt="123" />
                </div>
                <div
                  className="rounded-xl"
                  style={{ backgroundColor: "#212121" }}
                >
                  <div className="m-2 p-3 inline-block font-bold bg-red-600 rounded-lg">
                    <p className="">Variants</p>
                  </div>
                  <img src={motion2} alt="123" />
                </div>
                <div
                  className="rounded-xl"
                  style={{ backgroundColor: "#212121" }}
                >
                  <div className="m-2 p-3 inline-block font-bold bg-red-600 rounded-lg">
                    <p className="">Components</p>
                  </div>
                  <img src={motion3} alt="123" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="text-2xl mt-10 mb-8">3. 데이터 수집</p>
            <p className="text-xl mt-10 mb-3">
              웹 스크래핑과 직접 데이터를 집어 넣는 두가지 방법을 진행했습니다.
              <br />
              다른 서비스를 진행할 때, 다른 곳의 데이터를 크롤링 하여 데이터를
              수집한 경험이 있는데, 법적인 책임소지가 있다는 것을
              알게되었습니다. 크롤링을 하여 데이터를 수집하는것은 어렵지 않으나,
              기획팀과 법무팀의 소중함을 다시 한번 깨닫게 되었습니다.
              <br />
              <br />웹 스크래핑과 크롤링의 주의사항을 세가지로 정리해봤습니다.
            </p>
            <div
              className="rounded-xl p-3"
              style={{ backgroundColor: "#212121" }}
            >
              <div className="p-3 inline-block font-bold bg-red-600 rounded-lg">
                <p className="">주의사항</p>
              </div>
              <div className="text-lg mt-3">
                <p className="p-2 text-2xl">
                  1. 웹 스크래핑/크롤링을 통해 어떤 목적을 달성하고자 하는가?
                </p>
                <p className="pl-2">
                  추출한 결과물을 상업적으로 사용하기 위해서는 저작권이나
                  데이터베이스권을 침해하지 않는지 항상 고려해야 한다. 웹
                  사이트는 이용 약관에서 스크래핑/크롤링을 금지하거나, 일부
                  제한을 두고 있을 수 있다. 따라서 스크래핑/크롤링을 수행하기
                  전에 해당 웹 사이트의 이용 약관을 반드시 확인해야 한다.
                </p>
                <p className="p-2 text-2xl">
                  2. 나의 웹 스크래핑/크롤링이 서버에 영향을 미치지 않는가?
                </p>
                <p className="pl-2">
                  서버 부하를 줄이기 위해 스크래핑/크롤링 작업을 수행할 때,
                  적절한 딜레이를 적용해야 한다. 딜레이를 적용하지 않으면 웹
                  서버에 대한 불필요한 부하를 유발하게 되어 서버에서
                  스크래핑/크롤링을 차단하는 경우가 발생할 수 있다.
                </p>
                <p className="p-2 text-2xl">
                  3. 로봇 배제 표준(Robots Exclusion Standard)을 준수했는가?
                </p>
                <p className="pl-2">
                  로봇 배제 표준은 웹 사이트의 소유자가 로봇에 대한 액세스
                  권한을 제어하는 프로토콜이다. 따라서, 스크래핑/크롤링을
                  수행하기 전에 해당 웹 사이트의 robots.txt 파일을 반드시
                  확인하고, 로봇 배제 표준을 준수해야 한다. robots.txt 파일은
                  "URL/robots.txt" 형식으로 쉽게 확인할 수 있다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardRecommend;
