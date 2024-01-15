import React from "react";
import classes from "./Study.module.css";
const Study = () => {
  return (
    <div className={classes.BannerDiv}>
      <div className={classes.videoDiv}>
        <img
          className={classes.thumbImg}
          src="https://i.ytimg.com/vi/MJyadEmZVJ8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAfBxUH_J9WpSnHNl15TqM0dFsg_w"
          alt="123"
        />
        <p className="text-"></p>
        <p className={classes.thumbTitle}>
          Study! 새해 첫 히든풋볼, 옛날 감성으로 시작합니다! ㅣ히든풋볼ㅣ월요일
        </p>
        <p className={classes.thumbWatch}>조회수 없음 1분 전</p>
      </div>
      <div className={classes.videoDiv}>
        <img
          className={classes.thumbImg}
          src="https://i.ytimg.com/vi/MJyadEmZVJ8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAfBxUH_J9WpSnHNl15TqM0dFsg_w"
          alt="123"
        />
        <p className="text-"></p>
        <p className={classes.thumbTitle}>
          Study! 새해 첫 히든풋볼, 옛날 감성으로 시작합니다! ㅣ히든풋볼ㅣ월요일
        </p>
        <p className={classes.thumbWatch}>조회수 없음 1분 전</p>
      </div>
    </div>
  );
};

export default Study;
