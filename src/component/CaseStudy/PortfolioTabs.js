import React, { useState } from "react";
import CaseStudyEmbed from "./CaseStudyEmbed";

const TabButton = ({ active, onClick, children }) => (
  <button
    type="button"
    onClick={onClick}
    className={`px-6 py-3 text-lg font-semibold border-b-2 transition-colors ${
      active
        ? "text-white border-white"
        : "text-gray-400 border-transparent hover:text-gray-200"
    }`}
  >
    {children}
  </button>
);

const PortfolioTabs = ({ overview, caseStudySrc, caseStudyTitle }) => {
  const [tab, setTab] = useState("overview");

  return (
    <>
      <div className="sticky top-12 z-10 bg-black border-b border-gray-700">
        <div className="container mx-auto px-4 flex gap-2">
          <TabButton
            active={tab === "overview"}
            onClick={() => setTab("overview")}
          >
            개요
          </TabButton>
          <TabButton
            active={tab === "case-study"}
            onClick={() => setTab("case-study")}
          >
            Case Study
          </TabButton>
        </div>
      </div>

      {tab === "overview" ? (
        overview
      ) : (
        <section className="container mx-auto px-4 py-10">
          <CaseStudyEmbed src={caseStudySrc} title={caseStudyTitle} />
        </section>
      )}
    </>
  );
};

export default PortfolioTabs;
