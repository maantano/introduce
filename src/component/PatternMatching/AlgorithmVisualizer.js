import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./AlgorithmVisualizer.css";

const AlgorithmVisualizer = ({ algorithm, text, pattern, onStepChange }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [steps, setSteps] = useState([]);
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    if (text && pattern) {
      generateSteps();
    }
  }, [text, pattern, algorithm]);

  const generateSteps = () => {
    let newSteps = [];
    let newMatches = [];

    switch (algorithm) {
      case "kmp":
        newSteps = generateKMPSteps(text, pattern);
        break;
      case "boyer-moore":
        newSteps = generateBoyerMooreSteps(text, pattern);
        break;
      case "rabin-karp":
        newSteps = generateRabinKarpSteps(text, pattern);
        break;
      default:
        newSteps = generateNaiveSteps(text, pattern);
    }

    setSteps(newSteps);
    setMatches(newMatches);
    setCurrentStep(0);
  };

  const generateKMPSteps = (text, pattern) => {
    const steps = [];
    const lps = computeLPS(pattern);
    let i = 0,
      j = 0;

    while (i < text.length) {
      steps.push({
        type: "compare",
        textIndex: i,
        patternIndex: j,
        match: text[i] === pattern[j],
        description: `비교: text[${i}]='${text[i]}' vs pattern[${j}]='${pattern[j]}'`,
      });

      if (pattern[j] === text[i]) {
        i++;
        j++;
      }

      if (j === pattern.length) {
        steps.push({
          type: "match",
          startIndex: i - j,
          endIndex: i - 1,
          description: `패턴 발견! 위치: ${i - j}`,
        });
        j = lps[j - 1];
      } else if (i < text.length && pattern[j] !== text[i]) {
        if (j !== 0) {
          j = lps[j - 1];
        } else {
          i++;
        }
      }
    }

    return steps;
  };

  const generateBoyerMooreSteps = (text, pattern) => {
    const steps = [];
    const badCharTable = buildBadCharTable(pattern);
    let i = 0;

    while (i <= text.length - pattern.length) {
      let j = pattern.length - 1;

      while (j >= 0 && pattern[j] === text[i + j]) {
        steps.push({
          type: "compare",
          textIndex: i + j,
          patternIndex: j,
          match: true,
          description: `오른쪽에서 비교: text[${i + j}]='${
            text[i + j]
          }' vs pattern[${j}]='${pattern[j]}'`,
        });
        j--;
      }

      if (j < 0) {
        steps.push({
          type: "match",
          startIndex: i,
          endIndex: i + pattern.length - 1,
          description: `패턴 발견! 위치: ${i}`,
        });
        i += pattern.length;
      } else {
        steps.push({
          type: "compare",
          textIndex: i + j,
          patternIndex: j,
          match: false,
          description: `불일치: text[${i + j}]='${
            text[i + j]
          }' vs pattern[${j}]='${pattern[j]}'`,
        });
        i += Math.max(1, j - badCharTable[text[i + j]]);
      }
    }

    return steps;
  };

  const generateRabinKarpSteps = (text, pattern) => {
    const steps = [];
    const d = 256;
    const q = 101;
    let patternHash = 0;
    let textHash = 0;

    // 패턴 해시 계산
    for (let i = 0; i < pattern.length; i++) {
      patternHash = (d * patternHash + pattern.charCodeAt(i)) % q;
    }

    // 첫 번째 윈도우 해시 계산
    for (let i = 0; i < pattern.length; i++) {
      textHash = (d * textHash + text.charCodeAt(i)) % q;
    }

    for (let i = 0; i <= text.length - pattern.length; i++) {
      steps.push({
        type: "hash",
        startIndex: i,
        endIndex: i + pattern.length - 1,
        textHash,
        patternHash,
        description: `해시 비교: text=${textHash}, pattern=${patternHash}`,
      });

      if (textHash === patternHash) {
        let match = true;
        for (let j = 0; j < pattern.length; j++) {
          if (text[i + j] !== pattern[j]) {
            match = false;
            break;
          }
        }

        if (match) {
          steps.push({
            type: "match",
            startIndex: i,
            endIndex: i + pattern.length - 1,
            description: `패턴 발견! 위치: ${i}`,
          });
        }
      }

      if (i < text.length - pattern.length) {
        textHash =
          (d *
            (textHash - text.charCodeAt(i) * Math.pow(d, pattern.length - 1)) +
            text.charCodeAt(i + pattern.length)) %
          q;
        if (textHash < 0) textHash += q;
      }
    }

    return steps;
  };

  const generateNaiveSteps = (text, pattern) => {
    const steps = [];

    for (let i = 0; i <= text.length - pattern.length; i++) {
      let match = true;

      for (let j = 0; j < pattern.length; j++) {
        steps.push({
          type: "compare",
          textIndex: i + j,
          patternIndex: j,
          match: text[i + j] === pattern[j],
          description: `비교: text[${i + j}]='${
            text[i + j]
          }' vs pattern[${j}]='${pattern[j]}'`,
        });

        if (text[i + j] !== pattern[j]) {
          match = false;
          break;
        }
      }

      if (match) {
        steps.push({
          type: "match",
          startIndex: i,
          endIndex: i + pattern.length - 1,
          description: `패턴 발견! 위치: ${i}`,
        });
      }
    }

    return steps;
  };

  const computeLPS = (pattern) => {
    const lps = new Array(pattern.length).fill(0);
    let len = 0;
    let i = 1;

    while (i < pattern.length) {
      if (pattern[i] === pattern[len]) {
        len++;
        lps[i] = len;
        i++;
      } else {
        if (len !== 0) {
          len = lps[len - 1];
        } else {
          lps[i] = 0;
          i++;
        }
      }
    }

    return lps;
  };

  const buildBadCharTable = (pattern) => {
    const table = {};
    for (let i = 0; i < pattern.length - 1; i++) {
      table[pattern[i]] = i;
    }
    return table;
  };

  const startAnimation = () => {
    setIsRunning(true);
    setCurrentStep(0);
  };

  const stopAnimation = () => {
    setIsRunning(false);
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetAnimation = () => {
    setCurrentStep(0);
    setIsRunning(false);
  };

  useEffect(() => {
    if (isRunning && currentStep < steps.length - 1) {
      const timer = setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (currentStep >= steps.length - 1) {
      setIsRunning(false);
    }
  }, [isRunning, currentStep, steps.length]);

  useEffect(() => {
    if (onStepChange) {
      onStepChange(steps[currentStep]);
    }
  }, [currentStep, steps, onStepChange]);

  const renderText = () => {
    if (!text || !pattern) return null;

    return (
      <div className="text-display">
        <div className="text-container">
          {text.split("").map((char, index) => {
            const step = steps[currentStep];
            let className = "text-char";

            if (step) {
              if (step.type === "compare" && step.textIndex === index) {
                className += " comparing";
              } else if (
                step.type === "match" &&
                index >= step.startIndex &&
                index <= step.endIndex
              ) {
                className += " matched";
              }
            }

            return (
              <span key={index} className={className}>
                {char}
              </span>
            );
          })}
        </div>
        <div className="pattern-container">
          {pattern.split("").map((char, index) => {
            const step = steps[currentStep];
            let className = "pattern-char";

            if (
              step &&
              step.type === "compare" &&
              step.patternIndex === index
            ) {
              className += " comparing";
            }

            return (
              <span key={index} className={className}>
                {char}
              </span>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="algorithm-visualizer">
      <div className="controls">
        <button onClick={startAnimation} disabled={isRunning}>
          ▶️ 시작
        </button>
        <button onClick={stopAnimation} disabled={!isRunning}>
          ⏸️ 정지
        </button>
        <button onClick={resetAnimation}>🔄 리셋</button>
        <button onClick={prevStep} disabled={currentStep === 0}>
          ⏮️ 이전
        </button>
        <button onClick={nextStep} disabled={currentStep >= steps.length - 1}>
          ⏭️ 다음
        </button>
      </div>

      <div className="progress">
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${(currentStep / Math.max(1, steps.length - 1)) * 100}%`,
            }}
          />
        </div>
        <span className="progress-text">
          {currentStep + 1} / {steps.length}
        </span>
      </div>

      {renderText()}

      <div className="step-info">
        <h3>현재 단계</h3>
        <p>{steps[currentStep]?.description || "준비 완료"}</p>
      </div>

      <div className="algorithm-info">
        <h3>알고리즘 정보</h3>
        <div className="info-grid">
          <div>
            <strong>텍스트:</strong> {text || "입력 필요"}
          </div>
          <div>
            <strong>패턴:</strong> {pattern || "입력 필요"}
          </div>
          <div>
            <strong>텍스트 길이:</strong> {text?.length || 0}
          </div>
          <div>
            <strong>패턴 길이:</strong> {pattern?.length || 0}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlgorithmVisualizer;
