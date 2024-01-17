import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../redux/feature/inputSlice";
import "./center.css";
const Center = () => {
  const dispatch = useDispatch();
  const inputShow = useSelector((state) => state.inputReducer.value);
  // const { value: inputOpen, onClickInput, reset } = useInput();
  // const router = useRouter();
  // const goTo = () => {
  //   router.push("/board/:1000");
  //   console.log("onclick!!!!");
  // };
  // const navigateRoute = () => {
  //   router.push("/routerTest");
  //   dispatch(reset());
  // };

  return (
    <div>
      <div className="search-container">
        <div className="search">
          <div className="search-form">
            {inputShow && (
              <div className="seacthIcon">
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    fill: "currentcolor",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    enableBackground="new 0 0 24 24"
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
                    <path d="m20.87 20.17-5.59-5.59C16.35 13.35 17 11.75 17 10c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.75 0 3.35-.65 4.58-1.71l5.59 5.59.7-.71zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path>
                  </svg>
                </div>
              </div>
            )}

            {/*  */}
            <div className={`search-box ${inputShow && "selected-box"}`}>
              <div className="search-input">
                <div className="input-box">
                  <div className="input-box-b flex justify-center items-center">
                    <a className="gsst_a" href="#">
                      <span className="gsok_a gsst_e"></span>
                    </a>
                  </div>
                  <div className="input-box-c">
                    <input
                      onClick={() => dispatch(toggle())}
                      id="search"
                      autoCapitalize="none"
                      autoComplete="off"
                      autoCorrect="off"
                      name="search_query"
                      tabIndex={0}
                      // type="none"
                      readOnly
                      spellCheck="false"
                      placeholder="저에 대해서 궁금하신 점은?"
                      aria-label="저에 대해서 궁금하신 점은?"
                      aria-haspopup="false"
                      aria-autocomplete="list"
                      className="ytd-searchbox"
                      dir="ltr"
                    />

                    {inputShow && (
                      <div className="inputShow">
                        <ul className="">
                          <li className="">
                            <div>
                              <span className="searchItem">
                                제 인생 그래프입니다.
                              </span>
                            </div>
                          </li>
                          {/* <Link href={`/board/1000`}> */}
                          {/* <Link href={"/routerTest"}> */}
                          <li className="">
                            {/* <li className="" onClick={navigateRoute}> */}
                            <div>
                              <span className="searchItem">1234</span>
                            </div>
                          </li>
                          {/* </Link> */}

                          <li className="">
                            <div>
                              <span className="searchItem">1234</span>
                            </div>
                          </li>

                          <li className="">
                            <div>
                              <span className="searchItem">1234</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="search-icon" aria-label="검색">
            <div className="search-icon-box">
              <div className="search-icon-shape">
                <div style={{ width: "100%", height: "100%", fill: "white" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    enableBackground="new 0 0 24 24"
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
                    <path d="m20.87 20.17-5.59-5.59C16.35 13.35 17 11.75 17 10c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.75 0 3.35-.65 4.58-1.71l5.59 5.59.7-.71zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </button>
          <div className="micro-icon ml-3">
            <div className="inline-block">
              <div className="flex">
                <button
                  className="micro-btn"
                  aria-label="음성으로 검색"
                  title=""
                >
                  <div style={{ width: "24px", height: "24px" }}>
                    <div
                      className="micro-icon-box"
                      style={{ width: "100%", height: "100%", fill: "white" }}
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
                        <path d="M12 3c-1.66 0-3 1.37-3 3.07v5.86c0 1.7 1.34 3.07 3 3.07s3-1.37 3-3.07V6.07C15 4.37 13.66 3 12 3zm6.5 9h-1c0 3.03-2.47 5.5-5.5 5.5S6.5 15.03 6.5 12h-1c0 3.24 2.39 5.93 5.5 6.41V21h2v-2.59c3.11-.48 5.5-3.17 5.5-6.41z"></path>
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Center;
