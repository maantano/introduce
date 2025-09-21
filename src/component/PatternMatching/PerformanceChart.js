import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./PerformanceChart.css";

const PerformanceChart = ({ text, pattern }) => {
  const [performanceData, setPerformanceData] = useState([]);
  const [isCalculating, setIsCalculating] = useState(false);

  useEffect(() => {
    if (text && pattern) {
      calculatePerformance();
    }
  }, [text, pattern]);

  const calculatePerformance = () => {
    setIsCalculating(true);

    // 실제 성능 측정을 위한 함수들
    const measureNaive = () => {
      const start = performance.now();
      naiveSearch(text, pattern);
      return performance.now() - start;
    };

    const measureKMP = () => {
      const start = performance.now();
      kmpSearch(text, pattern);
      return performance.now() - start;
    };

    const measureBoyerMoore = () => {
      const start = performance.now();
      boyerMooreSearch(text, pattern);
      return performance.now() - start;
    };

    const measureRabinKarp = () => {
      const start = performance.now();
      rabinKarpSearch(text, pattern);
      return performance.now() - start;
    };

    // 여러 번 실행하여 평균 계산
    const iterations = 100;
    const results = {
      naive: 0,
      kmp: 0,
      boyerMoore: 0,
      rabinKarp: 0,
    };

    for (let i = 0; i < iterations; i++) {
      results.naive += measureNaive();
      results.kmp += measureKMP();
      results.boyerMoore += measureBoyerMoore();
      results.rabinKarp += measureRabinKarp();
    }

    // 평균 계산
    Object.keys(results).forEach((key) => {
      results[key] = results[key] / iterations;
    });

    // 이론적 시간 복잡도
    const theoreticalComplexity = {
      naive: "O(n*m)",
      kmp: "O(n+m)",
      boyerMoore: "O(n*m)",
      rabinKarp: "O(n+m)",
    };

    // 공간 복잡도
    const spaceComplexity = {
      naive: "O(1)",
      kmp: "O(m)",
      boyerMoore: "O(k)",
      rabinKarp: "O(1)",
    };

    const data = [
      {
        name: "Naive Search",
        time: results.naive,
        complexity: theoreticalComplexity.naive,
        space: spaceComplexity.naive,
        color: "#ef4444",
      },
      {
        name: "KMP Algorithm",
        time: results.kmp,
        complexity: theoreticalComplexity.kmp,
        space: spaceComplexity.kmp,
        color: "#3b82f6",
      },
      {
        name: "Boyer-Moore",
        time: results.boyerMoore,
        complexity: theoreticalComplexity.boyerMoore,
        space: spaceComplexity.boyerMoore,
        color: "#10b981",
      },
      {
        name: "Rabin-Karp",
        time: results.rabinKarp,
        complexity: theoreticalComplexity.rabinKarp,
        space: spaceComplexity.rabinKarp,
        color: "#f59e0b",
      },
    ];

    setPerformanceData(data);
    setIsCalculating(false);
  };

  // 실제 알고리즘 구현들
  const naiveSearch = (text, pattern) => {
    const matches = [];
    for (let i = 0; i <= text.length - pattern.length; i++) {
      let match = true;
      for (let j = 0; j < pattern.length; j++) {
        if (text[i + j] !== pattern[j]) {
          match = false;
          break;
        }
      }
      if (match) {
        matches.push(i);
      }
    }
    return matches;
  };

  const kmpSearch = (text, pattern) => {
    const matches = [];
    const lps = computeLPS(pattern);
    let i = 0,
      j = 0;

    while (i < text.length) {
      if (pattern[j] === text[i]) {
        i++;
        j++;
      }

      if (j === pattern.length) {
        matches.push(i - j);
        j = lps[j - 1];
      } else if (i < text.length && pattern[j] !== text[i]) {
        if (j !== 0) {
          j = lps[j - 1];
        } else {
          i++;
        }
      }
    }
    return matches;
  };

  const boyerMooreSearch = (text, pattern) => {
    const matches = [];
    const badCharTable = buildBadCharTable(pattern);
    let i = 0;

    while (i <= text.length - pattern.length) {
      let j = pattern.length - 1;

      while (j >= 0 && pattern[j] === text[i + j]) {
        j--;
      }

      if (j < 0) {
        matches.push(i);
        i += pattern.length;
      } else {
        i += Math.max(1, j - (badCharTable[text[i + j]] || -1));
      }
    }
    return matches;
  };

  const rabinKarpSearch = (text, pattern) => {
    const matches = [];
    const d = 256;
    const q = 101;
    let patternHash = 0;
    let textHash = 0;

    for (let i = 0; i < pattern.length; i++) {
      patternHash = (d * patternHash + pattern.charCodeAt(i)) % q;
    }

    for (let i = 0; i < pattern.length; i++) {
      textHash = (d * textHash + text.charCodeAt(i)) % q;
    }

    for (let i = 0; i <= text.length - pattern.length; i++) {
      if (textHash === patternHash) {
        let match = true;
        for (let j = 0; j < pattern.length; j++) {
          if (text[i + j] !== pattern[j]) {
            match = false;
            break;
          }
        }
        if (match) {
          matches.push(i);
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
    return matches;
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

  const maxTime = Math.max(...performanceData.map((d) => d.time));

  return (
    <div className="performance-chart">
      <h3>알고리즘 성능 비교</h3>

      {isCalculating ? (
        <div className="calculating">
          <div className="spinner"></div>
          <p>성능 측정 중...</p>
        </div>
      ) : (
        <div className="chart-container">
          <div className="bar-chart">
            {performanceData.map((data, index) => (
              <motion.div
                key={data.name}
                className="chart-bar"
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: `${(data.time / maxTime) * 200}px`,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
              >
                <div
                  className="bar-fill"
                  style={{ backgroundColor: data.color }}
                />
                <div className="bar-label">
                  <span className="algorithm-name">{data.name}</span>
                  <span className="execution-time">
                    {data.time.toFixed(3)}ms
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="complexity-table">
            <h4>시간 복잡도 및 공간 복잡도</h4>
            <table>
              <thead>
                <tr>
                  <th>알고리즘</th>
                  <th>시간 복잡도</th>
                  <th>공간 복잡도</th>
                  <th>최선의 경우</th>
                  <th>최악의 경우</th>
                </tr>
              </thead>
              <tbody>
                {performanceData.map((data) => (
                  <tr key={data.name}>
                    <td>{data.name}</td>
                    <td className="complexity">{data.complexity}</td>
                    <td className="complexity">{data.space}</td>
                    <td>O(n+m)</td>
                    <td>O(n*m)</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="performance-insights">
            <h4>성능 분석</h4>
            <div className="insights-grid">
              <div className="insight-card">
                <h5>🏆 가장 빠른 알고리즘</h5>
                <p>
                  {performanceData.length > 0 &&
                    performanceData.reduce((min, current) =>
                      current.time < min.time ? current : min
                    ).name}
                </p>
              </div>
              <div className="insight-card">
                <h5>📊 평균 실행 시간</h5>
                <p>
                  {(
                    performanceData.reduce((sum, data) => sum + data.time, 0) /
                    performanceData.length
                  ).toFixed(3)}
                  ms
                </p>
              </div>
              <div className="insight-card">
                <h5>⚡ 성능 차이</h5>
                <p>
                  {performanceData.length > 0 &&
                    (
                      Math.max(...performanceData.map((d) => d.time)) /
                      Math.min(...performanceData.map((d) => d.time))
                    ).toFixed(1)}
                  배
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerformanceChart;
