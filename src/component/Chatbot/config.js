import { createChatBotMessage } from "react-chatbot-kit";
import ChatbotHeader from "./ChatbotHeader";
import Chatmessage from "./Chatmessage";
import Widget from "./Widget";
import InitOption from "./InitOption";
import IntroduceDetail from "./Introduce/IntroduceDetail";
import IntroduceMyself from "./Introduce/IntroduceMyself";
import MoreQuestion from "./Introduce/MoreQuestion";
import Typography from "@mui/joy/Typography";
import Options from "./Options";
import IntroducePortfolio from "./Introduce/IntroducePortfolio";

const config = {
  initialMessages: [
    createChatBotMessage(
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
      widgetFunc: (props) => (
        <div className="mb-24">
          <IntroduceMyself {...props} />
          <InitOption {...props} />
        </div>
      ),
    },
    {
      widgetName: "introducePortfolio",
      widgetFunc: (props) => (
        <div className="mb-24">
          <IntroducePortfolio {...props} />,
          <InitOption {...props} />
        </div>
      ),
    },

    {
      widgetName: "introduceDetail",
      widgetFunc: (props) => (
        <div className="mb-24">
          <IntroduceDetail {...props} />,
          <InitOption {...props} />
        </div>
      ),
    },
    {
      widgetName: "moreQuestion",
      widgetFunc: (props) => (
        <div className="mb-24">
          <MoreQuestion {...props} ops />,
          <InitOption {...props} />
        </div>
      ),
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
