import React from "react";

const YoutubeError = ({ error }) => {
  console.log("error ==>", error);
  return (
    <div className={`flex w-[1200px] flex-wrap p-10`}>
      <div className="leading-loose">
        <p>
          일일 데이터 호출량이 모두 소진되어 영상리스트를 불러올수가 없습니다.
        </p>
        <div className="flex gap-2 items-center">
          <span>👉</span>
          <div className="p-3 inline-block font-bold bg-red-600 rounded-lg">
            <a href="https://www.youtube.com/@maantano">
              youtube.com/@maantano
            </a>
          </div>
          로 오시면 영상을 보실 수 있습니다.
        </div>
        <p>감사합니다.</p>
      </div>
    </div>
  );
};

export default YoutubeError;
