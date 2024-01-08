import React from "react";

const Main = () => {
  return (
    <div className="banner-mx">
      <div>
        <img
          className="banner-img"
          src="https://yt3.googleusercontent.com/p2ZIcHzBIMFBLqhAZJ8pGHc1c2F1BzKxFPpUtaAMMSC7xlNFWabSLVbi_w0B5wmP6gKDIZ6NbQ=w2560-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
          alt="avatar"
        />
      </div>
      <div className="mt-10 flex flex-row">
        <div className="thumb-container">
          <img
            className="thumb-nail"
            src="https://yt3.googleusercontent.com/p2ZIcHzBIMFBLqhAZJ8pGHc1c2F1BzKxFPpUtaAMMSC7xlNFWabSLVbi_w0B5wmP6gKDIZ6NbQ=w2560-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
            alt="avatar"
          />
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

          <p className="thumb-nail-sub">maantano@google.co.kr</p>
          <div className="flex flex-type items-center">
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
                <path d="m9.4 18.4-.7-.7 5.6-5.6-5.7-5.7.7-.7 6.4 6.4-6.3 6.3z"></path>
              </svg>
            </div>
          </div>
          <div className="flex flex-type justify-center items-center flex-row">
            <a
              className="thumb-nail-sub w-auto email"
              href="https://velog.io/@maantano"
              target="_blank"
            >
              https://velog.io/@maantano
            </a>
            <a className="other-link" role="button" href="#">
              외 링크 1개
            </a>
            {/* <div className="other-link">외 링크 1개</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
