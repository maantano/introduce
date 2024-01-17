//
// 자기 소개
// 경력 소개
// 인생그래프 페이지 이동
// 포트폴리오 페이지 이동
// 더 질문 하기

import { createChatBotMessage, createCustomMessage } from "react-chatbot-kit";
import ChatbotHeader from "./ChatbotHeader";
import Chatmessage from "./Chatmessage";
import ActionProvider from "./ActionProvider";
import Widget from "./Widget";
import InitOption from "./InitOption";
import IntroduceDetail from "./Introduce/IntroduceDetail";
import IntroduceMyself from "./Introduce/IntroduceMyself";
import MoreQuestion from "./Introduce/MoreQuestion";
import Typography from "@mui/joy/Typography";
import Options from "./Options";
import IntroducePortfolio from "./Introduce/IntroducePortfolio";
// const optionBtn = (
//   <div
//     className="border border-solid text-black w-1/3 p-2 text-center rounded-3xl"
//     style={{ borderColor: "#969696c2" }}
//   >
//     <Typography level="title-sm" onClick={alert("1")}>
//       옵션 보기
//     </Typography>
//   </div>
// );
const config = {
  initialMessages: [
    createChatBotMessage(
      // "안녕하세요! 민경언의 챗봇 입니다.⌛️처음으로 돌아가길 원하시면 '다시 시작'을 입력해 주세요."
      <Typography level="title-md">
        안녕하세요! 민경언의 챗봇 입니다. 궁금하신 내용을 클릭해주세요.
      </Typography>,

      {
        widget: "intiOption",
      }
    ),
  ],
  widgets: [
    {
      widgetName: "dogPicture",
      widgetFunc: (props) => <Widget {...props} />,
    },
    {
      widgetName: "intiOption",
      widgetFunc: (props) => (
        <>
          <InitOption {...props} />
        </>
      ),
    },
    {
      widgetName: "introduceMySelf",
      widgetFunc: (props) => <IntroduceMyself {...props} />,
    },
    {
      widgetName: "introducePortfolio",
      widgetFunc: (props) => <IntroducePortfolio {...props} />,
    },

    {
      widgetName: "introduceDetail",
      widgetFunc: (props) => <IntroduceDetail {...props} />,
    },
    {
      widgetName: "moreQuestion",
      widgetFunc: (props) => <MoreQuestion {...props} ops />,
    },
    {
      widgetName: "showOption",
      widgetFunc: (props) => <Options {...props} />,
    },
  ],
  customComponents: {
    header: () => <ChatbotHeader />,
    botAvatar: (props) => <div {...props} />,
    userAvatar: (props) => <div {...props} />,
    botChatMessage: (props) => <Chatmessage {...props} isBot={true} />,
    userChatMessage: (props) => <Chatmessage {...props} />,
  },
};

export default config;
