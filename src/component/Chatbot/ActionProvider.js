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
  const handlePortfolio = () => {
    const botMessage = createChatBotMessage(
      <Typography level="title-md">
        제 포트폴리오 입니다.
        <br />
        <br />
        ⌛️처음으로 돌아가길 원하시면 '다시 시작'을 입력해 주세요.
      </Typography>,
      {
        widget: "introducePortfolio",
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
            handlePortfolio,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
