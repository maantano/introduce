import React, { useEffect, useState } from "react";
import "./Portfolio.css";

import logo from "../../logo.png";

import webuilderAdmin1 from "../../asset/webuilder/webuilderAdmin1.png";
import webuilderAdmin2 from "../../asset/webuilder/webuilderAdmin2.png";

import webuilderMain from "../../asset/webuilder/webuilderMain.png";
import easyEditor from "../../asset/webuilder/easyEditor.png";
import proEditor from "../../asset/webuilder/proEditor.png";
import refact1 from "../../asset/webuilder/refact1.png";
import refact2 from "../../asset/webuilder/refact2.png";
import proxy from "../../asset/webuilder/proxy.png";

import con1 from "../../asset/webuilder/conference.jpeg";
import con2 from "../../asset/webuilder/conference2.jpeg";
import con3 from "../../asset/webuilder/conference3.jpeg";
import webuilderLogo1 from "../../asset/webuilder/main_visual_text_01.png";

import styled from "styled-components";
import { wrap } from "popmotion";
import { AnimatePresence, motion } from "framer-motion";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { storage } from "../../firebase-config";
const images = [
  webuilderMain,
  webuilderAdmin1,
  webuilderAdmin2,
  easyEditor,
  proEditor,
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
  "WEBUILDER (웹 편집기)",
  "Admin (상품 관리)",
  "Admin (주문 관리)",
  "Easy 에디터",
  "Pro 에디터",
];

