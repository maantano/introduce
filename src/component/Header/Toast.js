import { useEffect } from "react";
import "./center.css";

function Toast({ setToast, text, className }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setToast(false);
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, [setToast]);

  return (
    <div className={`toast-container ${className}`}>
      <p>{text}</p>
    </div>
  );
}

export default Toast;
