import React from "react";

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
  return (
    <div className="flex flex-col p-14 text-white max-w-[1200px] w-[1200px]">
      <div className="text-5xl  font-semibold">민경언</div>
      <div className="pt-20">
        <div className="text-3xl font-semibold pb-7">Education</div>
        <div className="text-xl">
          백석대학교 소프트웨어학(2013.03 ~ 2019.08)
        </div>
        <div className="p-3 leading-relaxed">
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
      <div className="pt-20">
        <div className="text-3xl font-semibold pb-7">Introduce</div>
        <div className="leading-relaxed w-[620px]">
          <p className="pb-3">
            안녕하세요, 저는 사용자 경험 향상을 최우선으로 두는 3년차 프론트엔드
            개발자 민경언입니다. <br />첫 번째로, 저는 프로젝트 기능 단위별로
            계획 수립을 잘합니다. <br />
          </p>
          <p className="pb-3">
            두 번째, B2C 반응형 에디터 개발에 참여하여 2022년도 회사 플랫폼
            서비스 중 고객만족도 1위를 달성하였습니다. 매달 세미나에서 고객들을
            직접 만나 서비스에 대한 피드백을 들었고 CS 업무를 같이 진행하며
            고객의 니즈에 대해 고민하는 시간을 많이 보냈습니다. 그러다보니 고객
            데이터를 기반으로 서비스를 제공하는 것에 관심이 생겼습니다. 따라서
            회원가입 시 기입된 데이터를 기반으로 홈페이지를 자동완성 해주고
            업종에 따라 템플릿을 추천해주는 기능을 개발하였습니다.
          </p>
          <p className="pb-3">
            세 번째, B2B 플랫폼 개발에 경험이 있습니다. B2C와는 다르게 단순히
            고객마다의 니즈를 해소해주고 파악하는것이 어렵다고 생각했습니다.
            단순히 개발 로직이 큰 차이가 없다고 생각했었는데 B2C는 감성적으로
            접근을 했다고 한다면 B2B는 여러 이해관계가 얽혀있다는 것을
            알게되었습니다. B2B 플랫폼에서는 주문, 견적 도메인을 담당했습니다.
            최근에는 고객의 거래내역을 기반으로 적합한 카드를 추천해주는
            프로젝트를 완료했고 오픈 뱅킹 교육을 수료하였습니다.
          </p>
        </div>
      </div>
      <div className="pt-20">
        <div className="text-3xl font-semibold pb-7">History</div>
        <div className="leading-relaxed">
          <div className="text-3xl font-normal py-5">
            이커머스 개발 Unit(2021.02~2023.03)
          </div>
          <div>
            <div className="text-2xl font-normal py-5">
              WE빌더서비스 : 홈페이지 & 쇼핑몰 사이트 제작 웹 에디터(B2C)
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
            <div className="p-3 leading-loose">
              <div className="pl-4">
                <p className="flex items-center gap-4">
                  <span className="text-3xl">·</span> 총 21명- PM: 1명,
                  프론트엔드: 4명, 백엔드: 3명, 퍼블리셔: 2명, 디자인: 2명,
                  기획: 4명, 운영: 3 명, QA: 2명, 기여도 50%
                </p>
                <p className="flex items-center gap-4">
                  <span className="text-3xl">·</span> 위하고 플랫폼 내 서비스 중
                  고객 유치 1위 달성
                </p>
                <p className="flex items-center gap-4">
                  <span className="text-3xl">·</span> - Stack - Javascript,
                  jquery, html, css, php, mysql, linux, docker, docker-swarm
                </p>
              </div>
              <div className="text-xl font-semibold py-5">Frontend</div>
              <div className="pl-4">
                <p className="flex items-center gap-4">
                  <span className="text-3xl">·</span> 써드파티 로그인 연동
                </p>
                <p className="flex items-center gap-4">
                  <span className="text-3xl">·</span> 웹 에디터 고도화 개발 및
                  운영
                </p>
                <p className="flex items-center gap-4">
                  <span className="text-3xl">·</span> 적응형 템플릿 25종, 반응형
                  템플릿 27종 개발, 완성형 템플릿 15종 개발
                </p>
                <p className="flex items-center gap-4">
                  <span className="text-3xl">·</span> 쇼핑몰 관리자 UI/UX
                  개발(부가서비스, 주문/배송 설정, 회원 설정 등)
                </p>
                <p className="flex items-center gap-4">
                  <span className="text-3xl">·</span> 부가서비스 연동 개발
                </p>
                <div className="pl-7">
                  <p>- 더존 PG 연동</p>{" "}
                  <p> - 트래픽, 스토리지 추가, 제한, 알람 서비스 개발</p>
                </div>
                <p className="flex items-center gap-4">
                  <span className="text-3xl">·</span> 에디터 사용 매뉴얼 제작
                </p>
              </div>
              <div className="text-xl font-semibold py-5">Backend</div>
              <div className="pl-4">
                <p className="flex items-center gap-4">
                  <span className="text-3xl">·</span> 서비스 아키텍처 개선 참여
                </p>
                <p className="flex items-center gap-4">
                  <span className="text-3xl">·</span> 서버 모니터링 및 트러블
                  슈팅
                </p>
                <p className="flex items-center gap-4">
                  <span className="text-3xl">·</span> DB 클러스터링 구축
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="text-2xl font-normal py-5">
              더 포터존 : 이커머스 플랫폼(B2B)
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
                  프론트엔드: 7명, 백엔드: 9명, 퍼블리셔: 2명, 기획: 6명, 운영
                  및 QA: 3 명, 디자인: 디자인 센터, 기여도 30%
                </p>

                <p className="flex items-center gap-4">
                  <span className="text-3xl">·</span> Stack - react, redux,
                  react-query, javascript ,html, css
                </p>
              </div>
              <div className="text-xl font-semibold py-5">Frontend</div>
              <div className="pl-4">
                <p className="flex items-center gap-4">
                  <span className="text-3xl">·</span> 주문 도메인 개발
                </p>
                <div className="pl-7">
                  <p> - 유저(구매 신청, 구매 신청 내역 확인)</p>{" "}
                  <p> - 관리자(구매 신청 승인, 구매 승인 상세 내역)</p>
                </div>
                <p className="flex items-center gap-4">
                  <span className="text-3xl">·</span> 견적 도메인 개발
                </p>
                <div className="pl-7">
                  <p> - 유저(견적 신청, 견적 신청 내역 확인)</p>{" "}
                  <p> - 관리자(신청 내역 확인)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-3xl font-normal py-5">
            플랫폼개발 Unit(2019.07~2021.02)
          </div>
          <div>
            <div className="text-2xl font-normal py-5">
              요가문 서울 (2020.10~2021.01)
            </div>
            <div className="flex gap-8 my-4">
              <img className="w-1/4 rounded-lg" src={yogamoon} alt="yogamoon" />
              <div className="flex flex-col justify-center">
                <p className="flex items-center gap-4">
                  <span className="text-3xl">·</span> 기여도: 100%
                </p>
                <p className="flex items-center gap-4">
                  <span className="text-3xl">·</span> 상품 결제 개발
                </p>
                <p className="flex items-center gap-4">
                  <span className="text-3xl">·</span> 네이버 페이, 카카오 페이
                  연동 개발
                </p>
                <p className="flex items-center gap-4">
                  <span className="text-3xl">·</span> 레슨 예약 시스템 개발
                </p>
                <p className="flex items-center gap-4">
                  <span className="text-3xl">·</span>UI/UX 구축 개발
                </p>
                <p className="flex items-center gap-4">
                  <span className="text-3xl">·</span>react, redux, javascript,
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
              <img className="w-1/4 rounded-lg" src={dforest} alt="yogamoon" />
              <div className="flex flex-col justify-center">
                <p className="flex items-center gap-4">
                  <span className="text-3xl">·</span> 기여도: 100%
                </p>
                <p className="flex items-center gap-4">
                  <span className="text-3xl">·</span> 투어 및 단체 예약 개발
                </p>
                <p className="flex items-center gap-4">
                  <span className="text-3xl">·</span>UI/UX 구축 개발
                </p>
                <p className="flex items-center gap-4">
                  <span className="text-3xl">·</span>javascript, jquery, html,
                  css
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="text-2xl font-normal py-5">
              한국산업기술보호협회 (2019.11~2020.02)
            </div>
            <div className="flex gap-8 my-4">
              <img className="w-1/4 rounded-lg" src={krinruck} alt="yogamoon" />
              <div className="flex flex-col justify-center">
                <p className="flex items-center gap-4">
                  <span className="text-3xl">·</span> 기여도: 100%
                </p>
                <p className="flex items-center gap-4">
                  <span className="text-3xl">·</span> 사내 게시판 서비스 개발
                </p>
                <p className="flex items-center gap-4">
                  <span className="text-3xl">·</span> 비즈니스 워치(뉴스 기사)
                  연동 게시판 개발
                </p>
                <p className="flex items-center gap-4">
                  <span className="text-3xl">·</span>UI/UX 구축 개발
                </p>
                <p className="flex items-center gap-4">
                  <span className="text-3xl">·</span>javascript, jquery, html,
                  css
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="text-2xl font-normal py-5">
              AMARANTH10 (2019.07~2019.11)
            </div>
            <div className="flex gap-8 my-4">
              <img className="w-1/4 rounded-lg" src={amaranth} alt="yogamoon" />
              <div className="flex flex-col justify-center">
                <p className="flex items-center gap-4">
                  <span className="text-3xl">·</span> 기여도: 30% UI/UX 구축
                  개발
                </p>

                <p className="flex items-center gap-4">
                  <span className="text-3xl">·</span>react, javascript, jquery,
                  html, css
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-20">
        <div className="pb-3">
          <span className="text-3xl font-semibold">Skills</span>
          <div className="mt-3 flex flex-col justify-center gap-2">
            <span className="mr-3">Grade (나만의 기준)</span>
            <div className="flex items-center gap-2">
              <img
                className="w-5 h-5"
                src={one}
                alt="1 번 아이콘  제작자: rizal2109 - Flaticon"
              />
              <span>세팅을 혼자 할 수 있다.</span>
            </div>
            <div className="flex items-center gap-2">
              <img
                className="w-5 h-5"
                src={two}
                alt="2 번 아이콘  제작자: rizal2109 - Flaticon"
              />
              <span>
                학습 및 클론코딩을 경험해봤고, 기본 개념들을 숙지하고 있다.
                프로젝트 가능
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img
                className="w-5 h-5"
                src={three}
                alt="3 번 아이콘  제작자: rizal2109 - Flaticon"
              />
              <span>프로젝트를 혼자 완료할 수 있다.</span>
            </div>
            <div className="flex items-center gap-2">
              <img
                className="w-5 h-5"
                src={four}
                alt="4 번 아이콘  제작자: rizal2109 - Flaticon"
              />
              <span>프로젝트를 도메인을 담당하고 리딩할수 있다.</span>
            </div>
            <div className="flex items-center gap-2">
              <img
                className="w-5 h-5"
                src={five}
                alt="5 번 아이콘  제작자: rizal2109 - Flaticon"
              />
              <span>
                말을 아낀다. 이건 이렇게 하면 되는거야 라고 말 할수 있다.
              </span>
            </div>
          </div>
        </div>
        <div className="text-2xl font-normal">Frontend</div>
        <div className="p-3 leading-relaxed py-5">
          <p className="flex items-center gap-4">
            <img
              className="w-5 h-5"
              src={three}
              alt="3 번 아이콘  제작자: rizal2109 - Flaticon"
            />
            <span className="text-3xl">·</span> Html, Css, CSS-in-JS
          </p>
          <p className="flex items-center gap-4">
            <img
              className="w-5 h-5"
              src={four}
              alt="3 번 아이콘  제작자: rizal2109 - Flaticon"
            />
            <span className="text-3xl">·</span> React, Redux(React-redux,
            React-toolkit), styled-components, tailwind, Js, Jquery
          </p>
          <p className="flex items-center gap-4">
            <img
              className="w-5 h-5"
              src={two}
              alt="2 번 아이콘  제작자: rizal2109 - Flaticon"
            />
            <span className="text-3xl">·</span> TypeScript, React-Native,
            Recoil, React-Query, zustand, NextJs, firebase
          </p>
        </div>
        <div className="text-2xl font-normal">Backend</div>
        <div className="p-3 leading-relaxed py-5">
          <p className="flex items-center gap-4">
            <img
              className="w-5 h-5"
              src={two}
              alt="3 번 아이콘  제작자: rizal2109 - Flaticon"
            />
            <span className="text-3xl">·</span> Node.js, Python, PHP, mySql,
          </p>
          <p className="flex items-center gap-4">
            <img
              className="w-5 h-5"
              src={two}
              alt="3 번 아이콘  제작자: rizal2109 - Flaticon"
            />
            <span className="text-3xl">·</span> Docker, Docker Swarm
          </p>
          <p className="flex items-center gap-4">
            <img
              className="w-5 h-5"
              src={three}
              alt="2 번 아이콘  제작자: rizal2109 - Flaticon"
            />
            <span className="text-3xl">·</span> Linux Centos
          </p>
        </div>
        <div className="text-2xl font-normal">Etc</div>
        <div className="p-3 leading-relaxed py-5">
          <p className="flex items-center gap-4">
            <span className="text-3xl">·</span> IntelliJ, WebStorm, Visual
            Studio Code, Vim
          </p>
          <p className="flex items-center gap-4">
            <span className="text-3xl">·</span> Git/Github
          </p>
          <p className="flex items-center gap-4">
            <span className="text-3xl">·</span> Jira, Wiki. Slack
          </p>
        </div>
      </div>
      <div className="pt-20">
        <div className="pb-3">
          <span className="text-3xl font-semibold">회고</span>
          <div className="leading-relaxed w-[620px]">
            <div className="mt-3">
              <p className="text-xl ">서비스 런칭 경험</p>
              <p className="pb-3 font-normal">
                첫 회사에서 웹 편집기 서비스 런칭 및 맞춤형 웹사이트 구축을
                했습니다. 서비스가 어떻게 런칭되고 운영되는지 체계적인
                프로세스들을 경험할 수 있는 감사한 경험이었습니다.
                <br />
              </p>
            </div>
            <div>
              <p className="text-xl ">커뮤니케이션 능력</p>
              <p className="pb-3 font-normal">
                서비스 런칭 후 개선을 해나가면서 기획, 디자인 팀과 다양한
                프로젝트들의 협업을 진행하였습니다. 의 견을 전달할 때에는
                인과관계를 확인하거나 문서화하여 기록하고 기능 단위 별로
                진행상황들을 공유하 는 등의 효과적인 커뮤니케이션 능력을 배울 수
                있었습니다.
              </p>
            </div>
            <div>
              <p className="text-xl ">웹 & 앱 개인 프로젝트 진행</p>
              <p className="pb-3 font-normal">
                웹에 대한 프로젝트만 진행해왔기 때문에 앱 프로젝트를 진행하며
                웹과는 다른 모바일 UI/UX에 대한 경험을 넓히고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
