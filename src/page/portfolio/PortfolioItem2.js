import React from "react";

const PortfolioItem2 = () => {
  return (
    <div className="mt-24 bg-black text-white">
      <section className="w-full h-[700px] relative">
        <img
          className="absolute left-0 top-0 w-full h-[500px] object-contain"
          src="https://i.ytimg.com/vi/MJyadEmZVJ8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAfBxUH_J9WpSnHNl15TqM0dFsg_w"
          style={{
            aspectRatio: "700/500",
          }}
          alt="123"
        />
        <div className="absolute left-14 top-80 h-64 w-64 bg-white bg-opacity-50 flex items-center justify-center">
          {/* <div className="absolute left-14 top-72 h-72 w-[calc(100%-750px)] bg-white bg-opacity-50 flex items-center justify-center"> */}
          <h1 className="text-3xl font-bold text-white">Project Name</h1>
        </div>
      </section>
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-4">정보</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-xl font-semibold">기간</h3>
            <p>January 2024 - Present</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">담당 파트</h3>
            <p>John Doe</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">현황</h3>
            <p>On-going</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">참가인원</h3>
            <p>Team A, Team B</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">기여도</h3>
            <p>Frontend Development, Backend Development</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">개발 환경</h3>
            <p>React, Node.js, Express.js, MongoDB</p>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-4">프로젝트 소개</h2>
        <p className="text-lg">
          This project is a web application that provides a platform for users
          to share and discover new music. Users can create their own playlists,
          follow other users, and explore trending music. The application also
          includes a recommendation system that suggests songs based on the
          user's listening history.
        </p>
      </section>
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-4">구현 사항</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <img
              className="w-full h-[200px] object-contain rounded-md"
              src="https://i.ytimg.com/vi/MJyadEmZVJ8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAfBxUH_J9WpSnHNl15TqM0dFsg_w"
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
              src="https://i.ytimg.com/vi/MJyadEmZVJ8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAfBxUH_J9WpSnHNl15TqM0dFsg_w"
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
