import React, { useEffect, useState } from "react";
import classes from "./Study.module.css";

import { useQuery } from "react-query";

import YoutubeError from "../../Error/YoutubeError";
import Loading from "../../Loading/Loading";
const Study = () => {
  // const { isLoading, error, data } = useQuery({
  //   queryKey: ["repoData", process.env.REACT_APP_YOUTUBEKEY],
  //   queryFn: async () => {
  //     const response = await fetch(
  //       `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&channelId=UCqS31wLnpnl_O2M7kfnuGiw&type=video&key=${process.env.REACT_APP_YOUTUBEKEY123}`
  //     );
  //     await new Promise((resolve) => setTimeout(resolve, 2000));
  //     return response.json();
  //   },
  // });
  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData", process.env.REACT_APP_YOUTUBEKEY],
    queryFn: () =>
      fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&channelId=UCqS31wLnpnl_O2M7kfnuGiw&type=video&key=${process.env.REACT_APP_YOUTUBEKEY}`
      ).then((res) => res.json()),
    staleTime: 1000 * 60 * 5,
  });
  if (isLoading) return <Loading />;

  if (error || !data || !data.items) return <YoutubeError err={error} />;
  return (
    <div
      className={`${classes.BannerDiv} max-w-[1500px] w-[1500px] flex-wrap `}
    >
      {data.items.map((item, idx) => (
        <div key={idx}>
          <a
            href={`https://www.youtube.com/watch?v=${item.id.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <div className={classes.videoDiv}>
              <img
                className={classes.thumbImg}
                src={item.snippet.thumbnails.medium.url}
                alt={item.snippet.thumbnails.medium.url}
              />
              <p className={classes.thumbTitle}>{item.snippet.title}</p>
              <p className={classes.thumbWatch}>조회수 356회 1분 전</p>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Study;
