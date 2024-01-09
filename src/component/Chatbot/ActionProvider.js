// import React from "react";

// const ActionProvider = ({ createChatBotMessage, setState, children }) => {
//   return (
//     <div>
//       {React.Children.map(children, (child) => {
//         return React.cloneElement(child, {
//           actions: {},
//         });
//       })}
//     </div>
//   );
// };

// export default ActionProvider;

// in ActionProvider.jsx
import React from "react";

import Typography from "@mui/joy/Typography";
const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage("Hello. Nice to meet you.");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleDog = () => {
    const botMessage = createChatBotMessage(
      "Here's a nice dog picture for you!",
      {
        widget: "dogPicture",
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleIntroduceMyself = () => {
    const botMessage = createChatBotMessage(
      <Typography level="title-md">
        안녕하세요, 민경언입니다.
        <br />
        <br />
        ⌛️처음으로 돌아가길 원하시면 '다시 시작'을 입력해 주세요.
      </Typography>,
      {
        widget: "introduceMySelf",
      }
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleIntroduceDetail = () => {
    // const botMessage = createChatBotMessage("경력 소개입니다.", {
    //   widget: "introduceDetail",
    // });
    const botMessage = createChatBotMessage(
      <Typography level="title-md">
        2019.07 ~2023.03까지
        <br />
        3년9개월의 경력이 있습니다.
        <br />
        <br />
        ⌛️처음으로 돌아가길 원하시면 '다시 시작'을 입력해 주세요.
      </Typography>,
      {
        widget: "introduceDetail",
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleMoreQ = () => {
    const botMessage = createChatBotMessage(
      <Typography level="title-md">
        질문과 이메일을 남겨주시면 답변드리겠습니다.
      </Typography>,
      {
        widget: "moreQuestion",
        delay: 500,
      }
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const optionShow = () => {
    const botMessage = createChatBotMessage(
      <Typography level="title-md">
        ⌛️처음으로 돌아가길 원하시면 '다시 시작'을 입력해 주세요.
      </Typography>,
      {
        widget: "showOption",
      }
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleDog,
            handleIntroduceMyself,
            handleIntroduceDetail,
            handleMoreQ,
            optionShow,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;

// class ActionProvider {
//   constructor(createChatbotMessage, setStateFunc, createClientMessage) {
//     this.createChatbotMessage = createChatbotMessage;
//     this.setState = setStateFunc;
//     this.createClientMessage = createClientMessage;
//   }
// }

// export default ActionProvider;
