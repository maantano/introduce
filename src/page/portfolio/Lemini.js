import React from "react";
import "./Portfolio.css";
import PortfolioTabs from "../../component/CaseStudy/PortfolioTabs";

const LeminiOverview = () => (
  <>
    {/* Project Info */}
    <section className="container mx-auto px-4 pt-16 pb-12">
        <div className="flex items-center pb-6">
          <div className="h-2 rounded-sm bg-white w-20"></div>
          <div className="h-[1px] rounded-sm bg-white w-full"></div>
        </div>

        <div className="p-2">
          <div className="text-3xl font-bold mb-4">
            Lemini - 한국 법령·판례 기반 신뢰 가능한 RAG 시스템
          </div>
          <div className="grid grid-cols-2 gap-4 p-2">
            <div className="flex items-center">
              <div className="flex justify-center items-center text-2xl bg-gray-300 bg-opacity-20 rounded-md text-center w-1/4 p-[7px]">
                기간
              </div>
              <p className="flex items-center text-2xl ml-3 w-4/5">
                2025 ~ 진행중
              </p>
            </div>
            <div className="flex">
              <div className="flex justify-center items-center text-2xl bg-gray-300 bg-opacity-20 rounded-md text-center w-1/4 p-[7px]">
                담당 파트
              </div>
              <p className="flex items-center ml-3 text-2xl w-4/5">
                단독 설계·구현 (Backend / RAG / Infra / CI·CD)
              </p>
            </div>
            <div className="flex">
              <div className="flex justify-center items-center text-2xl bg-gray-300 bg-opacity-20 rounded-md text-center w-1/4 p-[7px]">
                현황
              </div>
              <p className="flex items-center text-2xl ml-3 w-4/5">
                개인 프로젝트 (Cloud Run 운영)
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
                Python, FastAPI, SQLite+FTS5, Gemini API, Cloud Run, Cloud
                Build, GCS, Next.js
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
              <div className="inline-block font-bold mb-4 p-3 bg-indigo-700 rounded-lg">
                국가법령정보 공동활용 API 기반의 법령·행정규칙·판례를 인덱싱하고,
                Hybrid Retrieval + Multi-Chain Document Review + 안전 배포
                파이프라인으로 환각과 도메인 편향을 줄이는 신뢰 가능한 RAG 시스템
              </div>
              <br />
              범용 LLM만으로는 잡기 어려운 한국 법령 도메인의 인용 정확도와 근거
              일치성 문제를 해결하기 위해, 검색(Retrieval) · 답변/검토
              (Answering) · 데이터 파이프라인(Ingest) 세 단계를 분리해 설계했습니다.
              인덱스 갱신을 운영 트래픽과 분리된 배치로 운용하고, no-traffic
              배포 + smoke 검증을 거쳐 100% 트래픽 전환하는 방식으로 "RAG 배포는
              DB 배포에 가깝다"는 관점에서 인프라를 구성했습니다.
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
              <h3 className="text-2xl font-bold mb-4 text-indigo-400">
                Hybrid Retrieval (3-way)
              </h3>
              <p className="text-xl mb-4">
                Exact(정규식) + Lexical(FTS5) + Vector를 ThreadPool로{" "}
                <strong>병렬 실행</strong>해 정확도와 다양성을 동시에 확보합니다.
              </p>
              <ul className="text-lg space-y-2 ml-4">
                <li>• "제15조의2" 같은 식별 표현은 정규식 exact가 처리</li>
                <li>• 자연어 paraphrase는 FTS5 + Vector(ANN)로 보강</li>
                <li>• LLM 의도 분석·키워드 확장으로 2차 재검색</li>
                <li>
                  • 결과는 chunk-id 머지 → 점수 정렬 → 코퍼스별 minimum quota로
                  편향 보정
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-violet-400">
                Multi-Chain Document Review (5-chain)
              </h3>
              <p className="text-xl mb-4">
                계약서·약관을 <strong>제도 / 목적 / 위험 / 판단</strong> 4관점으로
                분해해 병렬 호출하고, 마지막에 병합·정규화합니다.
              </p>
              <ul className="text-lg space-y-2 ml-4">
                <li>• 조항 파싱 후 관점별 lookup 쿼리로 RAG 컨텍스트 분배</li>
                <li>• 통합 호출(Comprehensive)이 누락에 대한 안전망</li>
                <li>• 관찰 / 미흡 / 외부고려 / 판단 스키마로 출력 정규화</li>
                <li>• ThreadPool 병렬 실행으로 wall-clock은 단일 호출 수준 유지</li>
              </ul>
            </div>

            <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-sky-400">
                Safe Rollout (No-traffic Deploy + Smoke Gate)
              </h3>
              <p className="text-xl mb-4">
                인덱스 갱신을 <strong>롤백 가능한 단계 배포</strong>로 인프라
                수준에서 강제합니다.
              </p>
              <ul className="text-lg space-y-2 ml-4">
                <li>• 수집/임베딩은 Cloud Run Job, 운영은 Cloud Run Service로 분리</li>
                <li>
                  • DB 백업 → ingest → 새 이미지 → no-traffic 배포 → smoke gate
                  → 트래픽 전환
                </li>
                <li>• 골든 쿼리 N건을 통과해야 100% 트래픽 전환</li>
                <li>• 매 배포 시 직전 DB를 별도 GCS 버킷에 자동 스냅샷</li>
              </ul>
            </div>

            <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-emerald-400">
                통합 코퍼스 인덱싱
              </h3>
              <p className="text-xl mb-4">
                법령 · 행정규칙 · 판례 <strong>3종 코퍼스</strong>를 함께
                인덱싱하고, 다층 규범이 필요한 질문에 항상 모두 컨텍스트로
                포함되도록 보장합니다.
              </p>
              <ul className="text-lg space-y-2 ml-4">
                <li>• 국가법령정보 공동활용 API 기반 자동 수집</li>
                <li>• 청킹 정책·임베딩 모델 변경을 운영 분리된 배치 잡으로 실험</li>
                <li>• 인용이 실제 청크에 존재하는지 검증하는 답변 후처리</li>
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
              {`Clients (Web / Mobile / Bot)
    │
API Gateway  ─ Q&A · Document Review · Law/Precedent Search
    │
RAG Core
    ├── Hybrid Retrieval (exact + lexical + vector, quota-aware)
    ├── Grounded Answer (citation-validated)
    └── Multi-Chain Review (5 parallel perspectives + fallback)
    │
Storage                      External
    ├── Law Corpus (SQLite + FTS5)   ├── LLM API (Gemini)
    ├── Vector Index                 └── Korean Law Open API
    └── Snapshot Bucket (GCS)

Data Pipeline (batch, isolated from prod)
    Collector → Chunker + Embedder → Indexer + Deployer
                                          │
                                no-traffic → smoke gate → 100% shift`}
            </pre>
          </div>

          <div className="mt-6">
            <h3 className="text-2xl font-bold mb-4">설계 원칙</h3>
            <ul className="text-lg space-y-2 ml-4">
              <li>
                • <strong>검색 / 답변 / 파이프라인 분리</strong> : 각 단계에
                독립 캐시·재시도·관측, 장애 격리와 점진 개선
              </li>
              <li>
                • <strong>편향은 점수 정렬 다음에 잡는다</strong> : 코퍼스 분포
                비대칭을 코퍼스별 최소 보장 후처리로 해결
              </li>
              <li>
                • <strong>긴 호출은 분해해 병렬화</strong> : 단일 프롬프트의
                컨텍스트 한계를 관점 분해 + 병합으로 우회
              </li>
              <li>
                • <strong>RAG 배포는 DB 배포에 가깝다</strong> : 백업 · 검증 ·
                트래픽 분리를 CI/CD 단계에서 강제
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tech Stack & Links */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center pb-6">
          <div className="h-2 rounded-sm bg-white w-20"></div>
          <div className="h-[1px] rounded-sm bg-white w-full"></div>
        </div>
        <div className="p-2">
          <h2 className="text-3xl font-bold mb-4">기술 스택</h2>
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-indigo-400">
                Backend / RAG
              </h3>
              <ul className="text-lg space-y-2 ml-4">
                <li>• Python, FastAPI</li>
                <li>• SQLite + FTS5 (lexical full-text)</li>
                <li>• Vector Index (Gemini Embedding)</li>
                <li>• Google Gemini API (LLM)</li>
                <li>• ThreadPool 기반 병렬 검색·검토</li>
              </ul>
            </div>
            <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-sky-400">
                Infra / Frontend
              </h3>
              <ul className="text-lg space-y-2 ml-4">
                <li>• Cloud Run (Service + Job 분리)</li>
                <li>• Cloud Build (이미지·인덱스 빌드 자동화)</li>
                <li>• GCS (스냅샷·백업 버킷)</li>
                <li>• Next.js (Frontend, 별도 배포)</li>
                <li>• No-traffic deploy + Smoke gate</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-4 mt-12">배운 점</h2>
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg mb-8">
            <ul className="text-lg space-y-3 ml-4">
              <li>
                • <strong>검색은 다층화한다</strong> — 식별 표현·자연어·도메인
                어휘는 서로 다른 검색기를 요구하며, 하나의 서비스에 묶되 내부
                분기가 운영하기 좋다.
              </li>
              <li>
                • <strong>관찰 가능성이 결국 품질을 만든다</strong> — 인용 존재
                여부, top-k 분포, fallback 발동 지표를 코드에 박아두는 것이
                막연한 프롬프트 튜닝보다 빨랐다.
              </li>
              <li>
                • <strong>스키마 정규화가 UX의 절반</strong> — LLM 출력의 모양
                변동은 응답 후처리의 강한 스키마와 폴백으로 흡수.
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <p className="text-lg mb-4">Live</p>
            <a
              className="p-4 text-indigo-400 hover:text-indigo-300"
              href="https://lemini-brown.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              - https://lemini-brown.vercel.app
            </a>
          </div>
        </div>
      </section>
  </>
);

const Lemini = () => {
  return (
    <div className="mt-24 bg-black text-white flex flex-col">
      {/* Header Section */}
      <section className="w-full h-[300px] relative bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl font-bold text-black mb-4 tracking-wider">
            Lemini
          </div>
        </div>
      </section>

      <PortfolioTabs
        overview={<LeminiOverview />}
        caseStudySrc="/case-studies/lemini.html"
        caseStudyTitle="Lemini · Korean Legal RAG System Design"
      />
    </div>
  );
};

export default Lemini;
