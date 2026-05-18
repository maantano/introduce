import React, { useEffect, useRef, useState } from "react";

const SCOPE = ".cs-root";

// CSS 문자열의 모든 셀렉터 앞에 SCOPE를 prefix.
// at-rule(@media, @keyframes, @supports, @font-face 등)의 본문은 재귀로 처리.
// :root는 SCOPE로 치환, html/body는 SCOPE로 치환.
const scopeCss = (css) => {
  const out = [];
  let i = 0;
  const n = css.length;

  const skipWs = () => {
    while (i < n && /\s/.test(css[i])) {
      out.push(css[i]);
      i += 1;
    }
  };

  const readBlock = () => {
    let depth = 0;
    const buf = [];
    while (i < n) {
      const ch = css[i];
      buf.push(ch);
      i += 1;
      if (ch === "{") depth += 1;
      else if (ch === "}") {
        depth -= 1;
        if (depth === 0) return buf.join("");
      }
    }
    return buf.join("");
  };

  while (i < n) {
    skipWs();
    if (i >= n) break;

    // 주석
    if (css[i] === "/" && css[i + 1] === "*") {
      const end = css.indexOf("*/", i + 2);
      if (end === -1) {
        out.push(css.slice(i));
        i = n;
      } else {
        out.push(css.slice(i, end + 2));
        i = end + 2;
      }
      continue;
    }

    // at-rule
    if (css[i] === "@") {
      const ruleStart = i;
      while (i < n && css[i] !== "{" && css[i] !== ";") i += 1;
      const prelude = css.slice(ruleStart, i);

      if (i < n && css[i] === ";") {
        // @import, @charset 등
        out.push(prelude + ";");
        i += 1;
        continue;
      }

      if (i >= n) {
        out.push(prelude);
        break;
      }

      // @media / @supports / @keyframes 등 본문 있음
      const isNested = /^@(media|supports|document|layer)\b/i.test(prelude);
      const isKeyframes = /^@(-\w+-)?keyframes\b/i.test(prelude);
      const isFontFace = /^@font-face\b/i.test(prelude);

      const block = readBlock(); // 시작 { 부터 끝 } 까지
      const inner = block.slice(1, -1);

      if (isNested) {
        out.push(prelude + "{" + scopeCss(inner) + "}");
      } else if (isKeyframes || isFontFace) {
        // 본문 내부의 셀렉터(from/to, 0%, 100%)는 스코프 적용 안 함
        out.push(prelude + block);
      } else {
        out.push(prelude + block);
      }
      continue;
    }

    // 일반 규칙: 셀렉터 부분 읽기
    const ruleStart = i;
    while (i < n && css[i] !== "{") i += 1;
    if (i >= n) {
      out.push(css.slice(ruleStart));
      break;
    }
    const selectorList = css.slice(ruleStart, i);
    const block = readBlock();

    const scopedSelectors = selectorList
      .split(",")
      .map((sel) => {
        const trimmed = sel.trim();
        if (!trimmed) return "";

        // :root / html / body 는 컨테이너로 치환
        if (/^:root\b/.test(trimmed)) {
          return trimmed.replace(/^:root\b/, SCOPE);
        }
        if (/^(html|body)\b/.test(trimmed)) {
          return trimmed.replace(/^(html|body)\b/, SCOPE);
        }

        // 이미 SCOPE로 시작하면 그대로
        if (trimmed.startsWith(SCOPE)) return trimmed;

        return `${SCOPE} ${trimmed}`;
      })
      .filter(Boolean)
      .join(", ");

    out.push(scopedSelectors + block);
  }

  return out.join("");
};

const extractParts = (htmlText) => {
  const headMatch = htmlText.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
  const bodyMatch = htmlText.match(/<body[^>]*>([\s\S]*?)<\/body>/i);

  const head = headMatch ? headMatch[1] : "";
  const body = bodyMatch ? bodyMatch[1] : htmlText;

  const rawStyles = [];
  head.replace(/<style[^>]*>([\s\S]*?)<\/style>/gi, (_, css) => {
    rawStyles.push(css);
    return "";
  });

  const styles = rawStyles.map(scopeCss);

  return { styles, body };
};

const runScriptsIn = (root) => {
  const scripts = root.querySelectorAll("script");
  scripts.forEach((oldScript) => {
    const newScript = document.createElement("script");
    for (const attr of oldScript.attributes) {
      newScript.setAttribute(attr.name, attr.value);
    }
    if (oldScript.textContent) newScript.textContent = oldScript.textContent;
    oldScript.parentNode.replaceChild(newScript, oldScript);
  });
};

const CaseStudyEmbed = ({ src, title }) => {
  const hostRef = useRef(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let cancelled = false;
    const host = hostRef.current;
    if (!host) return undefined;

    host.innerHTML = `<div class="cs-loading">Case Study 불러오는 중…</div>`;
    setStatus("loading");

    fetch(src)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.text();
      })
      .then((html) => {
        if (cancelled) return;
        const { styles, body } = extractParts(html);

        const inlineStyles = styles
          .map((css) => `<style data-cs-style>${css}</style>`)
          .join("\n");

        // 임베드 컨텍스트 보정 (이미 .cs-root 스코프 안에서 적용)
        const embedOverride = `
          <style data-cs-override>
            .cs-root #theme-toggle,
            .cs-root .btn[id="theme-toggle"] { display: none !important; }
            .cs-root .topbar { position: relative !important; top: auto !important; }
            .cs-root .layout { display: block !important; min-height: 0 !important; }
            .cs-root aside.nav {
              position: relative !important;
              height: auto !important;
              top: auto !important;
              max-height: none !important;
            }
            .cs-root main { padding: 24px !important; max-width: none !important; }
            .cs-root section { scroll-margin-top: 0 !important; }
            .cs-root { display: block; width: 100%; color: #e8eaf0; }
          </style>
        `;

        host.innerHTML = `
          ${inlineStyles}
          ${embedOverride}
          <div class="cs-root">${body}</div>
        `;

        runScriptsIn(host);
        setStatus("ready");
      })
      .catch((err) => {
        if (cancelled) return;
        host.innerHTML = `
          <div class="cs-error" style="padding:60px 20px;text-align:center;color:#ff7e98;font-size:14px;">
            Case Study를 불러오지 못했습니다 (${String(err.message || err)})
          </div>
        `;
        setStatus("error");
      });

    return () => {
      cancelled = true;
      if (host) host.innerHTML = "";
    };
  }, [src]);

  return (
    <div
      ref={hostRef}
      aria-label={title || "Case study"}
      data-status={status}
      className="cs-embed w-full rounded-lg overflow-hidden"
      style={{ minHeight: 400 }}
    />
  );
};

export default CaseStudyEmbed;
