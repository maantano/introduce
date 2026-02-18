import React from "react";
import "./Portfolio.css";

import chungsolMain from "../../asset/etc/chungsolMain.png";
import chungsolLogo from "../../asset/etc/chungsol.png";
import chungsolLogoB from "../../asset/etc/chungsolBlack.png";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

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

const Chungsol = () => {
  return (
    <div className="mt-24 bg-black text-white flex flex-col justify-center items-center">
      <section className="w-full h-[300px] relative bg-white">
        <div
          style={{
            background: `url(${chungsolLogoB})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
            height: "300px",
          }}
        />
      </section>

      <section className="container mx-auto px-4 pt-16 pb-12 ">
        <div className="h-20 w-56">
          <img src={chungsolLogo} alt="logo" />
        </div>
        <div className="flex items-center pb-6">
          <div className="h-2 rounded-sm bg-white w-20"></div>
          <div className="h-[1px] rounded-sm bg-white w-full"></div>
        </div>

        <div className="p-2">
          <div className=" text-3xl font-bold mb-4">
            청솔재가노인복지센터: 재가방문노인요양센터
          </div>
          <div className="grid grid-cols-2 gap-4 p-2">
            <div className="flex items-center">
              <div className="flex justify-center items-center text-2xl bg-gray-300 bg-opacity-20 rounded-md text-center w-1/4 p-[7px]">
                기간
              </div>
              <p className="flex items-center text-2xl ml-3 w-4/5">
                2024.01.19~2024.01.20
              </p>
            </div>
            <div className="flex">
              <div className="flex justify-center items-center text-2xl bg-gray-300 bg-opacity-20 rounded-md text-center w-1/4 p-[7px]">
                담당 파트
              </div>
              <p className="flex items-center ml-3 text-2xl w-4/5">
                Front 개발 및 서버리스 아키텍쳐
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
                react, javascript, html, css, tailwind, styled-components,
                firebase
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
                어머님의 사이트제작을 진행했습니다(약 1시간 작업)
              </div>
              <br />웹 페이지 제작과 파이어베이스를 통해 이미지나 파일들을
              불러오게 제작했습니다.
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
              <p className="text-2xl">Full</p>
              <ul className="p-3">
                <li className="py-1"> - 디자인 및 UI & UX 개발</li>
                <li className="py-1"> - 파이어베이스 서버 연동</li>
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
          <div className="text-white text-2xl mb-20 "></div>
          <div className="flex items-center justify-center">
            <Wrapper>
              <SlideWrap>
                <AnimatePresence>
                  <img src={chungsolMain} alt="chungsolMain" />
                </AnimatePresence>
              </SlideWrap>
            </Wrapper>
          </div>
        </div>
        <div className="flex flex-col mt-[200px]">
          <p className="text-lg">링크(URL)</p>
          <a className="p-4" href="http://chungsol.site" target="_black">
            - www.chungsol.site
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
            <p className="text-2xl mt-10 mb-8">1. 하루 작업량</p>
            <p className="text-xl mt-10 mb-8">
              <br />
              제가 하루만에 얼마만큼의 일을할 수 있는지 알수있었습니다. 간단한
              사이트이지만 약 3시간동안 사이트 제작을 완료했다는것에
              좋은경험이었습니다.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Chungsol;
