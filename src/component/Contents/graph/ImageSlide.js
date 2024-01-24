import React, { useState } from "react";
import styled from "styled-components";

import { AnimatePresence, motion } from "framer-motion";
import { wrap } from "popmotion";
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
  width: 250px;
  height: 250px;
  overflow: hidden;
`;

const Box = styled(motion.img)`
  position: absolute;
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background-color: transparent;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const PrevNextBtn = styled.div`
  background-color: #212121;
  border-radius: 24px;
  box-shadow: 0 4px 4px rgba(255, 255, 255, 0.2),
    0 0 8px rgba(255, 255, 255, 0.2);
  color: #fff;
  cursor: pointer;
  height: 30px;
  width: 30px;
  z-index: 999;
`;

const boxVariants = {
  entry: (back) => ({
    x: back ? -300 : 300,
    opacity: 0,
    scale: 0,
  }),
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.5 },
  },
  exit: (back) => ({
    x: back ? 300 : -300,
    opacity: 0,
    scale: 0,
    transition: { duration: 0.5 },
  }),
};

const ImageSlide = ({ data }) => {
  const [visible, setVisible] = useState(0);
  const imageIndex = wrap(0, data.length, visible);
  const [back, setBack] = useState(false);
  const nextPlease = () => {
    setBack(false);
    setVisible((prev) =>
      prev === data.length - 1 ? data.length - 1 : prev + 1
    );
  };
  const prevPlease = () => {
    setBack(true);
    setVisible((prev) => (prev === 0 ? 0 : prev - 1));
  };

  return (
    <div>
      <Wrapper>
        <PrevNextBtn
          onClick={prevPlease}
          className="flex flex-col items-center justify-center "
        >
          <div
            style={{
              width: "24px",
              height: "24px",
              fill: "currentcolor",
            }}
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
              <path d="M14.96 18.96 8 12l6.96-6.96.71.71L9.41 12l6.25 6.25-.7.71z"></path>
            </svg>
          </div>
        </PrevNextBtn>
        <SlideWrap>
          <AnimatePresence custom={back}>
            <Box
              custom={back}
              variants={boxVariants}
              src={data[imageIndex]}
              initial="entry"
              animate="center"
              exit="exit"
              key={visible}
            />
          </AnimatePresence>
        </SlideWrap>
        <PrevNextBtn
          onClick={nextPlease}
          className="flex flex-col items-center justify-center "
        >
          <div
            style={{
              width: "24px",
              height: "24px",
              fill: "currentcolor",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
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
              <path d="m9.4 18.4-.7-.7 5.6-5.6-5.7-5.7.7-.7 6.4 6.4-6.3 6.3z"></path>
            </svg>
          </div>
        </PrevNextBtn>
      </Wrapper>
    </div>
  );
};

export default ImageSlide;
