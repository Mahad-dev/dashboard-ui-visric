import React from "react";

function ProgressBar({ className, progress }) {
  return (
    <svg
      className={`${className}`}
      xmlns="http://www.w3.org/2000/svg"
      width="108"
      height="9"
      viewBox="0 0 108 9"
      fill="none"
    >
      <rect y="0.0634766" width="100" height="8" rx="4" fill="#EFF4FB" />
      <rect y="0.0634766" width={progress} height="8" rx="4" />
    </svg>
  );
}

export default ProgressBar;
