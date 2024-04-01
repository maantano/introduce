import React from "react";
import classes from "./Portfolio.module.css";
import { Link, useNavigate } from "react-router-dom";
import webuilder from "../../../asset/webuilder/main_visual_text_01.png";
import poterzone from "../../../asset/porterzone/porterzoneLogo.png";
import wehago from "../../../asset/platform/platform-logo.png";
import cardPicker from "../../../asset/etc/cardPicker.png";
import chungsol from "../../../asset/etc/chungsol.png";
const Portfolio = () => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,

      behavior: "instant",
    });
  };

  const handleLinkClick = (to) => (event) => {
    event.preventDefault();
    scrollToTop();
    navigate(to);
  };

  return (
    <div className={`${classes.BannerDiv} max-w-[1500px] flex-wrap `}>
      <Link href="/webuilder" onClick={handleLinkClick("/webuilder")}>
        <div className={`${classes.HomeDiv}`}>
          <img
            className={`${classes.thumbImg} p-8 object-contain flex justify-center items-center border border-solid border-gray-100 border-opacity-30`}
            src={webuilder}
            alt="123"
          />
          <p className="text-"></p>
          <p className={classes.thumbTitle}>
            Webuilder, 클릭 몇번으로 쇼핑몰이 완성
          </p>
          <p className={classes.thumbWatch}>조회수 3만회 2개월전</p>
        </div>
      </Link>
      <Link href="/porterzone" onClick={handleLinkClick("/porterzone")}>
        <div className={classes.HomeDiv}>
          <img
            className={`${classes.thumbImg} p-8 object-contain flex justify-center items-center border border-solid border-gray-100 border-opacity-30`}
            src={poterzone}
            alt="123"
          />
          <p className="text-"></p>
          <p className={classes.thumbTitle}>
            기업이 필요한 전자상거래의 모든 것, 세상에 하나뿐인 B2B 이커머스
            플랫폼
          </p>
          <p className={classes.thumbWatch}>조회수 2만회 1개월 전</p>
        </div>
      </Link>
      <Link href="/platform" onClick={handleLinkClick("/platform")}>
        <div className={classes.HomeDiv}>
          <img
            className={`${classes.thumbImg} p-14 object-contain flex justify-center items-center border border-solid border-gray-100 border-opacity-30`}
            src={wehago}
            alt="123"
          />
          <p className="text-"></p>
          <p className={classes.thumbTitle}>이것은 가장 완벽한 구축이다.</p>
          <p className={classes.thumbWatch}>조회수 1.6만회 3개월 전</p>
        </div>
      </Link>
      <Link href="/cardrecommend" onClick={handleLinkClick("/cardrecommend")}>
        <div className={classes.HomeDiv}>
          <img
            className={`${classes.thumbImg} p-8 object-contain flex justify-center items-center border border-solid border-gray-100 border-opacity-30`}
            src={cardPicker}
            alt="123"
          />

          <p className="text-"></p>
          <p className={classes.thumbTitle}>
            내가 가장 필요한 카드는? 카드 체리피커가 됩시다.
          </p>
          <p className={classes.thumbWatch}>조회수 7천회 3주 전</p>
        </div>
      </Link>
      <Link href="/chungsol" onClick={handleLinkClick("/chungsol")}>
        <div className={classes.HomeDiv}>
          <img
            className={`${classes.thumbImg} p-8 object-contain flex justify-center items-center border border-solid border-gray-100 border-opacity-30`}
            src={chungsol}
            alt="123"
          />
          <p className="text-"></p>
          <p className={classes.thumbTitle}>하루만에 만든 노인 복지 사이트 </p>
          <p className={classes.thumbWatch}>조회수 6천회 2주전</p>
        </div>
      </Link>
      <a href={"http://drag-event.vercel.app"} target="_blank">
        <div className={classes.HomeDiv}>
          <div
            className={`${classes.thumbImg} p-8 object-contain flex justify-center items-center border border-solid border-gray-100 border-opacity-30 text-xl`}
            alt="123"
          >
            Drag Event Practice
          </div>
          <p className="text-"></p>
          <p className={classes.thumbTitle}>Drag Event (react-beautiful-dnd)</p>
          <p className={classes.thumbWatch}>조회수 1천회 2주전</p>
        </div>
      </a>
      <Link href="/slack" onClick={handleLinkClick("/slack")}>
        <div className={classes.HomeDiv}>
          {/* <img
            className={`${classes.thumbImg} p-8 object-contain flex justify-center items-center border border-solid border-gray-100 border-opacity-30`}
            src={chungsol}
            alt="123"
          /> */}
          <div
            className={`${classes.thumbImg} p-8 object-contain flex justify-center items-center border border-solid border-gray-100 border-opacity-30 text-2xl`}
          >
            SLACK Messenger
          </div>
          <p className="text-"></p>
          <p className={classes.thumbTitle}>Slack Messenger (Socket) </p>
          <p className={classes.thumbWatch}>조회수 3천회 1주전</p>
        </div>
      </Link>
    </div>
  );
};

export default Portfolio;
