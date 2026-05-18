import React from "react";
import "./Portfolio.css";
import PortfolioTabs from "../../component/CaseStudy/PortfolioTabs";

const DailyNewsOverview = () => (
  <>
    {/* Project Info */}
    <section className="container mx-auto px-4 pt-16 pb-12">
        <div className="flex items-center pb-6">
          <div className="h-2 rounded-sm bg-white w-20"></div>
          <div className="h-[1px] rounded-sm bg-white w-full"></div>
        </div>

        <div className="p-2">
          <div className="text-3xl font-bold mb-4">
            Daily Digest Bot - 200+ 채널 일일 요약 자동화 봇
          </div>
          <div className="grid grid-cols-2 gap-4 p-2">
            <div className="flex items-center">
              <div className="flex justify-center items-center text-2xl bg-gray-300 bg-opacity-20 rounded-md text-center w-1/4 p-[7px]">
                기간
              </div>
              <p className="flex items-center text-2xl ml-3 w-4/5">
                3주 (반복 개선 포함)
              </p>
            </div>
            <div className="flex">
              <div className="flex justify-center items-center text-2xl bg-gray-300 bg-opacity-20 rounded-md text-center w-1/4 p-[7px]">
                담당 파트
              </div>
              <p className="flex items-center ml-3 text-2xl w-4/5">
                단독 설계·구현 (Backend / LLM Pipeline)
              </p>
            </div>
            <div className="flex">
              <div className="flex justify-center items-center text-2xl bg-gray-300 bg-opacity-20 rounded-md text-center w-1/4 p-[7px]">
                현황
              </div>
              <p className="flex items-center text-2xl ml-3 w-4/5">
                Production · 사이드 모듈
              </p>
            </div>
            <div className="flex">
              <div className="flex justify-center items-center text-2xl bg-gray-300 bg-opacity-20 rounded-md text-center w-1/4 p-[7px]">
                참가인원
              </div>
              <p className="ml-3 flex items-center text-2xl w-4/5">
                1명 (개인)
              </p>
            </div>
            <div className="flex">
              <div className="flex justify-center items-center text-2xl bg-gray-300 bg-opacity-20 rounded-md text-center w-1/4 p-[7px]">
                기여도
              </div>
              <p className="flex items-center text-2xl ml-3 w-4/5">100%</p>
            </div>
            <div className="flex">
              <div className="flex justify-center items-center text-2xl bg-gray-300 bg-opacity-20 rounded-md text-center w-1/4 p-[7px]">
                개발 환경
              </div>
              <p className="flex items-center text-2xl ml-3 w-4/5">
                TypeScript, Node.js, Generative LLM API, 메신저 Web API, cron
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Introduction */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center pb-6">
          <div className="h-2 rounded-sm bg-white w-56"></div>
          <div className="h-[1px] rounded-sm bg-white w-full"></div>
        </div>
        <div className="p-2">
          <h2 className="text-3xl font-bold mb-4">프로젝트 소개</h2>
          <div className="p-2">
            <div className="text-lg">
              <div className="inline-block font-bold mb-4 p-3 bg-purple-700 rounded-lg">
                팀 메신저 200+ 채널의 24시간 대화를 매일 아침 LLM 2-stage
                파이프라인으로 요약·발송하는 자동화 봇
              </div>
              <br />
              "어제 회사에서 무슨 일이 있었는지"를 한 통의 메시지로 전달하기 위해
              만든 사이드 모듈입니다. 채널이 수백 개로 늘어나면 사람이 따라
              읽을 수 없어 중요한 의사결정·일정·외부 자료가 사장되는 문제를
              해결합니다. 신뢰성과 비용을 모두 잡기 위해 결정적 fallback,
              chunk 단위 멱등 회복, hang 가드를 직접 설계했고, 출시 후 발송
              누락 0건을 유지하고 있습니다.
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center pb-6">
          <div className="h-2 rounded-sm bg-white w-40"></div>
          <div className="h-[1px] rounded-sm bg-white w-full"></div>
        </div>
        <div className="p-2 text-lg">
          <h2 className="text-3xl font-bold mb-4">주요 기능</h2>
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">
                LLM 2-Stage 파이프라인
              </h3>
              <p className="text-xl mb-4">
                채널별 작은 호출(Stage 1) → 합성 호출(Stage 2)로{" "}
                <strong>비용·안정성·품질</strong>을 동시에 잡습니다.
              </p>
              <ul className="text-lg space-y-2 ml-4">
                <li>• Stage 1: 채널별 topics/actionItems 구조화 (동시성 3, timeout 90s)</li>
                <li>• Stage 2: 카테고리 그룹핑 + 최종 합성 (timeout 180s)</li>
                <li>• Stage 2 실패 시 결정적 composer fallback으로 "최소 뉴스레터" 보장</li>
                <li>• 채널 문맥(채널명·운영 목적) 주입으로 환각 감소</li>
              </ul>
            </div>

            <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-indigo-400">
                Stateless 멱등 회복
              </h3>
              <p className="text-xl mb-4">
                별도 DB 없이 <strong>출력 채널 자체를 SSOT</strong>로 두고
                chunk 단위로 멱등 회복합니다.
              </p>
              <ul className="text-lg space-y-2 ml-4">
                <li>• 부모 메시지 텍스트 = 날짜 / reply fallback text = {`{date} (idx/total)`}</li>
                <li>• 발송 직전 부모 스레드를 읽어 누락 idx만 보충</li>
                <li>• DB·캐시·락 없이 인스턴스 재시작/중복 발사에 자연 내성</li>
                <li>• "어떻게 깨져도 다음 회차가 자연 복구"되는 회복 모델</li>
              </ul>
            </div>

            <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-sky-400">
                운영 가드 (6종)
              </h3>
              <p className="text-xl mb-4">
                매일 한 번만 발사되는 시스템이라{" "}
                <strong>6종류의 사고를 설계 단계에서 차단</strong>합니다.
              </p>
              <ul className="text-lg space-y-2 ml-4">
                <li>• 중첩 실행 차단 (runStartedAt 플래그)</li>
                <li>• hang 자동 reset (30분 초과 시 강제 reset)</li>
                <li>• "빈 안내" 사전 dedup (같은 날짜 중복 방지)</li>
                <li>• self-feedback 차단 (출력 채널을 수집 대상에서 명시 제외)</li>
                <li>• 429 Retry-After 우선 + 백오프 (최대 3회)</li>
                <li>• stage별 timeout으로 회차 전체 멈춤 방지</li>
              </ul>
            </div>

            <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-emerald-400">
                신규 채널 자동 흡수
              </h3>
              <p className="text-xl mb-4">
                새 공개 채널이 생기면 <strong>다음 발사부터 자동으로 흡수</strong>되어
                운영자 개입이 0이 됩니다.
              </p>
              <ul className="text-lg space-y-2 ml-4">
                <li>• 비멤버 채널은 수집 실패 시 자동 join 후 재시도</li>
                <li>• 권한 부족·아카이브 등 실패 사유는 별도 진단 채널로 분리 보고</li>
                <li>• 출력 채널은 자기 자신을 수집 대상에서 제외 (self-feedback 방지)</li>
                <li>• 실명 화이트리스트로 LLM 인명 환각 방어</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center pb-6">
          <div className="h-2 rounded-sm bg-white w-40"></div>
          <div className="h-[1px] rounded-sm bg-white w-full"></div>
        </div>
        <div className="p-2 text-lg">
          <h2 className="text-3xl font-bold mb-4">아키텍처</h2>
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
            <pre className="text-base overflow-x-auto whitespace-pre-wrap">
              {`cron · 평일 아침 (중첩·hang 가드)
    │
1. collect       → 메신저 API · 24h window
                   비멤버 채널 자동 join · 429 백오프
                   출력 채널 자체 제외
    │
2. summarize     → LLM Stage 1 (채널별, 동시성 3, timeout 90s)
                   topics / actionItems / 인명 화이트리스트
    │
3. permalink     → 대표 메시지 링크 (동시성 3 · 500ms gap)
                   실패 시 링크 없이 진행
    │
4. compose       → LLM Stage 2 (최종 합성, timeout 180s)
                   실패 시 결정적 fallback (카테고리 그룹핑)
    │
5. 진단 리포트   → 자동 join 결과 · 실패 사유 (noise 0이면 skip)
5b. 토픽 0건     → "조용한 하루였습니다" 한 줄 안내 (봇 생존 신호)
    │
6. publish       → 부모 한 줄 + 본문은 스레드 reply chunk
                   chunk 단위 멱등 회복
    │
출력 채널 (SSOT) → 발송 채널 = 멱등 회복 기준
                   별도 DB 없이 메시지 히스토리로 판정`}
            </pre>
          </div>

          <div className="mt-6">
            <h3 className="text-2xl font-bold mb-4">주요 설계 결정</h3>
            <ul className="text-lg space-y-2 ml-4">
              <li>
                • <strong>D1. 상태를 메시지 채널에 위임</strong> — 별도 DB 없이
                출력 채널을 SSOT로 사용. 멱등성 추론 단순화.
              </li>
              <li>
                • <strong>D2. 결정적 fallback을 1급 시민으로</strong> — LLM
                실패를 예외가 아닌 정상 분기로 다룸. "최소 뉴스레터"는 항상 도착.
              </li>
              <li>
                • <strong>D3. 긍정형 프롬프트</strong> — "쓰지 마라" 대신 5가지
                카테고리로 "이걸 써라". 출력 일관성↑, 토큰↓, 환각↓.
              </li>
              <li>
                • <strong>D4. 실명 화이트리스트</strong> — LLM의 한국식 인명
                환각 차단. 행위자 미상이면 주어를 비움.
              </li>
              <li>
                • <strong>D5. 신규 채널 자동 흡수</strong> — 자동 join +
                재시도. 실패 사유는 진단 채널로 분리.
              </li>
              <li>
                • <strong>D6. 보수적 동시성</strong> — 호출 타입별
                ConcurrencyLimiter + Retry-After 우선 백오프 (최대 3회).
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tech Stack & Outcomes */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center pb-6">
          <div className="h-2 rounded-sm bg-white w-20"></div>
          <div className="h-[1px] rounded-sm bg-white w-full"></div>
        </div>
        <div className="p-2">
          <h2 className="text-3xl font-bold mb-4">기술 스택</h2>
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">
                Runtime / Language
              </h3>
              <ul className="text-lg space-y-2 ml-4">
                <li>• TypeScript (Node.js)</li>
                <li>• 단일 인스턴스 cron (KST)</li>
                <li>• 메신저 Web API (24h window)</li>
                <li>• 메신저 리치 메시지 블록 출력</li>
              </ul>
            </div>
            <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-indigo-400">
                LLM / Reliability
              </h3>
              <ul className="text-lg space-y-2 ml-4">
                <li>• Generative LLM API (provider 추상화)</li>
                <li>• 2-stage 파이프라인 (channel-level → composition)</li>
                <li>• 결정적 fallback composer</li>
                <li>• ConcurrencyLimiter · 429 백오프 정책 통일</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-4 mt-12">성과</h2>
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg mb-8">
            <ul className="text-lg space-y-3 ml-4">
              <li>
                • <strong>출시 후 발송 누락 0건</strong> — LLM 실패 · 네트워크
                hang · 메시지 분할 도중 throw 등 6종류의 사고를 설계 단계에서
                차단.
              </li>
              <li>
                • <strong>신규 채널 자동 흡수</strong> — 사람 개입 없이 다음
                발사부터 자동 반영.
              </li>
              <li>
                • <strong>엔드 투 엔드 ~5분</strong> — cron 한 번이 수집 ·
                요약 · 합성 · 발송을 모두 마침.
              </li>
              <li>
                • <strong>조용한 날의 생존 신호</strong> — 토픽 0건일 때도 한
                줄 안내로 봇이 살아있음을 알림.
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mb-4 mt-12">배운 점</h2>
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg mb-8">
            <ul className="text-lg space-y-3 ml-4">
              <li>
                • <strong>"실패하지 않는 LLM 시스템"은 없다</strong> — 결정적
                fallback을 "예외 처리"가 아니라 "정상 분기"로 두지 않으면 신뢰가
                깨지는 건 시간 문제.
              </li>
              <li>
                • <strong>상태를 어디에 둘지가 시스템의 절반</strong> — 출력
                채널을 SSOT로 삼는 결정이 복구 알고리즘의 형태를 단순화.
                인프라 하나를 줄이는 게 아니라 동기화 문제 자체를 없앤 것이
                본질.
              </li>
              <li>
                • <strong>프롬프트는 "쓰지 마라"가 아니라 "이걸 써라"</strong> —
                긍정형 기준으로 바꾸는 작은 리팩터로 토큰 · 일관성 · 환각이 모두
                개선.
              </li>
              <li>
                • <strong>가드는 "이번 회차"가 아니라 "다음 회차"를 위해</strong>{" "}
                — "지금 살린다"보다 "내일 자연 복구되게 한다"가 더 안전.
              </li>
            </ul>
          </div>
        </div>
      </section>
  </>
);

const DailyNews = () => {
  return (
    <div className="mt-24 bg-black text-white flex flex-col">
      {/* Header Section */}
      <section className="w-full h-[300px] relative bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl font-bold text-black mb-4 tracking-wider">
            Daily Digest Bot
          </div>
        </div>
      </section>

      <PortfolioTabs
        overview={<DailyNewsOverview />}
        caseStudySrc="/case-studies/daily-news.html"
        caseStudyTitle="Daily Digest Bot · Case Study"
      />
    </div>
  );
};

export default DailyNews;
