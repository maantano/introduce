import React, { useState } from "react";
import { motion } from "framer-motion";
import "./InputForm.css";

const InputForm = ({
  onTextChange,
  onPatternChange,
  onAlgorithmChange,
  onGenerateRandom,
}) => {
  const [text, setText] = useState("");
  const [pattern, setPattern] = useState("");
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("kmp");

  const handleTextChange = (e) => {
    const value = e.target.value;
    setText(value);
    onTextChange(value);
  };

  const handlePatternChange = (e) => {
    const value = e.target.value;
    setPattern(value);
    onPatternChange(value);
  };

  const handleAlgorithmChange = (e) => {
    const value = e.target.value;
    setSelectedAlgorithm(value);
    onAlgorithmChange(value);
  };

  const generateRandomText = () => {
    const sampleTexts = [
      "AABAACAADAABAABA",
      "ABABDABACDABABCABAB",
      "GEEKSFORGEEKS",
      "AABAACAADAABAAABAA",
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    ];

    const samplePatterns = [
      "AABA",
      "ABABCABAB",
      "GEEKS",
      "AABAA",
      "XYZ",
      "dolor",
    ];

    const randomTextIndex = Math.floor(Math.random() * sampleTexts.length);
    const randomPatternIndex = Math.floor(
      Math.random() * samplePatterns.length
    );

    const newText = sampleTexts[randomTextIndex];
    const newPattern = samplePatterns[randomPatternIndex];

    setText(newText);
    setPattern(newPattern);
    onTextChange(newText);
    onPatternChange(newPattern);
  };

  const clearInputs = () => {
    setText("");
    setPattern("");
    onTextChange("");
    onPatternChange("");
  };

  const algorithms = [
    {
      value: "naive",
      label: "Naive Search",
      description: "기본적인 브루트 포스 방식",
    },
    {
      value: "kmp",
      label: "KMP Algorithm",
      description: "Knuth-Morris-Pratt 알고리즘",
    },
    {
      value: "boyer-moore",
      label: "Boyer-Moore",
      description: "오른쪽에서 왼쪽으로 비교",
    },
    {
      value: "rabin-karp",
      label: "Rabin-Karp",
      description: "해시 함수를 이용한 방식",
    },
  ];

  return (
    <motion.div
      className="input-form"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3>입력 데이터</h3>

      <div className="form-grid">
        <div className="input-group">
          <label htmlFor="text-input">텍스트</label>
          <textarea
            id="text-input"
            value={text}
            onChange={handleTextChange}
            placeholder="검색할 텍스트를 입력하세요..."
            rows={3}
            maxLength={500}
          />
          <div className="input-info">
            <span className="char-count">{text.length}/500</span>
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="pattern-input">패턴</label>
          <input
            id="pattern-input"
            type="text"
            value={pattern}
            onChange={handlePatternChange}
            placeholder="찾을 패턴을 입력하세요..."
            maxLength={100}
          />
          <div className="input-info">
            <span className="char-count">{pattern.length}/100</span>
          </div>
        </div>
      </div>

      <div className="algorithm-selector">
        <label>알고리즘 선택</label>
        <div className="algorithm-options">
          {algorithms.map((algo) => (
            <motion.div
              key={algo.value}
              className={`algorithm-option ${
                selectedAlgorithm === algo.value ? "selected" : ""
              }`}
              onClick={() =>
                handleAlgorithmChange({ target: { value: algo.value } })
              }
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="option-header">
                <input
                  type="radio"
                  name="algorithm"
                  value={algo.value}
                  checked={selectedAlgorithm === algo.value}
                  onChange={handleAlgorithmChange}
                />
                <span className="option-label">{algo.label}</span>
              </div>
              <p className="option-description">{algo.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="form-actions">
        <motion.button
          className="btn btn-primary"
          onClick={generateRandomText}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          🎲 랜덤 예제 생성
        </motion.button>

        <motion.button
          className="btn btn-secondary"
          onClick={clearInputs}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          🗑️ 입력 초기화
        </motion.button>
      </div>

      {text && pattern && (
        <motion.div
          className="input-summary"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
        >
          <h4>입력 요약</h4>
          <div className="summary-grid">
            <div className="summary-item">
              <strong>텍스트 길이:</strong> {text.length}자
            </div>
            <div className="summary-item">
              <strong>패턴 길이:</strong> {pattern.length}자
            </div>
            <div className="summary-item">
              <strong>선택된 알고리즘:</strong>{" "}
              {algorithms.find((a) => a.value === selectedAlgorithm)?.label}
            </div>
            <div className="summary-item">
              <strong>예상 비교 횟수:</strong> {text.length * pattern.length}회
              (최악의 경우)
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default InputForm;
