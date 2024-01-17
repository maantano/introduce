import React, { useState } from "react";
import { ResponsiveLine } from "@nivo/line";
import Graph from "./Graph";

import img0 from "../../asset/myLife/0.JPG";
import img2013 from "../../asset/myLife/2013.jpeg";
import img2017 from "../../asset/myLife/2017.JPG";
import img2018 from "../../asset/myLife/2018.JPG";
import img2019 from "../../asset/myLife/2019.JPG";
import img2021 from "../../asset/myLife/2021.png";
import img2022 from "../../asset/myLife/2022.png";
import img2023 from "../../asset/myLife/2023.JPG";
import img2023_3 from "../../asset/myLife/2023_3.png";
import img2023_4 from "../../asset/myLife/2023_4.png";
import ImageSlide from "./ImageSlide";

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
      title:
        "대학교 입학 - 소프트웨어학과, 대학생이 된것에 은근한 기대감이 있었음",
      thumb: img2013,
    },
    {
      x: "2017",
      y: 70,
      title: "전공에서 배우는 것들이 잘 맞는다 생각하고 즐겁게 학교를 다님",
      thumb: img2017,
    },
    {
      x: "2018",
      y: 30,
      title:
        "졸업과 취직 시기가 다가올수록 내가 부족한것드만 느껴지고 결국 휴학을 결정",
      thumb: img2018,
    },

    {
      x: "2019",
      y: 70,
      title:
        "1. 휴학 기간동안 정보처리기사, SQLD, OCP 자격증을 취득하면서 알찬 휴학기간을 보냈다고 느낌 2. 졸업 전에 취직까지 성공",
      thumb: img2019,
    },
    {
      x: "2021",
      y: 80,
      title:
        "첫 회사이고 돈도 벌어보면서, 사회인으로서 또 개발자로서 은근한 성장을 하고 있다고 느끼고 행복한 회사생활을 함",
      thumb: img2021,
    },
    {
      x: "2022",
      y: 60,
      title:
        "여러가지 프로젝트를 하다보니 내가 얼마나 부족한지 느끼기하면서, 안주하고 있다는 불안감에 삶이 힘들어짐",
      thumb: img2022,
    },

    {
      x: "2023",
      y: 80,
      title:
        "새로운 도전과 나에게 휴식을 주기 위한 퇴사를 결정하고 3달간 유럽여행을 다녀옴",
      thumb: img2023_3,
    },
    {
      x: "2024",
      y: 100,
      title:
        "개인 프로젝트와 공부, 다시 취직을 하기 위한 시간이 나에겐 필요했다는 것을 인지하고 즐거운 성장 시간을 보내고 있는 중",
      thumb: "",
    },
  ],
};

const MyLife = () => {
  const [tempData, setTempData] = useState([data]);

  return (
    <div className="flex mt-8">
      <div className="w-24 p-4 text-7xl">민경언의 인생곡선</div>
      <Graph data={tempData} unit={"Temperature (°C)"} color={"Lightcoral"} />
    </div>
  );
};

export default MyLife;
