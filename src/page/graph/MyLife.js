import React, { useState } from "react";
import { ResponsiveLine } from "@nivo/line";
import Graph from "./Graph";

import img0 from "../../asset/myLife/0.JPG";
import img2013 from "../../asset/myLife/2013.jpeg";
import img2016 from "../../asset/myLife/2017.JPG";
import img2017 from "../../asset/myLife/2017.JPG";
import img2018 from "../../asset/myLife/2018.JPG";
import img2019 from "../../asset/myLife/2019.JPG";
import img2023 from "../../asset/myLife/2023.JPG";

import newImg2021 from "../../asset/myLife/newImg2021.png";
import newImg2022 from "../../asset/myLife/newImg2022.png";
import newImg2023 from "../../asset/myLife/newImg2023.png";
import img2024 from "../../asset/myLife/2024.png";
import myDevLife from "../../asset/myLife/myDevLife.png";
import america from "../../asset/myLife/america.JPG";
import certifi from "../../asset/myLife/certificate.png";

const data = {
  id: "myLife",
  data: [
    {
      x: "0",
      y: 0,
      title: "start",
      thumb: img0,
    },
    {
      x: "2013",
      y: 60,
      title: "졸업을 했다. 어른이다. 제대로 달려보자.",
      title1: "졸업을 했다.",
      title2: "어른이다.",
      title3: "제대로 달려보자.",
      thumb: img2013,
    },
    {
      x: "2016",
      y: 80,
      title: "전역 후 혼자 미국 캐나다 배낭 여행",
      title1: "군대...많은 일이 있었다...ㅎ",
      title2: "20살 넘으면 어른인줄 알았는데 전역했으니 이제는 진짜 어른이다.",
      title3: "일단 여행부터 다녀오자. (나 홀로 미국 캐나다 배낭여행)",
      thumb: america,
    },
    {
      x: "2017",
      y: 70,
      title: "의류 사업까지 도전",
      title1: "대학생활도 너무 재밌는데, 재밌기만 해도 되는거 맞아...?",
      title2: "흠 나 옷 엄청 좋아하고, 꽤 잘 아는거같은데 사업도 한번 해봐??",
      title3: "의류 사업 실행 하지만 학업 놓치면 절대 안돼",
      thumb: img2019,
    },
    {
      x: "2018",
      y: 50,
      title:
        "졸업과 취직 시기가 다가올수록 내가 부족한것드만 느껴지고 결국 휴학을 결정",
      title1: "의류 사업은 손해보지 않고 잘 정리했다..ㅎ",
      title2:
        "근데 이제 취업도 해야하는데, 나 너무 부족하기만 한거 같은데,,나는 망한거같아...",
      title3: "휴학 결정",
      thumb: img2018,
    },

    {
      x: "2019",
      y: 80,
      title:
        "1. 휴학 기간동안 정보처리기사, SQLD, OCP 자격증을 취득하면서 알찬 휴학기간을 보냈다고 느낌 2. 졸업 전 취직까지 성공",
      title1:
        "하루 12시간은 기본으로 공부해야지, 개발은 엉덩이 싸움이라고 누군가는 말했지..",
      title2:
        "OCP, 정보처리기사, SQLD, 내 사이트 만들기, 프로젝트 경험과 자격증 취득까지 했으니 취업 도전 해보자!",
      title3:
        "졸업전에 취직이 되버렸네..? 나 열심히했었나..? 나 이제 직장인 되는건가...?",
      thumb: certifi,
    },
    {
      x: "2021",
      y: 90,
      title:
        "첫 회사이고 돈도 벌어보면서, 사회인으로서 또 개발자로서 은근한 성장을 하고 있다고 느끼고 행복한 회사생활을 함",
      title1:
        "이게 진짜 개발이었구나...내가 한 개발들은 뭐지...실무는 많이 다르네",
      title2:
        "20살 넘어서, 전역해서가 어른이 아니었다..사회생활을 해야 어른이었다..어른들의 삶이란..",
      title3:
        "첫 회사인데 칭찬도 많이 받고 사람들하고도 너무 잘맞고 배우는것도 많아서 재밌는것 같다 회사생활",
      thumb: newImg2022,
    },
    {
      x: "2022",
      y: 60,
      title:
        "여러가지 프로젝트를 하다보니 내가 얼마나 부족한지 느끼기하면서, 안주하고 있다는 불안감에 삶이 힘들어짐",
      title1:
        "이제 입사한지도 좀 지나서 진급도 했는데,,나는 너무 부족하기만 한것같다.",
      title2: "알고리즘 공부도, 개발 공부도 하는데 안느는것만 같다..",
      title3: "더 열심히 해야지, 그냥 무조건 내 앞에 있는거 하는거야.",
      thumb: img2023,
    },

    {
      x: "2023",
      y: 80,
      title:
        "새로운 도전과 나에게 휴식을 주기 위한 퇴사를 결정하고 3달간 유럽여행을 다녀옴",
      title1: "나는 나에게 새로운 도전이 필요한 시기라는 것을 알게 되었다.",
      title2: "다른 서비스도 경험해보고 싶고, 새로운 사람들도 만나보고싶다.",
      title3: "그동안 고생 많이 했으니까 일단 여행부터 가자.(3개월 유럽여행)",
      thumb: newImg2023,
    },
    {
      x: "2024",
      y: 100,
      title:
        "개인 프로젝트와 공부, 다시 취직을 하기 위한 시간이 나에겐 필요했다는 것을 인지하고 즐거운 성장 시간을 보내고 있는 중",
      title1: "이제 다시 시작이야.",
      title2:
        "나에게 필요했던 시간이라고 생각한다. 알고리즘 공부, 부족했던 개발 공부, 신기술들을 찍먹이든 그동안 궁금했던것들 공부해보자 ",
      title3: "올해는 다시 직장인으로 또 다시 어른이 될 것이다.",
      thumb: img2024,
    },
  ],
};

const MyLife = () => {
  const [tempData, setTempData] = useState([data]);

  return (
    <div className="flex mt-8 flex-col">
      <div className="text-gray-300 text-3xl">민경언의 인생곡선</div>
      <Graph data={tempData} />
      <img className="ml-4" src={myDevLife} alt="myDevLife" />
    </div>
  );
};

export default MyLife;
