import React from "react";

const ArrowDown = ({ className }: { className?: string }): JSX.Element => {
  return (
    <svg
      className={className}
      width="10"
      height="7"
      viewBox="0 0 10 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.3 0.650391L5 4.95039L0.7 0.650391L0 1.35039L5 6.35039L10 1.35039L9.3 0.650391Z"
        fill="black"
      />
    </svg>
  );
};

export default ArrowDown;
