import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reset, toggle } from "../../redux/feature/inputSlice";
import "./center.css";
import Toast from "./Toast";
import {
  addDoc,
  collection,
} from "firebase/firestore";
import { db } from "../../firebase-config";
const Center = () => {
  const dispatch = useDispatch();
  const inputShow = useSelector((state) => state.inputReducer.value);
  const [toast, setToast] = useState(false);
  const [description, setDescription] = useState();
  const usersCollectionRef = collection(db, "feedback");
  const createUsers = async () => {
    const currentDate = new Date();
    await addDoc(usersCollectionRef, {
      description,
      date: currentDate,
    });
    setDescription("");
  };

  const onClickBtn = (e) => {
    e.preventDefault();
    dispatch(reset());
    setToast(true);
    createUsers();
  };

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
                    <span className="gsst_a">
                      <span className="gsok_a gsst_e"></span>
                    </span>
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
                      readOnly
                      spellCheck="false"
                      placeholder="이력서 피드백 부탁드려도 될까요?"
                      aria-label="이력서 피드백 부탁드려도 될까요??"
                      aria-haspopup="false"
                      aria-autocomplete="list"
                      className="ytd-searchbox"
                      dir="ltr"
                    />

                    {inputShow && (
                      <div className="inputShow">
                        <div
                          className="rounded-lg border bg-card text-card-foreground shadow-sm"
                          data-v0-t="card"
                        >
                          <div className="flex flex-col space-y-1.5 p-6 pt-10">
                            <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                              이력서의 피드백을 부탁드립니다.
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              이력서 형식, 개발 가이드, 쓴소리, 맛집, 영화 추천,
                              뭐든지 감사히 받겠습니다!
                            </p>
                          </div>
                          <div className="p-6 pt-3 pb-5">
                            <form className="flex flex-col gap-4">
                              <textarea
                                onChange={(e) => setDescription(e.target.value)}
                                className="text-black flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 min-h-[250px]"
                                placeholder=":)"
                              ></textarea>
                            </form>
                          </div>
                          <button
                            onClick={onClickBtn}
                            className="inputBtn bg-slate-700 bg-opacity-70 inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 ml-[80%]"
                          >
                            전송
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                  {toast && (
                    <Toast
                      className="show flex justify-center items-center"
                      setToast={setToast}
                      text="큰힘이 되었습니다. 정말 감사합니다!💪😀"
                    />
                  )}
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
