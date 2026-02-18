import React from "react";
import "./Portfolio.css";

import ragScreenshot from "../../asset/ragProject/rag_screenshot.png";
import ragDemo from "../../asset/ragProject/rag_demo.mov";

const RagProject = () => {
  return (
    <div className="mt-24 bg-black text-white flex flex-col justify-center items-center">
      {/* Header Section */}
      <section className="w-full h-[300px] relative bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl font-bold text-black mb-4 tracking-wider">
            RAG Document Search
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className="container mx-auto px-4 pt-16 pb-12">
        <div className="flex items-center pb-6">
          <div className="h-2 rounded-sm bg-white w-20"></div>
          <div className="h-[1px] rounded-sm bg-white w-full"></div>
        </div>

        <div className="p-2">
          <div className="text-3xl font-bold mb-4">
            RAG Document Search - 문서 기반 AI 질의응답 시스템
          </div>
          <div className="grid grid-cols-2 gap-4 p-2">
            <div className="flex items-center">
              <div className="flex justify-center items-center text-2xl bg-gray-300 bg-opacity-20 rounded-md text-center w-1/4 p-[7px]">
                기간
              </div>
              <p className="flex items-center text-2xl ml-3 w-4/5">
                2025.01
              </p>
            </div>
            <div className="flex">
              <div className="flex justify-center items-center text-2xl bg-gray-300 bg-opacity-20 rounded-md text-center w-1/4 p-[7px]">
                담당 파트
              </div>
              <p className="flex items-center ml-3 text-2xl w-4/5">
                풀스택 개발 (Frontend + Backend)
              </p>
            </div>
            <div className="flex">
              <div className="flex justify-center items-center text-2xl bg-gray-300 bg-opacity-20 rounded-md text-center w-1/4 p-[7px]">
                현황
              </div>
              <p className="flex items-center text-2xl ml-3 w-4/5">
                개인 프로젝트
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
                React, TypeScript, FastAPI, Python, OpenAI API, ChromaDB
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
              <div className="inline-block font-bold mb-4 p-3 bg-emerald-700 rounded-lg">
                업로드된 문서를 벡터 임베딩으로 변환하고, 자연어 질문에 대해 문서
                내용을 근거로 AI가 답변을 생성하는 풀스택 RAG 시스템
              </div>
              <br />
              한국어 문서 환경에 특화되어 PDF뿐만 아니라 HWP, HWPX 포맷을
              지원하며, 각 답변에 출처 청크와 유사도 점수를 함께 제공하여 답변의
              신뢰성을 확인할 수 있습니다. 드래그 앤 드롭으로 간편하게 문서를
              업로드하고, 채팅 인터페이스에서 자연어로 질문하면 AI가 문서 내용을
              근거로 답변을 생성합니다.
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
              <h3 className="text-2xl font-bold mb-4 text-emerald-400">
                다중 문서 포맷 지원
              </h3>
              <p className="text-xl mb-4">
                한국어 문서 환경에 최적화된 <strong>다중 포맷 파싱</strong>{" "}
                시스템입니다.
              </p>
              <ul className="text-lg space-y-2 ml-4">
                <li>• PDF 텍스트 추출 (PyMuPDF)</li>
                <li>• HWP 바이너리 파싱 (OLE)</li>
                <li>• HWPX ZIP+XML 파싱</li>
                <li>• 드래그 앤 드롭 업로드</li>
              </ul>
            </div>

            <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">
                스마트 청킹 & 벡터 검색
              </h3>
              <p className="text-xl mb-4">
                슬라이딩 윈도우 + 지능형 구분점 탐지로{" "}
                <strong>의미 단위 분할</strong> 후 벡터 유사도 검색을 수행합니다.
              </p>
              <ul className="text-lg space-y-2 ml-4">
                <li>• OpenAI text-embedding-3-small 임베딩</li>
                <li>• ChromaDB 코사인 유사도 기반 Top-K 검색</li>
                <li>• 슬라이딩 윈도우 + 지능형 구분점 탐지</li>
              </ul>
            </div>

            <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">
                AI 답변 생성 & 출처 표시
              </h3>
              <p className="text-xl mb-4">
                GPT-4o-mini가 문서 컨텍스트만을 근거로{" "}
                <strong>한국어 답변을 생성</strong>하고 출처를 표시합니다.
              </p>
              <ul className="text-lg space-y-2 ml-4">
                <li>• GPT-4o-mini 기반 한국어 답변 생성</li>
                <li>• 답변마다 파일명, 유사도 점수, 원문 미리보기 제공</li>
                <li>• 사이드바 문서 목록 관리 및 통계</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshot & Demo */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center pb-6">
          <div className="h-2 rounded-sm bg-white w-40"></div>
          <div className="h-[1px] rounded-sm bg-white w-full"></div>
        </div>
        <div className="p-2">
          <h2 className="text-3xl font-bold mb-8">화면 미리보기</h2>
          <div className="flex flex-col items-center gap-10">
            <div className="w-full max-w-[1000px]">
              <p className="text-lg mb-3 text-gray-400">스크린샷</p>
              <img
                src={ragScreenshot}
                alt="RAG Document Search 화면"
                className="w-full rounded-lg border border-gray-700"
              />
            </div>
            <div className="w-full max-w-[1000px]">
              <p className="text-lg mb-3 text-gray-400">데모 영상</p>
              <video
                src={ragDemo}
                controls
                className="w-full rounded-lg border border-gray-700"
                playsInline
              />
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
              {`Browser (localhost:5173)
    │  Vite dev proxy (/api → :8000)
    │
FastAPI Backend (localhost:8000)
    ├── POST /api/upload     → 텍스트 추출 → 청킹 → 임베딩 → ChromaDB 저장
    ├── POST /api/chat       → 질문 임베딩 → 유사도 검색 → GPT-4o-mini 답변 생성
    ├── GET  /api/documents  → 문서 목록 조회
    └── DELETE /api/documents/{filename} → 문서 삭제`}
            </pre>
          </div>
          <div className="mt-6">
            <h3 className="text-2xl font-bold mb-4">설계 패턴</h3>
            <ul className="text-lg space-y-2 ml-4">
              <li>
                • <strong>벡터 저장소 추상화 (ABC + Factory)</strong> : ChromaDB
                외 Pinecone/Qdrant 확장 가능
              </li>
              <li>
                • <strong>asyncio.to_thread()</strong> : 동기 작업(파일 파싱,
                OpenAI API)의 비동기 처리
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
              <h3 className="text-2xl font-bold mb-4 text-emerald-400">
                Backend
              </h3>
              <ul className="text-lg space-y-2 ml-4">
                <li>• FastAPI, Python 3.11+</li>
                <li>• OpenAI API (GPT-4o-mini, text-embedding-3-small)</li>
                <li>• ChromaDB (벡터 데이터베이스)</li>
                <li>• PyMuPDF, olefile (문서 파싱)</li>
              </ul>
            </div>
            <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">
                Frontend
              </h3>
              <ul className="text-lg space-y-2 ml-4">
                <li>• React 18, TypeScript (strict mode)</li>
                <li>• Vite, Tailwind CSS</li>
                <li>• Custom Hooks (useChat, useDocuments)</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col">
            <p className="text-lg mb-4">GitHub</p>
            <a
              className="p-4 text-emerald-400 hover:text-emerald-300"
              href="https://github.com/maantano/rag-project"
              target="_blank"
              rel="noreferrer"
            >
              - https://github.com/maantano/rag-project
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RagProject;
