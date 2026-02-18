import React from "react";
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
  // const tabs = ["포트폴리오", "개인공부", "인생 그래프", "경력 한눈에 보기"];
  const tabs = ["포트폴리오", "인생 그래프", "경력 한눈에 보기"];
  const dispatch = useDispatch();
  const selectIndex = useSelector((state) => state.currentReducer.selectIndex);
  const onClickIndx = (idx) => {
    dispatch(navi(idx));
  };
  return (
    <Wrap>
      {tabs.map((item, idx) => {
        return (
          <div key={idx}>
            <Item onClick={() => onClickIndx(idx)}>
              <Text className={selectIndex === idx ? "tab-selected" : ""}>
                {item}
              </Text>
              {selectIndex === idx && <UnderLine layoutId="underline" />}
            </Item>
          </div>
        );
      })}
    </Wrap>
  );
};

export default Banner1;
