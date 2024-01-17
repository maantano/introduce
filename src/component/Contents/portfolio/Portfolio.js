import React from "react";
import classes from "./Portfolio.module.css";
import { Link, useNavigate } from "react-router-dom";
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
    <div className={classes.BannerDiv}>
      <Link href="/webuilder" onClick={handleLinkClick("/webuilder")}>
        <div className={classes.HomeDiv}>
          <img
            className={classes.thumbImg}
            src="https://i.ytimg.com/vi/MJyadEmZVJ8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAfBxUH_J9WpSnHNl15TqM0dFsg_w"
            alt="123"
          />
          <p className="text-"></p>
          <p className={classes.thumbTitle}>
            Home! 새해 첫 히든풋볼, 옛날 감성으로 시작합니다! ㅣ히든풋볼ㅣ월요일
          </p>
          <p className={classes.thumbWatch}>조회수 없음 1분 전</p>
        </div>
      </Link>
      <Link href="/porterzone" onClick={handleLinkClick("/porterzone")}>
        <div className={classes.HomeDiv}>
          <img
            className={classes.thumbImg}
            src="https://i.ytimg.com/vi/MJyadEmZVJ8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAfBxUH_J9WpSnHNl15TqM0dFsg_w"
            alt="123"
          />
          <p className="text-"></p>
          <p className={classes.thumbTitle}>
            Home! 새해 첫 히든풋볼, 옛날 감성으로 시작합니다! ㅣ히든풋볼ㅣ월요일
          </p>
          <p className={classes.thumbWatch}>조회수 없음 1분 전</p>
        </div>
      </Link>
      <Link href="/platform" onClick={handleLinkClick("/platform")}>
        <div className={classes.HomeDiv}>
          <img
            className={classes.thumbImg}
            src="https://i.ytimg.com/vi/MJyadEmZVJ8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAfBxUH_J9WpSnHNl15TqM0dFsg_w"
            alt="123"
          />
          <p className="text-"></p>
          <p className={classes.thumbTitle}>
            Home! 새해 첫 히든풋볼, 옛날 감성으로 시작합니다! ㅣ히든풋볼ㅣ월요일
          </p>
          <p className={classes.thumbWatch}>조회수 없음 1분 전</p>
        </div>
      </Link>
      <Link href="/cardrecommend" onClick={handleLinkClick("/cardrecommend")}>
        <div className={classes.HomeDiv}>
          <img
            className={classes.thumbImg}
            src="https://i.ytimg.com/vi/MJyadEmZVJ8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAfBxUH_J9WpSnHNl15TqM0dFsg_w"
            alt="123"
          />
          <p className="text-"></p>
          <p className={classes.thumbTitle}>
            Home! 새해 첫 히든풋볼, 옛날 감성으로 시작합니다! ㅣ히든풋볼ㅣ월요일
          </p>
          <p className={classes.thumbWatch}>조회수 없음 1분 전</p>
        </div>
      </Link>
    </div>
  );
};

export default Portfolio;
