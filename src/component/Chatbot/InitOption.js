import React from "react";

import "./Options.css";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
// import { wrap } from "module";
const InitOption = (props) => {
  const options = [
    {
      text: "제 소개",
      handler: props.actionProvider.handleIntroduceMyself,
      id: 1,
    },
    {
      text: "경력 소개",
      handler: props.actionProvider.handleIntroduceDetail,
      id: 2,
    },
    { text: "인생 그래프", handler: () => {}, id: 3 },
    {
      text: "포트폴리오",
      handler: props.actionProvider.handlePortfolio,
      id: 4,
    },
    { text: "질문 하기", handler: props.actionProvider.handleMoreQ, id: 5 },
  ];

  const buttonsMarkup = options.map((option) => (
    <Button
      variant="outlined"
      sx={{
        margin: "5px",
        padding: "10px",
        background: "transparent",
        border: "1px solid #969696c2",
        borderRadius: "25px",
      }}
      key={option.id}
      onClick={option.handler}
    >
      <Typography level="title-sm">{option.text}</Typography>
    </Button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default InitOption;
