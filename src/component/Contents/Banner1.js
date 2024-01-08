import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import "./Main.css";
import "./Banner1.css";
import { motion } from "framer-motion";

import { useDispatch, useSelector } from "react-redux";
import { navi } from "../../redux/feature/currentSlice";

const Wrap = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid #3f3f3f;
`;
const Item = styled.div`
  cursor: pointer;
  position: relative;
  height: 100%;
  flex-grow: 1;
  text-align: center;
  min-width: 48px;
  margin-right: 24px;
`;

const Text = styled.span`
  line-height: 50px;
  justify-items: center;
  color: #aaa;
  &.tab-selected {
    color: #f1f1f1;
  }
  font-family: "Roboto", "Arial", sans-serif;
  font-size: 12px;
  font-weight: 500;
`;

const UnderLine = styled(motion.div)`
  position: absolute;
  bottom: 1px;
  left: 0;
  right: 0;
  height: 1px;
  background-color: white;
`;

const Banner1 = () => {
  // useEffect(() => {
  //   // 클라이언트에서만 실행되는 코드
  //   const screenWidth = window.innerWidth;
  //   const screenHeight = window.innerHeight;

  //   console.log("screenWidth ===>", screenWidth);
  //   console.log("screenHeight ===>", screenHeight);
  // }, []); // []는 componentDidMount와 동일하게 컴포넌트가 마운트될 때 한 번만 실행

  // // 나머지 컴포넌트 로직
  // const [selectTab, setSelectTab] = useState(0);
  // const [sliderStyle, setSliderStyle] = useState({
  //   width: "48px",
  //   transform: "translateX(132.5px)",
  // });

  // const handleSelectTab = (idx) => {
  //   setSelectTab(idx);
  // };

  // const bannerRef = useRef(null);

  // useEffect(() => {
  //   const tab = bannerRef.current?.querySelector(
  //     `.banner-item:nth-child(${selectTab + 1})`
  //   );

  //   if (tab) {
  //     const tabRect = tab.getBoundingClientRect();
  //     const newPoint = tabRect.left - 220;

  //     setSliderStyle({
  //       width: `${tabRect.width}px`,
  //       transform: `translateX(${newPoint}px)`,
  //     });
  //   }
  // }, [selectTab]);

  // ================================================================
  const tabs = ["홈", "동영상", "Shorts", "라이브", "팟캐스트", "재생목록"];
  const dispatch = useDispatch();
  // const curIdx = useSelector((state) => state.currentReducer.index);

  const [selectedIndex, setIndex] = useState(0);
  const onClickIndx = (idx) => {
    setIndex(idx);
    dispatch(navi(idx));
  };
  return (
    <Wrap>
      {tabs.map((item, idx) => {
        return (
          <div key={idx}>
            <Item onClick={() => onClickIndx(idx)}>
              <Text className={selectedIndex === idx ? "tab-selected" : ""}>
                {item}
              </Text>
              {selectedIndex === idx && <UnderLine layoutId="underline" />}
            </Item>
          </div>
        );
      })}
    </Wrap>

    // <div className="banner-block" ref={bannerRef}>
    //   <div className="banner-mx banner-menu">
    //     {tabs.map((item, idx) => {
    //       return (
    //         <div
    //           key={idx}
    //           className={`banner-item tab ${
    //             selectTab === idx ? "tab-selected" : ""
    //           } `}
    //           onClick={() => handleSelectTab(idx)}
    //         >
    //           {item}

    //           <div
    //             className={`tab-bar ${
    //               selectTab === idx ? "tab-bar-selected" : ""
    //             } `}
    //           ></div>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
  );
};

export default Banner1;