const Webuilder = () => {
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
    const fileRef = ref(storage, "/webuilderFile");
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
          <img src={webuilderLogo1} alt="logo" />
        </div>
        <div className="flex items-center pb-6">
          <div className="h-2 rounded-sm bg-white w-20"></div>
          <div className="h-[1px] rounded-sm bg-white w-full"></div>
        </div>

        <div className="p-2">
          <div className=" text-3xl font-bold mb-4">
            WE빌더서비스: 홈페이지 & 쇼핑몰 사이트 제작 웹 에디터(B2C)
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
                담당 파트
              </div>
              <p className="flex items-center ml-3 text-2xl w-4/5">
                프론트엔드 개발 및 운영, 서버관리 및 트러블 슈팅
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
                총 21명- PM: 1명, 프론트엔드: 4명, 백엔드: 3명, 퍼블리셔: 2명,
                디자인: 2명, 기획: 4명, 운영: 3 명, QA: 2명
              </p>
            </div>
            <div className="flex">
              <div className="flex justify-center items-center text-2xl bg-gray-300 bg-opacity-20 rounded-md text-center w-1/4 p-[7px]">
                기여도
              </div>
              <p className="flex items-center text-2xl ml-3 w-4/5">
                프론트 - 50%, 서버 관리 및 트러블 슈팅 - 30%
              </p>
            </div>
            <div className="flex">
              <div className="flex justify-center items-center text-2xl bg-gray-300 bg-opacity-20 rounded-md text-center w-1/4 p-[7px]">
                개발 환경
              </div>
              <p className="flex items-center text-2xl ml-3 w-4/5">
                javascript, jquery, html, css, php, mysql, linux, docker,
                docker-swarm
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
                B2C 플랫폼으로 간편한 에디터로 홈페이지와 쇼핑몰 제작이 가능한
                이커머스 서비스입니다.
              </div>
              <br />
              B2C 반응형 에디터 개발에 참여하여 2022년도 회사 플랫폼 서비스 중
              고객만족도 1위를 달성하였습니다. <br />
              매달 세미나를 진행하고 고객들을 직접 만나 서비스에 대한 피드백과
              CS 업무를 함께 진행하였습니다.
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
                <li className="py-1"> - 써드파티 로그인 연동</li>
                <li className="py-1"> - 웹 에디터 고도화 개발 및 운영</li>
                <li className="py-1"> - 적응형 템플릿 25종, 반응형</li>
                <li className="py-1">
                  {" "}
                  - 템플릿 27종 개발, 완성형 템플릿 15종 개발
                </li>
                <li className="py-1">
                  - 쇼핑몰 관리자 UI/UX 개발(부가서비스, 주문/배송 설정, 회원
                  설정 등)
                </li>
                <li className="py-1"> - 더존 PG 연동</li>
                <li className="py-1">
                  {" "}
                  - 트래픽, 스토리지 추가, 제한, 알람 서비스 개발
                </li>
                <li className="py-1"> - 에디터 사용 매뉴얼 제작</li>
              </ul>
            </div>
            <div>
              <p className="text-2xl">Backend</p>
              <ul className="p-3">
                <li className="py-1"> - 서비스 아키텍처 개선 참여</li>
                <li className="py-1"> - 서버 모니터링 및 트러블 슈팅</li>{" "}
                <li className="py-1"> - DB 클러스터링 구축</li>
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
            <p className="text-2xl mt-10 mb-8">1. 리팩토링</p>
            <p className="text-xl mt-10 mb-8">
              프로젝트는 처음 jQuery로 개발이 일정부분 완료되었습니다.
              <br />
              업무 숙련도가 늘어가고 업무 파악이 어느정도 되었을 시점부터 신규
              기능 개발 및 레거시 코드의 리팩토링을 진행했습니다. DOM에 직접
              접근을 해야하는 에디터의 특성상 jQuery를 걷어내는것은 필요 이상의
              리소스가 들어갈수 있다고 생각을 했고, 데이터 패칭부분에서 부터
              진행했습니다. 프레임워크를 사용하는데에 많은 리소스가 투입이
              필요했기 때문에 장기 과제로 두고 진행했습니다.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div
                className="rounded-xl p-2"
                style={{ backgroundColor: "#212121" }}
              >
                <div className="p-3 inline-block font-bold bg-red-600 rounded-lg">
                  <p className="">Before</p>
                </div>
                <img src={refact1} alt="123" />
              </div>
              <div
                className="rounded-xl"
                style={{ backgroundColor: "#212121" }}
              >
                <div className="m-2 p-3 inline-block font-bold bg-red-600 rounded-lg">
                  <p className="">After</p>
                </div>
                <img src={refact2} alt="123" />
              </div>
            </div>
          </div>
          <div>
            <p className="text-2xl mt-10 mb-8">2. 서비스 운영 및 세미나 진행</p>
            <p className="text-xl mt-10 mb-8">
              고객들을 직접 만나 서비스에 대한 피드백을 듣고, CS 업무를 같이
              진행하며 고객의 니즈에 대해 고민하는 시간을 많이 보냈습니다.
              그러다보니 단순히 개발하고 기능을 완료하는것에서 한 단계 더 나아가
              고객의 입장에서 이 서비스를 이용할 때 어떤점이 편안하고 필요한
              기능들을 사용할까? 어떤 기능은 사용이 어렵고 손이 가지 않을까 라는
              고민을 하게 되었습니다. 회원 가입시 받은 데이터를 기반으로
              홈페이지를 제작해주는 간단 완성 에디터를 개발했습니다. 당시에는
              홈페이지 완성 시간을 1분 안에 시켜주었다. 라는 좋은 평가를 받을 수
              있었지만, 쇼핑몰은 고객이 설정해야하는 옵션들과 정보들이 많아서
              완성하지 못했는데, 필수적인 옵션만이라도 받아서 쇼핑몰도 클릭
              몇번으로 제작이 가능하도록 기능을 만들었다면이라는 아쉬움이
              남아있습니다.
            </p>
            <div>
              <div
                className="rounded-xl p-10 grid grid-cols-3 gap-10"
                style={{ backgroundColor: "#212121" }}
              >
                <img className="rounded-lg h-full " src={con1} alt="123" />
                <img className="rounded-lg h-full" src={con2} alt="123" />
                <img className="rounded-lg h-full" src={con3} alt="123" />
              </div>
            </div>
          </div>
          <div>
            <p className="text-2xl mt-10 mb-8">3. 트러블 슈팅</p>
            <p className="text-xl mt-10 mb-8">
              서버를 관리하는 부서가 따로 있었지만, 기본적인 서버 관리와 문제가
              발생했을때 일차적인 대응을 진행했습니다. 서비스를 운영해보고 가장
              어렵고 당황스러웠던 경험은 서버 다운 이슈였던것 같습니다. 개발과는
              다른 분야라고 생각을 했었고, 접해보지 못했던 분야의 문제가
              발생하다보니 너무 당황스러웠고 서비스 운영이 정상적이지 않으니
              크리티컬한 문제라고도 생각했습니다. 한번은 전사 서버가 다운되어
              컨테이너가 전부 내려간 문제가 있었는데, 컨테이너를 다시
              올려야하는데 정상적으로 올라오지 않았습니다. 원인은 도커 스웜은
              3개 1팀으로 오케스트레이션 되어야하는데, 저희 서비스는 2개 1팀으로
              구성이 되어있었습니다. 매니저 노드와 워커 노드가 구분이 되어있어야
              하고, 나머지 하나가 대기 상태여야하는데, 매니저 와 워커노드가
              동일한 상태여서 컨테이너가 올라오지 않았습니다. 그래서 우선 스웜을
              끊어버리고, 다시 설정해서 컨테이너를 전부 올려 서비스 운영을 시킨
              후 노드를 한대 더 구성하여 권장하는 구조로 변경한 경험이 있습니다.
              그리고 컨테이너를 내렸다 올릴 수 있는 백오피스를 만들어 컨테이너를
              편히 관리할 수 있도록 개발한 경험이 있습니다.
            </p>
            <div
              className="rounded-xl p-2"
              style={{ backgroundColor: "#212121" }}
            >
              <div className="p-3 inline-block font-bold bg-red-600 rounded-lg">
                <p className="">File</p>
              </div>
              <ul className="text-xl mt-4">
                <li className="py-1">
                  <a href={fileItem[0]} target="_blank" rel="noreferrer">
                    - Trouble shooting History
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <p className="text-2xl mt-10 mb-8">4. 에디터 렌더링 이슈</p>
            <p className="text-xl mt-10 mb-8">
              처음 에디터를 열었을때 에디터가 초기 로딩시간이 오래 걸려
              줄여야하는 이슈가 있었습니다. 현실적으로 모든 소스를 Javascript나
              React로 리팩토링 할 수는 없었기 때문에 다른 방법을
              적용해야했습니다. CDN(Content Delivery Network) 과 유사한 방법으로
              정적인 파일들을 다른 파일 서버에 올려두고 proxy 서버를 통해서
              정적인 파일을 가져오도록 변경 적용 했습니다. 정확한 소수 점 초는
              기억이 나질 않지만 6초 후반대에서 3초 초반대로 줄어들었습니다.
              css, img, jquery파일등을 파일 서버에 올려놓고 읽어 오도록
              변경했습니다.
              <br />
              정확한 소스는 없지만 소스 예시를 첨부합니다.
            </p>
            <div>
              <div
                className="rounded-xl p-2"
                style={{ backgroundColor: "#212121" }}
              >
                <div className="p-3 inline-block font-bold bg-red-600 rounded-lg">
                  <p className="">Example</p>
                </div>
                <img src={proxy} alt="123" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Webuilder;
