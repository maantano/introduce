import React from "react";
import thumb from "./thumb4.png";

const Main = () => {
  return (
    <div className="banner-mx">
      <div></div>
      <div className="mt-10 flex flex-row">
        <div className="thumb-container">
          <img className="thumb-nail object-cover" src={thumb} alt="avatar" />
        </div>
        <div className="flex flex-col justify-start my-data">
          <div className="flex flex-row items-center flex-co">
            <p className="mr-2 name">민경언</p>
            <div className="certificated-icon">
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
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM9.8 17.3l-4.2-4.1L7 11.8l2.8 2.7L17 7.4l1.4 1.4-8.6 8.5z"></path>
              </svg>
            </div>
          </div>

          <p className="thumb-nail-sub">maaantano@gmail.com</p>
          <div className="flex flex-type items-center ">
            <span className="thumb-nail-sub w-auto">
              #Frontend #Developer #IT
            </span>
            <div
              className="arr-icon"
              style={{ width: "24px", height: "24px", fill: "#aaaaaa" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 26"
                width="24"
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
          </div>
          <div className="flex justify-center flex-col">
            <a
              className="thumb-nail-sub w-auto email"
              href="https://velog.io/@maantano"
              target="_blank"
              rel="noreferrer"
            >
              velog.io/@maantano
            </a>
            <a
              className="thumb-nail-sub w-auto email"
              href="https://maantano.tistory.com"
              target="_blank"
              rel="noreferrer"
            >
              maantano.tistory.com (이사 예정)
            </a>
            <a
              className="thumb-nail-sub w-auto email"
              href="https://github.com/maantano"
              target="_blank"
              rel="noreferrer"
            >
              github.com/maantano
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
