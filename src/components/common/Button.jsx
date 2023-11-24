import React from "react";

function Button({ className, label , onClick }) {
  return (
    <button
     onClick={onClick}
      className={`${className} px-3 py-2 rounded-[16px] text-primary bg-blue dark:bg-purple text-[14px] font-bold`}
    >
      {label}
    </button>
  );
}

export default Button;
