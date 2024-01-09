import React from "react";
import "./Portfolio.css";

import logo from "../../logo.png";
import webuilderLogo from "../../webuilder_logo.png";
import webuilderLogo1 from "../../main_visual_text_01.png";
import webuilderLogo2 from "../../main_visual_text_03.png";
const PortfolioItem2 = () => {
  return (
    <div className="mt-24 bg-black text-white flex flex-col justify-center items-center">
      <section className="w-full h-[300px] relative bg-white">
        <div
          style={{
            background: `url(${logo})`,
            // backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "100%",
          }}
        />
        {/* <div className="absolute left-14 top-32  h-56 w-56 bg-black rounded-lg bg-opacity-30 flex items-center justify-center z-50">
          <img src={webuilderLogo1} alt="logo" />
        </div> */}
      </section>

      <section className="container mx-auto px-4 pt-24 pb-12">
        <div className="flex items-center pb-6">
          <div className="h-2 rounded-sm bg-white w-20"></div>
          <div className="h-[1px] rounded-sm bg-white w-full"></div>
        </div>
        <div className="h-20 w-56">
          <img src={webuilderLogo1} alt="logo" />
        </div>
        <div className="p-2">
          <div className=" text-3xl font-bold mb-4">정보</div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center">
              <div className="flex justify-center items-center text-lg bg-gray-300 bg-opacity-20 rounded-md text-center w-32 p-[3px]">
                기간
              </div>
              <p className="ml-3">January 2024 - Present</p>
            </div>
            <div className="flex">
              <div className="flex justify-center items-center text-lg bg-gray-300 bg-opacity-20 rounded-md text-center w-32 p-[3px]">
                담당 파트
              </div>
              <p className="ml-3">John Doe</p>
            </div>
            <div className="flex">
              <div className="flex justify-center items-center text-lg bg-gray-300 bg-opacity-20 rounded-md text-center w-32 p-[3px]">
                현황
              </div>
              <p className="ml-3">On-going</p>
            </div>
            <div className="flex">
              <div className="flex justify-center items-center text-lg bg-gray-300 bg-opacity-20 rounded-md text-center w-32 p-[3px]">
                참가인원
              </div>
              <p className="ml-3">Team A, Team B</p>
            </div>
            <div className="flex">
              <div className="flex justify-center items-center text-lg bg-gray-300 bg-opacity-20 rounded-md text-center w-32 p-[3px]">
                기여도
              </div>
              <p className="ml-3">Frontend Development, Backend Development</p>
            </div>
            <div className="flex">
              <div className="flex justify-center items-center text-lg bg-gray-300 bg-opacity-20 rounded-md text-center w-32 p-[3px]">
                개발 환경
              </div>
              <p className="ml-3">React, Node.js, Express.js, MongoDB</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center pb-6">
          <div className="h-2 rounded-sm bg-white w-48"></div>
          <div className="h-[1px] rounded-sm bg-white w-full"></div>
        </div>
        <div className="p-2">
          <h2 className="text-3xl font-bold mb-4">프로젝트 소개</h2>
          <p className="text-lg">
            This project is a web application that provides a platform for users
            to share and discover new music. Users can create their own
            playlists, follow other users, and explore trending music. The
            application also includes a recommendation system that suggests
            songs based on the user's listening history.
          </p>
        </div>
      </section>
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-4">구현 사항</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <img
              className="w-full h-[200px] object-contain rounded-md"
              src={webuilderLogo2}
              style={{ aspectRatio: "200 / 200" }}
              alt="123"
            />
            <p className="mt-2">
              User authentication was implemented using JWT.
            </p>
          </div>
          <div>
            <img
              className="w-full h-[200px] object-contain rounded-md"
              src={webuilderLogo}
              style={{ aspectRatio: "200 / 200" }}
              alt="123"
            />
            <p className="mt-2">
              The frontend was built using React and Tailwind CSS.
            </p>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-4">회고</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="mt-2">
              User authentication was implemented using JWT.
            </p>
          </div>
          <div>
            <p className="mt-2">
              The frontend was built using React and Tailwind CSS.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioItem2;
