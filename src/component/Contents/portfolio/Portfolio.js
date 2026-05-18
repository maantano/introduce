import React, { useEffect, useMemo, useRef, useState } from "react";
import classes from "./Portfolio.module.css";
import { Link, useNavigate } from "react-router-dom";
import webuilder from "../../../asset/webuilder/main_visual_text_01.png";
import poterzone from "../../../asset/porterzone/porterzoneLogo.png";
import wehago from "../../../asset/platform/platform-logo.png";
import cardPicker from "../../../asset/etc/cardPicker.png";
import chungsol from "../../../asset/etc/chungsol.png";
import patternLogo from "../../../asset/patternMatching/patternLogo.png";
import shapeReviewLogo from "../../../asset/shapeReview/shapeReviewLogo.png";

const INITIAL_COUNT = 4;
const PAGE_SIZE = 4;

const ALL_ITEMS = [
  {
    key: "webuilder",
    to: "/webuilder",
    img: webuilder,
    thumbPadding: "p-8",
    title: "Webuilder, 클릭 몇번으로 쇼핑몰이 완성",
    watch: "조회수 3만회 2개월전",
  },
  {
    key: "porterzone",
    to: "/porterzone",
    img: poterzone,
    thumbPadding: "p-8",
    title:
      "기업이 필요한 전자상거래의 모든 것, 세상에 하나뿐인 B2B 이커머스 플랫폼",
    watch: "조회수 2만회 1개월 전",
  },
  {
    key: "platform",
    to: "/platform",
    img: wehago,
    thumbPadding: "p-14",
    title: "이것은 가장 완벽한 구축이다.",
    watch: "조회수 1.6만회 3개월 전",
  },
  {
    key: "cardrecommend",
    to: "/cardrecommend",
    img: cardPicker,
    thumbPadding: "p-8",
    title: "내가 가장 필요한 카드는? 카드 체리피커가 됩시다.",
    watch: "조회수 7천회 3주 전",
  },
  {
    key: "chungsol",
    to: "/chungsol",
    img: chungsol,
    thumbPadding: "p-8",
    title: "하루만에 만든 노인 복지 사이트 ",
    watch: "조회수 6천회 2주전",
    disabled: true,
  },
  {
    key: "drag-event",
    href: "http://drag-event.vercel.app",
    text: "Drag Event Practice",
    thumbPadding: "p-8",
    textSize: "text-xl",
    title: "Drag Event (react-beautiful-dnd)",
    watch: "조회수 1천회 2주전",
  },
  {
    key: "slack",
    to: "/slack",
    text: "SLACK Messenger",
    thumbPadding: "p-8",
    textSize: "text-2xl",
    title: "Slack Messenger (Socket) ",
    watch: "조회수 3천회 1주전",
    disabled: true,
  },
  {
    key: "patternmatching",
    to: "/patternmatching",
    img: patternLogo,
    thumbPadding: "p-8",
    title: "Pattern Matching Mode - AI 기반 ECG 데이터 편집",
    watch: "조회수 5천회 1주전",
  },
  {
    key: "lemini",
    to: "/lemini",
    text: "Lemini · Korean Legal RAG",
    thumbPadding: "p-8",
    textSize: "text-xl",
    title: "(AX) Lemini - 한국 법령·판례 기반 신뢰 가능한 RAG 시스템",
    watch: "조회수 1.2천회 3일전",
  },
  {
    key: "dailynews",
    to: "/dailynews",
    text: "Daily Digest Bot",
    thumbPadding: "p-8",
    textSize: "text-xl",
    title: "(AX) Daily Digest Bot - 200+ 채널 일일 요약 자동화 봇",
    watch: "조회수 800회 2일전",
  },
  {
    key: "ragproject",
    to: "/ragproject",
    text: "RAG Document Search",
    thumbPadding: "p-8",
    textSize: "text-xl",
    title: "(AX) RAG Document Search - 문서 기반 AI 질의응답 시스템",
    watch: "조회수 2천회 1주전",
  },
  {
    key: "maantanoticker",
    to: "/maantanoticker",
    text: "Maantano Ticker",
    thumbPadding: "p-8",
    textSize: "text-xl",
    title: "(AX) Maantano Ticker - macOS 메뉴바 실시간 주식 시세",
    watch: "조회수 3천회 1주전",
  },
  {
    key: "shapereview",
    to: "/shapereview",
    img: shapeReviewLogo,
    thumbPadding: "p-8",
    title: "Shape Review - 파형 기반 ECG 데이터 편집",
    watch: "조회수 4천회 1주전",
  },
];

const ITEMS = ALL_ITEMS.filter((item) => !item.disabled);

const PortfolioCard = ({ item }) => {
  const thumbBaseClass = `${classes.thumbImg} ${item.thumbPadding} object-contain flex justify-center items-center border border-solid border-gray-100 border-opacity-30`;

  return (
    <div className={classes.HomeDiv}>
      {item.img ? (
        <img className={thumbBaseClass} src={item.img} alt={item.title} />
      ) : (
        <div
          className={`${thumbBaseClass} ${item.textSize || "text-xl"}`}
          aria-label={item.title}
        >
          {item.text}
        </div>
      )}
      <p className="text-"></p>
      <p className={classes.thumbTitle}>{item.title}</p>
      <p className={classes.thumbWatch}>{item.watch}</p>
    </div>
  );
};

const Portfolio = () => {
  const navigate = useNavigate();
  const [visibleCount, setVisibleCount] = useState(
    Math.min(INITIAL_COUNT, ITEMS.length)
  );
  const sentinelRef = useRef(null);

  const visibleItems = useMemo(
    () => ITEMS.slice(0, visibleCount),
    [visibleCount]
  );
  const hasMore = visibleCount < ITEMS.length;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const handleLinkClick = (to) => (event) => {
    event.preventDefault();
    scrollToTop();
    navigate(to);
  };

  useEffect(() => {
    if (!hasMore) return undefined;

    const loadMore = () => {
      setVisibleCount((prev) => Math.min(prev + PAGE_SIZE, ITEMS.length));
    };

    const onWheel = (event) => {
      if (event.deltaY > 0) loadMore();
    };
    const onKey = (event) => {
      if (
        event.key === "ArrowDown" ||
        event.key === "PageDown" ||
        event.key === " " ||
        event.key === "End"
      ) {
        loadMore();
      }
    };
    const onTouchMove = () => loadMore();

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("keydown", onKey);
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    const node = sentinelRef.current;
    let observer;
    if (node) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            loadMore();
          }
        },
        { rootMargin: "200px 0px" }
      );
      observer.observe(node);
    }

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("touchmove", onTouchMove);
      if (observer) observer.disconnect();
    };
  }, [hasMore, visibleCount]);

  return (
    <>
      <div className={`${classes.BannerDiv} max-w-[1500px] flex-wrap `}>
        {visibleItems.map((item) =>
          item.href ? (
            <a
              key={item.key}
              href={item.href}
              target="_blank"
              rel="noreferrer"
            >
              <PortfolioCard item={item} />
            </a>
          ) : (
            <Link
              key={item.key}
              href={item.to}
              onClick={handleLinkClick(item.to)}
            >
              <PortfolioCard item={item} />
            </Link>
          )
        )}
      </div>
      {hasMore && (
        <div
          ref={sentinelRef}
          className="w-full h-12 flex items-center justify-center text-sm text-gray-500"
          aria-hidden="true"
        >
          Loading…
        </div>
      )}
    </>
  );
};

export default Portfolio;
