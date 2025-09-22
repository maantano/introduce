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
import one from "../../../asset/career/1.png";
import two from "../../../asset/career/2.png";
import three from "../../../asset/career/3.png";
import four from "../../../asset/career/4.png";
import five from "../../../asset/career/5.png";

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
            안녕하세요,
            <br />
            사용자 경험 향상을 최우선으로 생각하는 5년 5개월차 프론트엔드 개발자
            민경언입니다.
            <br />
            저는 다양한 규모와 성격의 B2C·B2B 플랫폼 개발 프로젝트에 참여하며,
            기획부터 설계, 운영까지의 전 과정을 경험하며 성장해왔습니다. 단순한
            기능 구현을 넘어서, 사용자의 실제 행동과 니즈를 반영하는 데이터
            기반의 UI/UX 개발을 추구합니다.
          </p>
        </div>

        <div className="leading-relaxed w-[620px] pt-10">
          <div className="text-2xl font-semibold pb-3">주요 역량</div>
          <div className="pb-3">
            <div className="text-lg font-semibold pb-2">
              • 기획 이해와 기능 단위 설계 역량
            </div>
            <p className="pb-3 pl-4">
              명확한 기능 단위 분할과 스펙 문서화로 팀 간 원활한 커뮤니케이션을
              돕고, 마감일을 철저히 지키는 개발을 수행합니다.
            </p>
          </div>
          <div className="pb-3">
            <div className="text-lg font-semibold pb-2">
              • B2C 서비스 런칭 및 운영 경험
            </div>
            <p className="pb-3 pl-4">
              웹 에디터 서비스 런칭부터 유지보수, 고객 피드백 대응까지 직접
              주도하며, 고객 맞춤형 자동 웹사이트 생성 기능 등을 구현하였습니다.
              <br />
              특히 템플릿 추천 기능은 실제 고객 인터뷰와 CS 응대를 기반으로
              도출된 문제를 직접 해결한 경험입니다.
            </p>
          </div>
          <div className="pb-3">
            <div className="text-lg font-semibold pb-2">
              • B2B 플랫폼 특성에 대한 깊은 이해
            </div>
            <p className="pb-3 pl-4">
              주문/견적 도메인, 관리자/유저 시스템 등 복잡한 이해관계가 얽힌 B2B
              플랫폼의 도메인 설계와 UI 구현을 경험하며, 구조적 사고 능력을
              키웠습니다.
            </p>
          </div>
          <div className="pb-3">
            <div className="text-lg font-semibold pb-2">
              • 헬스케어 AI 기반 시스템 개발 경험
            </div>
            <p className="pb-3 pl-4">
              최근에는 AI 기반 ECG 차트 편집기인 'Shape Review' 및 'Pattern
              Matching Mode' 개발에 참여하여, 의료 데이터 편집 자동화와 대규모
              편집 도구 구현을 담당했습니다.
              <br />
              복잡한 의료 데이터와 AI의 예외 케이스를 유연하게 다루며, 성능과
              사용성을 모두 고려한 프론트 구현에 집중했습니다.
            </p>
          </div>
        </div>

        <div className="leading-relaxed w-[620px] pt-10">
          <div className="text-2xl font-semibold pb-3">
            제가 생각하는 좋은 프론트엔드 개발자란?
          </div>
          <p className="pb-3">
            사용자의 흐름을 읽고, 작은 행동에서도 직관적으로 기능을 이해할 수
            있도록 돕는 인터페이스를 설계하고 구현하는 개발자라고 생각합니다.
          </p>
          <p className="pb-3">
            서비스의 본질과 사용자 관점에서의 사용성을 항상 고민하며, 기능이
            아닌 가치 전달 중심의 개발을 지향합니다.
          </p>
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
                    프로젝트 : Shape Review
                  </div>
                  <div className="pl-4">
                    <div className="text-lg font-semibold pb-2">목표</div>
                    <p className="flex items-center gap-4 pb-2">
                      <span className="text-3xl">·</span> 이벤트 데이터를
                      형태(Shape) 기반으로 시각화·분류하여, 유사한 이벤트 패턴을
                      빠르게 식별하고 효율적으로 편집/관리할 수 있도록 돕기 위함
                    </p>

                    <div className="text-lg font-semibold pb-2 pt-3">
                      기능 설명
                    </div>
                    <p className="flex items-center gap-4 pb-2">
                      <span className="text-3xl">·</span> 이벤트 타입별로 유사한
                      **모양(형태)**과 시간 간격을 가진 이벤트들을 자동으로
                      그룹화하여 보여줍니다.
                    </p>
                    <p className="flex items-center gap-4 pb-2">
                      <span className="text-3xl">·</span> 사용자는 그룹화된
                      이벤트들을 한눈에 비교하고, 필요 시 개별 또는 일괄 편집할
                      수 있습니다.
                    </p>
                    <p className="flex items-center gap-4 pb-2">
                      <span className="text-3xl">·</span> 다수의 이벤트를 분석할
                      때, 특정 패턴이 반복되는지 파악하거나 이상치를 찾는 데
                      유용합니다.
                    </p>

                    <div className="text-lg font-semibold pb-2 pt-3">달성</div>
                    <p className="flex items-center gap-4 pb-2">
                      <span className="text-3xl">·</span> 기존에는 14일치 ECG
                      데이터를 수동 편집하는 데 2~3시간 이상 소요되었으나, Shape
                      Review 화면을 통해 형태 기반으로 시각적 구분이
                      가능해지면서 편집 시간을 약 30분 수준으로 단축
                    </p>
                    <p className="flex items-center gap-4 pb-2">
                      <span className="text-3xl">·</span> 약 75~85% 이상의 편집
                      시간 절감 효과를 거두며, 작업 피로도 감소 및 리포트 생산성
                      향상에 기여
                    </p>

                    <div className="text-lg font-semibold pb-2 pt-3">
                      Lesson learned
                    </div>
                    <p className="flex items-center gap-4 pb-2">
                      <span className="text-3xl">·</span> **Optimistic Update
                      with Redux**: Redux를 사용한 프로젝트에서 사용자 경험을
                      개선하기 위해 옵티미스틱 업데이트를 직접 구현. 서버 응답을
                      기다리지 않고 클라이언트에서 먼저 상태를 갱신함으로써,
                      즉각적인 UI 피드백을 제공하고 응답 지연에 따른 체감 속도를
                      줄일 수 있었던 경험
                    </p>
                    <p className="flex items-center gap-4 pb-2">
                      <span className="text-3xl">·</span> **Origin Private
                      FileSystem (OPFS) 캐싱**: 최초에 호출되는 편집할 데이터를
                      OPFS에 저장할 수 있는 편의 기능을 통해, 서버 요청 전 이를
                      우선 참조하는 로직을 구성하면서 클라이언트 기반 캐싱
                      전략에 대한 경험을 쌓음. 이를 통해 네트워크 호출을 줄이고
                      렌더링 지연 없이 빠른 응답성을 확보하여 대용량 데이터의
                      초기 로딩 시간을 약 80% 이상 단축
                    </p>
                  </div>

                  <div className="text-xl font-semibold py-5">
                    프로젝트 : Pattern Matching Mode
                  </div>
                  <div className="pl-4">
                    <div className="text-lg font-semibold pb-2">목표</div>
                    <p className="flex items-center gap-4 pb-2">
                      <span className="text-3xl">·</span> AI 기반 패턴 편집
                      자동화 도구로, 반복적인 비트 편집 작업을 줄여 편집자의
                      리포트 생산 효율을 극대화하기 위함
                    </p>
                    <p className="flex items-center gap-4 pb-2">
                      <span className="text-3xl">·</span> Shape Review로
                      커버되지 않는 특이 케이스의 수작업 편집 시간을 단축하여
                      전체적인 편집 리소스 절감을
                    </p>

                    <div className="text-lg font-semibold pb-2 pt-3">
                      기능 설명
                    </div>
                    <p className="flex items-center gap-4 pb-2">
                      <span className="text-3xl">·</span> 반복적으로 나타나는
                      **유사 파형(Shape)**을 자동으로 식별하고,
                    </p>
                    <p className="flex items-center gap-4 pb-2">
                      <span className="text-3xl">·</span> 사용자가 설정한 대표
                      비트를 기반으로 유사 비트를 찾아 일괄 수정/추가/삭제할 수
                      있는 기능
                    </p>
                    <p className="flex items-center gap-4 pb-2">
                      <span className="text-3xl">·</span> 빠르고 정확한 비트
                      편집을 통해 리포트 품질과 생산성을 동시에 향상시킬 수 있음
                    </p>

                    <div className="text-lg font-semibold pb-2 pt-3">달성</div>
                    <p className="flex items-center gap-4 pb-2">
                      <span className="text-3xl">·</span> 반복적인 비트 편집을
                      위한 API 성능을 개선하여, 기존 약 13,000회 이상 필요했던
                      작업을 20~30회 수준으로 최적화하였습니다. 이를 통해 API
                      호출 수를 90% 이상 감소시켜, 대량 편집의 효율을 획기적으로
                      개선했습니다.
                    </p>

                    <div className="text-lg font-semibold pb-2 pt-3">
                      Lesson learned
                    </div>
                    <p className="flex items-center gap-4 pb-2">
                      <span className="text-3xl">·</span> **전략 패턴과 커스텀
                      훅 분리를 통한 구조 개선**: 프로젝트 초기에는 하나의
                      커스텀 훅 안에 30~40개의 함수가 포함되어 있어, 코드의
                      가독성 저하, 역할 불분명, 유지보수 어려움 등의 문제가
                      있었습니다. 이를 해결하기 위해 전략 패턴을 도입하고, 기능
                      단위로 역할이 명확한 커스텀 훅을 분리했습니다.
                    </p>
                  </div>

                  <div className="text-xl font-semibold py-5">
                    그외 프로젝트
                  </div>
                  <div className="pl-4">
                    <p className="flex items-center gap-4 pb-2">
                      <span className="text-3xl">·</span> 택배 운영 서비스 개선,
                      Custom API 호출 UI, CS 플랫폼 내재화 개발 등
                    </p>

                    <div className="text-lg font-semibold pb-2 pt-3">
                      Lesson learned
                    </div>
                    <p className="flex items-center gap-4 pb-2">
                      <span className="text-3xl">·</span> 하나의 시스템이더라도
                      사용자 유형, 도메인 목적, 업무 흐름에 따라 세분화된
                      요구사항과 각기 다른 커스터마이징이 필요하다는 것을
                      체감했습니다.
                    </p>
                    <p className="flex items-center gap-4 pb-2">
                      <span className="text-3xl">·</span> 결과적으로 "요구사항이
                      명확하지 않더라도 유연하고 견고한 구조"를 설계하는 법을
                      익히게 되었고, 사용자 중심의 제품 설계와 도메인별 특화
                      기능의 설계 감각이 크게 향상되었습니다.
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
                  Slack (2024.03.28~2024.03.30)
                </div>
                <div className="leading-relaxed w-[620px] pb-5">
                  <p className="pb-3">
                    소개 : 웹소켓을 이용하여 실시간 통신이 가능한 메신저
                    프로젝트를 진행했습니다. 다양한 라이브러리 사용과 babel,
                    webpack 설정을 진행하여 빌드하였습니다.
                  </p>
                  <p className="pb-3">
                    Stack - react, javascript, typescript, babel, webpack, swr,
                    sass, styled-components, socket
                  </p>
                </div>

                <div className="text-2xl font-normal pb-3">
                  Card Picker (2023.08~2023.09)
                </div>
                <div className="leading-relaxed w-[620px] pb-5">
                  <p className="pb-3">
                    소개 : 카드 추천 및 소비 패턴 분석 서비스. 카드 목록을
                    조회합니다. 카테고리 별 카드 들을 조회하고, 해당 카드들의
                    상세 정보를 노출하고, 카드 발급 페이지로 이동시킵니다.
                    고객의 카드 사용 파일을 업로드 하고 본인이 사용한 내역들을
                    분석하고 가장 할인 혜택이 많은 카드를 추천해줍니다.
                  </p>
                  <p className="pb-3">
                    Stack - javascript, react, redux-toolkit, javascript,
                    styled-component, tailwind, html, css, firebase, node,
                    mysql, python
                  </p>
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
                  <p className="text-xl">1. 서비스 런칭 경험</p>
                  <p className="pb-3 font-normal">
                    첫 회사에서 웹 편집기 서비스 런칭 및 맞춤형 웹사이트 구축을
                    했습니다. 서비스가 어떻게 런칭되고 운영되는지 체계적인
                    프로세스들을 경험할 수 있는 감사한 경험이었습니다.
                  </p>
                </div>
                <div>
                  <p className="text-xl">2. 커뮤니케이션 능력</p>
                  <p className="pb-3 font-normal">
                    서비스 런칭 후 개선을 해나가면서 기획, 디자인 팀과 다양한
                    프로젝트들의 협업을 진행하였습니다. 의견을 전달할 때에는
                    인과관계를 확인하거나 문서화하여 기록하고 기능 단위 별로
                    진행상황들을 공유하는 등의 효과적인 커뮤니케이션 능력을 배울
                    수 있었습니다.
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
