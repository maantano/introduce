import React, { useState } from "react";

import weImg1 from "../../../asset/career/amaranth1.png";
import weImg2 from "../../../asset/career/easyImg.png";
import weImg3 from "../../../asset/career/conference1.jpeg";
// --------

import poter2 from "../../../asset/career/poterZ2.jpg";
import poter3 from "../../../asset/career/poterZ3.jpg";
import poter4 from "../../../asset/career/poterZ4.jpg";
// --------
import yogamoon from "../../../asset/career/yogamoon.png";
import amaranth from "../../../asset/career/amaranth.png";
import krinruck from "../../../asset/career/krinruck.png";
import dforest from "../../../asset/career/dforest.png";
// --------

const Career = () => {
  const [openSections, setOpenSections] = useState({
    huinno: false,
    douzone_ecommerce: false,
    douzone_platform: false,
    personal_projects: false,
    retrospective: false,
    skills: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="flex flex-col p-14 text-white max-w-[1200px] w-[1200px]">
      <div className="text-5xl  font-semibold">민경언</div>

      <div className="pt-20">
        <div className="text-3xl font-semibold pb-7">Portfolio</div>
        <div className="text-xl">URL : introduce-omega.vercel.app</div>
      </div>

      <div className="pt-20">
        <div className="text-3xl font-semibold pb-7">Introduce</div>
        <div className="leading-relaxed w-[620px]">
          <p className="pb-3">
            jQuery 기반 5년 된 레거시 시스템에서 시작해, B2C 웹 에디터(고객 유치
            1위) → B2B 이커머스 플랫폼 → AI 기반 의료 데이터 편집기까지, 약
            6년간 다양한 도메인과 템포 속에서 프론트엔드를 개발해왔습니다.
            <br />
            <br />
            그 과정에서 어떤 환경이든 빠르게 적응하는 힘을 얻었고, 동시에 각
            환경에서 "왜 이렇게 하는가"를 고민하는 습관을 키웠습니다.
            <br />
            <br />
            요즘은 리팩터링과 컴포넌트 추상화에 깊은 관심을 갖고 있으며,
            "how"보다 "why"를 먼저 묻습니다. 3개월 뒤에 봐도 편하게 읽히는 코드,
            새로 합류하는 동료가 봐도 맥락 파악이 어렵지 않은 코드를 만드는 것이
            목표입니다. 기술적 기여와 함께 팀 분위기 조율 역할을 자청하며, 갈등
            상황에서는 먼저 다가가 대화를 시도하고 구조적 개선까지 이끌어내는
            사람입니다.
          </p>
        </div>

        <div className="leading-relaxed w-[620px] pt-10">
          <div className="text-2xl font-semibold pb-3">핵심 역량</div>
          <div className="pb-3">
            <div className="text-lg font-semibold pb-2">
              • B2C · B2B · 의료 도메인을 아우르는 플랫폼 개발 경험
            </div>
            <p className="pb-3 pl-4">
              웹 에디터 런칭부터 쇼핑몰 관리자, 주문/견적 도메인, AI 기반 의료
              데이터 편집기까지 — 도메인별 복잡도와 이해관계가 다른 플랫폼을
              설계·구현·운영한 경험이 있습니다.
            </p>
          </div>
          <div className="pb-3">
            <div className="text-lg font-semibold pb-2">
              • 레거시 → 모던 스택 마이그레이션 및 리팩터링
            </div>
            <p className="pb-3 pl-4">
              jQuery 레거시에서 React/TypeScript로의 전환, React 17→18
              업그레이드 등 기존 코드베이스를 점진적으로 개선해온 경험이
              있습니다. 오토 배칭, 렌더링 타이밍 변경 등 마이그레이션 이슈를
              식별·해결하고 팀 문서로 공유했습니다.
            </p>
          </div>
          <div className="pb-3">
            <div className="text-lg font-semibold pb-2">
              • 컴포넌트 설계와 코드 품질에 대한 깊은 고민
            </div>
            <p className="pb-3 pl-4">
              UI와 코드의 1:1 대응, God Object 지양, 추상화 레벨 통일을 원칙으로
              설계합니다. "이 단위에 이름을 붙였을 때 한 문장으로 설명되는가"를
              추상화 경계의 기준으로 삼습니다.
            </p>
          </div>
          <div className="pb-3">
            <div className="text-lg font-semibold pb-2">
              • 커뮤니케이션 및 팀 중재
            </div>
            <p className="pb-3 pl-4">
              회의가 과열되면 긴장을 풀고, 의견 충돌 시 각자가 납득할 수 있는
              지점을 찾습니다. 갈등 해소 후에는 감정적 화해에서 끝내지 않고 재발
              방지를 위한 팀 프로세스 개선까지 이끌어냅니다.
            </p>
          </div>
        </div>
      </div>

      <div className="pt-20">
        {/* <div className="text-3xl font-semibold pb-7">History</div> */}
        <div className="leading-relaxed">
          <div
            className="text-3xl font-normal py-5 cursor-pointer hover:text-blue-400 flex items-center justify-between"
            onClick={() => toggleSection("huinno")}
          >
            <span>휴이노(2024.05~)</span>
            <span className="text-2xl">{openSections.huinno ? "▼" : "▶"}</span>
          </div>
          {openSections.huinno && (
            <>
              <div>
                <div className="text-2xl font-normal py-5">
                  AI 기반 ECG 데이터 차트 편집 에디터
                </div>
                <div className="mt-3">
                  서비스 소개 :{" "}
                  <a
                    href="https://huinno.com/memocare/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://huinno.com/memocare/
                  </a>
                </div>

                <div className="p-3 leading-loose">
                  <div className="text-xl font-semibold py-5">
                    1. Pattern Matching Mode
                    <span className="text-base font-normal ml-3">
                      (7개월, 기획~개발)
                    </span>
                  </div>
                  <p className="pl-4 pb-3">
                    AI 기반 패턴 편집 자동화 도구. 심전도 데이터에서 특정 구간과
                    유사한 파형을 AI로 자동 탐색해 일괄 편집하는 기능.
                  </p>
                  <div className="pl-4">
                    <div className="text-lg font-semibold pb-2 pt-3">
                      담당 업무
                    </div>
                    <p className="flex items-center gap-4 pb-2">
                      <span className="text-3xl">·</span> Highcharts 기반 차트
                      인터랙션 레이어 설계 및 구현 담당
                    </p>
                    <p className="flex items-center gap-4 pb-2">
                      <span className="text-3xl">·</span> 마우스 드래그 구간
                      선택, 키보드 단축키, 선택 영역 상태 관리 구현
                    </p>
                    <p className="flex items-center gap-4 pb-2">
                      <span className="text-3xl">·</span> 마우스 이벤트 · 키보드
                      액션 · 상태 관리를 분리된 레이어로 추상화하는 리팩터링
                      주도
                    </p>
                    <p className="flex items-center gap-4 pb-2">
                      <span className="text-3xl">·</span> validation 로직에 전략
                      패턴 도입 — 새 규칙 추가 시 기존 코드 수정 없이 확장
                      가능한 구조
                    </p>

                    <div className="text-lg font-semibold pb-2 pt-3">성과</div>
                    <p className="flex items-center gap-4 pb-2">
                      <span className="text-3xl">·</span> 기존 약 13,000회 이상
                      필요했던 API 호출을 20~30회로 최적화 (90% 이상 감소)
                    </p>
                    <p className="flex items-center gap-4 pb-2">
                      <span className="text-3xl">·</span> 리팩터링 후 새 편집
                      모드 추가 시간이 기존 대비 절반 이하로 단축
                    </p>
                  </div>

                  <div className="text-xl font-semibold py-5">
                    2. Shape Review
                  </div>
                  <p className="pl-4 pb-3">
                    이벤트 데이터를 형태(Shape) 기반으로 시각화·분류하여, 유사
                    패턴을 빠르게 식별하고 일괄 편집할 수 있는 기능.
                  </p>
                  <div className="pl-4">
                    <div className="text-lg font-semibold pb-2 pt-3">
                      담당 업무
                    </div>
                    <p className="flex items-center gap-4 pb-2">
                      <span className="text-3xl">·</span> 유사 모양과 시간
                      간격을 가진 이벤트를 자동 그룹화하여 한눈에 비교·편집
                      가능하도록 구현
                    </p>
                    <p className="flex items-center gap-4 pb-2">
                      <span className="text-3xl">·</span> Optimistic Update
                      (Redux) 직접 구현 — 서버 응답 전 클라이언트 상태
                      선반영으로 즉각적인 UI 피드백 제공
                    </p>
                    <p className="flex items-center gap-4 pb-2">
                      <span className="text-3xl">·</span> OPFS 캐싱 전략 도입 —
                      대용량 데이터 초기 로딩 시간 약 80% 이상 단축
                    </p>

                    <div className="text-lg font-semibold pb-2 pt-3">성과</div>
                    <p className="flex items-center gap-4 pb-2">
                      <span className="text-3xl">·</span> 14일치 ECG 데이터 수동
                      편집 시간을 2~3시간에서 약 30분으로 단축 (75~85% 절감)
                    </p>
                  </div>

                  <div className="text-xl font-semibold py-5">
                    3. React 17→18 마이그레이션
                  </div>
                  <div className="pl-4">
                    <p className="flex items-center gap-4 pb-2">
                      <span className="text-3xl">·</span> 오토 배칭 변경으로
                      인한 타이밍 의존 코드 사이드 이펙트 대량 발생 — 트러블
                      슈팅 및 해결
                    </p>
                    <p className="flex items-center gap-4 pb-2">
                      <span className="text-3xl">·</span> useRef를 useEffect
                      내부에서 참조하던 패턴들의 렌더링 타이밍 차이 이슈 수정
                    </p>
                    <p className="flex items-center gap-4 pb-2">
                      <span className="text-3xl">·</span> 마이그레이션 이슈와
                      해결 패턴을 팀 문서로 정리·공유
                    </p>
                  </div>

                  <div className="text-xl font-semibold py-5">
                    그 외 프로젝트
                  </div>
                  <div className="pl-4">
                    <p className="flex items-center gap-4 pb-2">
                      <span className="text-3xl">·</span> 택배 운영 서비스 개선
                    </p>
                    <p className="flex items-center gap-4 pb-2">
                      <span className="text-3xl">·</span> Custom API 사용자 직접
                      호출 UI
                    </p>
                    <p className="flex items-center gap-4 pb-2">
                      <span className="text-3xl">·</span> CS 플랫폼 내재화 개발
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}

          <div
            className="text-3xl font-normal py-5 cursor-pointer hover:text-blue-400 flex items-center justify-between"
            onClick={() => toggleSection("douzone_ecommerce")}
          >
            <span>더존비엔에프 이커머스개발 Unit(2021.02~2023.03)</span>
            <span className="text-2xl">
              {openSections.douzone_ecommerce ? "▼" : "▶"}
            </span>
          </div>
          {openSections.douzone_ecommerce && (
            <>
              <div>
                <div className="text-2xl font-normal py-5">
                  WE빌더서비스: 홈페이지 & 쇼핑몰 사이트 제작 웹 에디터(B2C)
                </div>
                <div className="flex w-[1000px] gap-8 mt-10">
                  <img className="w-1/4" src={weImg1} alt="weImg1" />
                  <img className="w-1/4" src={weImg2} alt="weImg2" />
                  <img className="w-1/4 rounded-lg" src={weImg3} alt="weImg3" />
                </div>
                <div className="mt-3">
                  사이트 URL :{" "}
                  <a
                    href="https://www.we-builder.co.kr"
                    target="_blank"
                    rel="noreferrer"
                  >
                    www.we-builder.co.kr
                  </a>
                </div>
                <div className="mt-3">
                  서비스 기능안내 영상 :{" "}
                  <a
                    href="https://www.youtube.com/watch?v=2lnHmCrrlQY"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://www.youtube.com/watch?v=2lnHmCrrlQY
                  </a>
                </div>
                <div className="p-3 leading-loose">
                  <div className="pl-4">
                    <p className="flex items-center gap-4">
                      <span className="text-3xl">·</span> 총 21명- PM: 1명,
                      프론트엔드: 4명, 백엔드: 3명, 퍼블리셔: 2명, 디자인: 2명,
                      기획: 4명, 운영: 3명, QA: 2명, 기여도 50%
                    </p>
                    <p className="flex items-center gap-4">
                      <span className="text-3xl">·</span> 위하고 플랫폼 내
                      서비스 중 고객 유치 1위 달성
                    </p>
                    <p className="flex items-center gap-4">
                      <span className="text-3xl">·</span> Stack - Javascript,
                      jquery, html, css, php, mysql, linux, docker, docker-swarm
                    </p>
                  </div>
                  <div className="text-xl font-semibold py-5">Frontend</div>
                  <div className="pl-4">
                    <p className="flex items-center gap-4">
                      <span className="text-3xl">·</span> 써드파티 로그인 연동
                    </p>
                    <p className="flex items-center gap-4">
                      <span className="text-3xl">·</span> 웹 에디터 고도화 개발
                      및 운영
                    </p>
                    <p className="flex items-center gap-4">
                      <span className="text-3xl">·</span> 적응형 템플릿 25종,
                      반응형 템플릿 27종 개발, 완성형 템플릿 15종 개발
                    </p>
                    <p className="flex items-center gap-4">
                      <span className="text-3xl">·</span> 쇼핑몰 관리자 UI/UX
                      개발(부가서비스, 주문/배송 설정, 회원 설정 등)
                    </p>
                    <p className="flex items-center gap-4">
                      <span className="text-3xl">·</span> 부가서비스 연동 개발
                    </p>
                    <div className="pl-7">
                      <p>- 더존 PG 연동</p>
                      <p>- 트래픽, 스토리지 추가, 제한, 알람 서비스 개발</p>
                    </div>
                    <p className="flex items-center gap-4">
                      <span className="text-3xl">·</span> 에디터 사용 매뉴얼
                      제작
                    </p>
                  </div>
                  <div className="text-xl font-semibold py-5">Backend</div>
                  <div className="pl-4">
                    <p className="flex items-center gap-4">
                      <span className="text-3xl">·</span> 서비스 아키텍처 개선
                      참여
                    </p>
                    <p className="flex items-center gap-4">
                      <span className="text-3xl">·</span> 서버 모니터링 및
                      트러블 슈팅
                    </p>
                    <p className="flex items-center gap-4">
                      <span className="text-3xl">·</span> DB 클러스터링 구축
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="text-2xl font-normal py-5">
                  더 포터존: 이커머스 플랫폼(B2B)
                </div>
                <div className="flex w-[1000px] gap-8 mt-10">
                  <img className="w-1/4 rounded-lg" src={poter2} alt="weImg1" />
                  <img className="w-1/4 rounded-lg" src={poter3} alt="weImg2" />
                  <img className="w-1/4 rounded-lg" src={poter4} alt="weImg3" />
                </div>
                <div className="mt-3">
                  사이트 URL :{" "}
                  <a
                    href="https://theporterzone.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    theporterzone.com
                  </a>
                </div>
                <div className="p-3 leading-loose">
                  <div className="pl-4">
                    <p className="flex items-center gap-4">
                      <span className="text-3xl">·</span> 총 23명- PM: 1명,
                      프론트엔드: 7명, 백엔드: 9명, 퍼블리셔: 2명, 기획: 6명,
                      운영 및 QA: 3명, 디자인: 디자인 센터, 기여도 30%
                    </p>
                    <p className="flex items-center gap-4">
                      <span className="text-3xl">·</span> Stack - react, redux,
                      react-query, javascript, html, css
                    </p>
                  </div>
                  <div className="text-xl font-semibold py-5">Frontend</div>
                  <div className="pl-4">
                    <p className="flex items-center gap-4">
                      <span className="text-3xl">·</span> 주문 도메인 개발
                    </p>
                    <div className="pl-7">
                      <p>- 유저(구매 신청, 구매 신청 내역 확인)</p>
                      <p>- 관리자(구매 신청 승인, 구매 승인 상세 내역)</p>
                    </div>
                    <p className="flex items-center gap-4">
                      <span className="text-3xl">·</span> 견적 도메인 개발
                    </p>
                    <div className="pl-7">
                      <p>- 유저(견적 신청, 견적 신청 내역 확인)</p>
                      <p>- 관리자(신청 내역 확인)</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          <div
            className="text-3xl font-normal py-5 cursor-pointer hover:text-blue-400 flex items-center justify-between"
            onClick={() => toggleSection("douzone_platform")}
          >
            <span>더존비즈온 플랫폼개발 Unit(2019.07~2021.02)</span>
            <span className="text-2xl">
              {openSections.douzone_platform ? "▼" : "▶"}
            </span>
          </div>
          {openSections.douzone_platform && (
            <>
              <div>
                <div className="text-2xl font-normal py-5">
                  요가문 서울 (2020.10~2021.01)
                </div>
                <div className="flex gap-8 my-4">
                  <img
                    className="w-1/4 rounded-lg"
                    src={yogamoon}
                    alt="yogamoon"
                  />
                  <div className="flex flex-col justify-center">
                    <p className="flex items-center gap-4">
                      <span className="text-3xl">·</span> 기여도: 100%
                    </p>
                    <p className="flex items-center gap-4">
                      <span className="text-3xl">·</span> 상품 결제 개발
                    </p>
                    <p className="flex items-center gap-4">
                      <span className="text-3xl">·</span> 네이버 페이, 카카오
                      페이 연동 개발
                    </p>
                    <p className="flex items-center gap-4">
                      <span className="text-3xl">·</span> 레슨 예약 시스템 개발
                    </p>
                    <p className="flex items-center gap-4">
                      <span className="text-3xl">·</span> UI/UX 구축 개발
                    </p>
                    <p className="flex items-center gap-4">
                      <span className="text-3xl">·</span> javascript, react,
                      html, css
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="text-2xl font-normal py-5">
                  강아지 숲 (2020.06~2020.09)
                </div>
                <div className="flex gap-8 my-4">
                  <img
                    className="w-1/4 rounded-lg"
                    src={dforest}
                    alt="dforest"
                  />
                  <div className="flex flex-col justify-center">
                    <p className="flex items-center gap-4">
                      <span className="text-3xl">·</span> 기여도: 100%
                    </p>
                    <p className="flex items-center gap-4">
                      <span className="text-3xl">·</span> 입장권 구매 결제
                      시스템 개발
                    </p>
                    <p className="flex items-center gap-4">
                      <span className="text-3xl">·</span> UI/UX 구축 개발
                    </p>
                    <p className="flex items-center gap-4">
                      <span className="text-3xl">·</span> javascript, react,
                      html, css
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="text-2xl font-normal py-5">
                  한국산업기술보호협회 (2019.11~2020.02)
                </div>
                <div className="flex gap-8 my-4">
                  <img
                    className="w-1/4 rounded-lg"
                    src={krinruck}
                    alt="krinruck"
                  />
                  <div className="flex flex-col justify-center">
                    <p className="flex items-center gap-4">
                      <span className="text-3xl">·</span> 기여도: 100%
                    </p>
                    <p className="flex items-center gap-4">
                      <span className="text-3xl">·</span> 사내 게시판 서비스
                      개발
                    </p>
                    <p className="flex items-center gap-4">
                      <span className="text-3xl">·</span> 비즈니스 워치(뉴스
                      기사) 연동 게시판 개발
                    </p>
                    <p className="flex items-center gap-4">
                      <span className="text-3xl">·</span> UI/UX 구축 개발
                    </p>
                    <p className="flex items-center gap-4">
                      <span className="text-3xl">·</span> javascript, react,
                      html, css
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="text-2xl font-normal py-5">
                  AMARANTH10 (2019.07~2019.11)
                </div>
                <div className="flex gap-8 my-4">
                  <img
                    className="w-1/4 rounded-lg"
                    src={amaranth}
                    alt="amaranth"
                  />
                  <div className="flex flex-col justify-center">
                    <p className="flex items-center gap-4">
                      <span className="text-3xl">·</span> 기여도: 30% UI/UX 구축
                      개발
                    </p>
                    <p className="flex items-center gap-4">
                      <span className="text-3xl">·</span> javascript, react,
                      html, css
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="py-5">
          <div
            className=" cursor-pointer hover:text-blue-400 flex items-center justify-between"
            onClick={() => toggleSection("personal_projects")}
          >
            <span className="text-3xl font-semibold">개인 프로젝트</span>
            <span className="text-2xl">
              {openSections.personal_projects ? "▼" : "▶"}
            </span>
          </div>
          {openSections.personal_projects && (
            <>
              <div>
                <div className="text-2xl font-normal pb-3">
                  RAG Document Search — 문서 기반 AI 질의응답 시스템
                </div>
                <div className="leading-relaxed w-[620px] pb-5">
                  <p className="pb-3 pl-4 text-sm text-gray-400">
                    Stack - React, TypeScript, Tailwind CSS, Vite, Python,
                    FastAPI, OpenAI API (GPT-4o-mini), ChromaDB
                  </p>
                  <div className="pl-4">
                    <p className="flex items-center gap-4 pb-2">
                      <span className="text-3xl">·</span> 업로드한 문서(PDF,
                      HWP, HWPX)를 기반으로 자연어 질문에 AI가 근거 있는 답변을
                      생성하는 RAG 문서 검색 시스템
                    </p>
                    <p className="flex items-center gap-4 pb-2">
                      <span className="text-3xl">·</span> HWP(OLE 바이너리),
                      HWPX(ZIP+XML) 등 한국 문서 포맷 파싱을 직접 구현하여 외부
                      서비스 없이 텍스트 추출
                    </p>
                    <p className="flex items-center gap-4 pb-2">
                      <span className="text-3xl">·</span> 벡터 저장소를 추상
                      클래스(ABC) + 팩토리 패턴으로 설계 — ChromaDB 외
                      Pinecone/Qdrant 등으로 확장 가능한 구조
                    </p>
                    <p className="flex items-center gap-4 pb-2">
                      <span className="text-3xl">·</span> asyncio.to_thread()로
                      동기 작업을 비동기 처리하여 FastAPI 이벤트 루프 블로킹
                      방지
                    </p>
                    <p className="flex items-center gap-4 pb-2">
                      <span className="text-3xl">·</span> React Custom
                      Hook(useChat, useDocuments)으로 채팅/문서 상태 분리 관리
                      및 타입 안전한 API 클라이언트 구축
                    </p>
                    <p className="flex items-center gap-4 pb-2">
                      <span className="text-3xl">·</span>{" "}
                      <a
                        href="https://github.com/maantano/rag-project"
                        target="_blank"
                        rel="noreferrer"
                      >
                        github.com/maantano/rag-project
                      </a>
                    </p>
                  </div>
                </div>

                <div className="text-2xl font-normal pb-3">
                  Maantano Ticker — 실시간 주식 Ticker 앱
                </div>
                <div className="leading-relaxed w-[620px] pb-5">
                  <p className="pb-3 pl-4 text-sm text-gray-400">
                    Stack - Electron, JavaScript, Node.js, CSS3, axios, cheerio,
                    electron-store
                  </p>
                  <div className="pl-4">
                    <p className="flex items-center gap-4 pb-2">
                      <span className="text-3xl">·</span> macOS 메뉴바에서 한국
                      및 미국 주식 실시간 시세를 확인하는 경량 데스크톱 앱
                    </p>
                    <p className="flex items-center gap-4 pb-2">
                      <span className="text-3xl">·</span> 바이브 코딩을 활용한
                      빠른 프로토타이핑 → 오픈소스 배포
                    </p>
                    <p className="flex items-center gap-4 pb-2">
                      <span className="text-3xl">·</span> "완벽한 v1"보다 "빠른
                      v0.1 + 반복 개선" 접근으로 사용자 피드백 기반 방향 설정
                    </p>
                    <p className="flex items-center gap-4 pb-2">
                      <span className="text-3xl">·</span>{" "}
                      <a
                        href="https://github.com/maantano/maantano-ticker"
                        target="_blank"
                        rel="noreferrer"
                      >
                        github.com/maantano/maantano-ticker
                      </a>
                    </p>
                  </div>
                </div>

                <div className="text-2xl font-normal pb-3">Slack Messenger</div>
                <div className="leading-relaxed w-[620px] pb-5">
                  <p className="pb-3 pl-4 text-sm text-gray-400">
                    Stack - React, TypeScript, JavaScript, Babel, Webpack, SWR,
                    Sass, styled-components, Socket.io
                  </p>
                  <div className="pl-4">
                    <p className="flex items-center gap-4 pb-2">
                      <span className="text-3xl">·</span> WebSocket을 이용한
                      실시간 통신이 가능한 메신저 클론 프로젝트
                    </p>
                    <p className="flex items-center gap-4 pb-2">
                      <span className="text-3xl">·</span> Babel, Webpack 직접
                      설정으로 CRA 없이 빌드 환경 구성
                    </p>
                    <p className="flex items-center gap-4 pb-2">
                      <span className="text-3xl">·</span> SWR을 활용한 서버 상태
                      관리 및 실시간 데이터 동기화
                    </p>
                  </div>
                </div>

                <div className="text-2xl font-normal pb-3">Card Picker</div>
                <div className="leading-relaxed w-[620px] pb-5">
                  <p className="pb-3 pl-4 text-sm text-gray-400">
                    Stack - React, Redux Toolkit, JavaScript, styled-components,
                    Tailwind CSS, Firebase, Node.js, MySQL, Python
                  </p>
                  <div className="pl-4">
                    <p className="flex items-center gap-4 pb-2">
                      <span className="text-3xl">·</span> 카드 추천 및 소비 패턴
                      분석 서비스
                    </p>
                    <p className="flex items-center gap-4 pb-2">
                      <span className="text-3xl">·</span> 카테고리별 카드 조회,
                      상세 정보 노출, 카드 발급 페이지 연동
                    </p>
                    <p className="flex items-center gap-4 pb-2">
                      <span className="text-3xl">·</span> 카드 사용 내역 파일
                      업로드 → 소비 패턴 분석 → 최적 할인 카드 추천
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="py-5">
          <div
            className="text-3xl font-semibold cursor-pointer hover:text-blue-400 flex items-center justify-between"
            onClick={() => toggleSection("retrospective")}
          >
            <span>회고</span>
            <span className="text-2xl">
              {openSections.retrospective ? "▼" : "▶"}
            </span>
          </div>
          {openSections.retrospective && (
            <>
              <div className="leading-relaxed w-[620px]">
                <div className="mt-3">
                  <p className="text-xl font-semibold">
                    1. 레거시에서 시작해 모던 스택까지 — 환경이 바뀔 때마다
                    배운 것
                  </p>
                  <p className="pb-3 font-normal">
                    첫 직장에서 jQuery 기반 5년 된 레거시 코드를 물려받았습니다.
                    처음엔 "왜 이렇게 짰지?"라는 생각뿐이었지만, 운영 중인
                    서비스를 건드리면서 레거시에도 이유가 있다는 걸 배웠습니다.
                    이후 이커머스 팀에서 React + Redux로 전환하면서 모던
                    스택의 장점을 체감했고, 휴이노에서는 TypeScript 도입과
                    React 17→18 마이그레이션까지 경험했습니다. 이 과정에서 얻은
                    건 특정 기술이 아니라, "기존 코드를 존중하면서 점진적으로
                    개선하는 감각"이었습니다. 레거시를 겪어봤기에 새 기술을
                    도입할 때도 "왜 바꿔야 하는지"를 먼저 묻게 됐습니다.
                  </p>
                </div>

                <div className="mt-3">
                  <p className="text-xl font-semibold">
                    2. 서비스 런칭부터 운영까지 — 고객 접점에서 배운 것
                  </p>
                  <p className="pb-3 font-normal">
                    더존에서 WE빌더 서비스를 런칭부터 운영까지 경험했습니다.
                    위하고 플랫폼 내 고객 유치 1위를 달성했지만, 그보다 값진 건
                    CS 응대와 고객 인터뷰를 직접 하면서 "사용자가 실제로 어디서
                    막히는지"를 체감한 것입니다. 템플릿 추천 기능은 고객이
                    반복적으로 겪는 불편을 직접 관찰한 데서 출발했습니다. 이
                    경험 이후 기능을 만들 때 "기획서에 적힌 요구사항" 너머에
                    있는 실제 사용 맥락을 의식하게 됐고, 이후 B2B 플랫폼이나
                    의료 도메인에서도 도메인 전문가의 워크플로우를 먼저
                    관찰하는 습관이 생겼습니다.
                  </p>
                </div>

                <div className="mt-3">
                  <p className="text-xl font-semibold">
                    3. 추상화와 코드 설계 — "how"보다 "why"를 먼저 묻기
                  </p>
                  <p className="pb-3 font-normal">
                    더존 시절에는 "돌아가면 된다"는 마인드로 코드를
                    작성했습니다. 휴이노에서 패턴매칭 프로젝트를 7개월간
                    진행하면서 처음으로 설계에 충분한 시간을 쏟았고, 그제서야
                    추상화의 트레이드오프를 체감했습니다. 이벤트 처리를 한
                    곳에서 관리하면 God Object가 되고, 너무 세밀하게 쪼개면
                    흐름이 파편화됩니다. 저만의 기준은 "이 단위에 이름을 붙였을
                    때 한 문장으로 설명되는가"입니다. 안 되면 책임이 섞인
                    신호이고, 이름이 너무 추상적이면 분리가 과한 것입니다.
                    돌이켜보면 레거시 코드에서 느꼈던 "왜 이렇게 짰지?"의
                    답을, 이제는 조금씩 스스로 만들어가고 있다고 느낍니다.
                  </p>
                </div>

                <div className="mt-3">
                  <p className="text-xl font-semibold">
                    4. 갈등 해소 → 프로세스 개선
                  </p>
                  <p className="pb-3 font-normal">
                    더존에서는 기획·디자인 팀과의 협업에서 의견을 전달할 때
                    인과관계를 문서화하고 기능 단위로 진행상황을 공유하는 법을
                    배웠습니다. 휴이노에서는 한 단계 더 나아간 경험을 했습니다.
                    BE 동료가 AI로 FE 코드를 작성해 "바로 배포하자"고 제안했고,
                    회고에서 솔직하게 피드백했더니 동료가 크게 상처받았습니다.
                    제가 먼저 대화를 요청해 문제 삼은 건 '노력'이 아니라
                    '프로세스'라는 점을 전달하면서, 제가 컨벤션을 사전 공유하지
                    않은 부분도 인정했습니다. 감정 해소 후에는 "AI 활용 시 사전
                    합의 프로세스"를 제안해 팀 규칙으로 정착시켰습니다. 갈등에서
                    "누가 맞냐"보다 "왜 이런 오해가 생겼나"에 집중하고, 감정적
                    화해에서 끝내지 않고 재발 방지 구조를 만드는 것이 진짜
                    해결이라는 걸 배웠습니다.
                  </p>
                </div>

                <div className="mt-3">
                  <p className="text-xl font-semibold">
                    5. 우선순위 판단과 맥락에 따른 실행
                  </p>
                  <p className="pb-3 font-normal">
                    피처 3개와 React 버전 업그레이드가 겹치면서 동시다발 이슈가
                    터졌을 때, 이슈를 긴급도와 영향 범위로 분류하고 피처 2개는
                    동료에게 인수인계하는 판단을 했습니다. 당시엔 자책도 했지만,
                    이후 비슷한 상황에서 우선순위 판단이 훨씬 빨라졌습니다.
                    한편 사이드 프로젝트에서는 "완벽한 v1"보다 "빠른 v0.1 +
                    반복 개선"이 효과적이었습니다. 같은 "빠른 실행"이라도 현업과
                    사이드 프로젝트에서 적절한 수준이 다르다는 걸 느꼈고, 다양한
                    아티클이나 기술 트렌드를 접할 때도 무조건 수용하기보다 내가
                    속한 조직과 맥락에 맞게 로컬라이제이션해서 받아들여야 한다고
                    생각합니다.
                  </p>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="py-5">
          <div
            className="cursor-pointer hover:text-blue-400 flex items-center justify-between"
            onClick={() => toggleSection("skills")}
          >
            <span className="text-3xl font-semibold">Skills</span>
            <span className="text-2xl">{openSections.skills ? "▼" : "▶"}</span>
          </div>
          {openSections.skills && (
            <>
              <div>
                <div className="text-2xl font-normal">Frontend</div>
                <div className="p-3 leading-relaxed py-5">
                  <p className="flex items-center gap-4">
                    <span className="text-3xl">·</span> Html5, css, sass,
                    Styled-components, Tailwind
                  </p>
                  <p className="flex items-center gap-4">
                    <span className="text-3xl">·</span> React, Next js,
                    Javascript, Typescript, jQuery, React-Native
                  </p>
                  <p className="flex items-center gap-4">
                    <span className="text-3xl">·</span> Redux(React-redux,
                    React-toolkit, saga), React-Query, Recoil, Zustand,
                    Firebase, Npm
                  </p>
                </div>

                <div className="text-2xl font-normal">Backend</div>
                <div className="p-3 leading-relaxed py-5">
                  <p className="flex items-center gap-4">
                    <span className="text-3xl">·</span> Node.js, Python, PHP
                  </p>
                  <p className="flex items-center gap-4">
                    <span className="text-3xl">·</span> MySql, MariaDB, Oracle
                  </p>
                  <p className="flex items-center gap-4">
                    <span className="text-3xl">·</span> Docker, Docker Swarm
                  </p>
                  <p className="flex items-center gap-4">
                    <span className="text-3xl">·</span> Linux, Centos
                  </p>
                </div>

                <div className="text-2xl font-normal">Etc</div>
                <div className="p-3 leading-relaxed py-5">
                  <p className="flex items-center gap-4">
                    <span className="text-3xl">·</span> Gpt, Cursor, Claude,
                    Gemini
                  </p>
                  <p className="flex items-center gap-4">
                    <span className="text-3xl">·</span> Socket, Babel, Webpack
                  </p>
                  <p className="flex items-center gap-4">
                    <span className="text-3xl">·</span> IntelliJ, WebStorm, VS
                    Code, Vim
                  </p>
                  <p className="flex items-center gap-4">
                    <span className="text-3xl">·</span> Git/Github
                  </p>
                  <p className="flex items-center gap-4">
                    <span className="text-3xl">·</span> Jira, Slack, Figma,
                    confluence
                  </p>
                </div>

                <div className="text-2xl font-normal">자격증</div>
                <div className="p-3 leading-relaxed py-5">
                  <p className="flex items-center gap-4">
                    <span className="text-3xl">·</span> SQLD 자격증 취득
                  </p>
                  <p className="flex items-center gap-4">
                    <span className="text-3xl">·</span> OCP11g 자격증 취득
                  </p>
                  <p className="flex items-center gap-4">
                    <span className="text-3xl">·</span> 정보처리기사 자격증 취득
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Career;
