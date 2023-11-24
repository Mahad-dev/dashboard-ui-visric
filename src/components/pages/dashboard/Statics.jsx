import React from "react";
import { ArrowDown } from "../../icons/Icons";

function Statics({ icon, title, value, increment, dropDown, className }) {
  return (
    <div
      className={`py-[20px] px-[18px] rounded-[20px] bg-primary dark:bg-secondary flex gap-[18px] w-full ${className}`}
    >
      {icon && (
        <div className="bg-body-light relative dark:bg-base-blue rounded-full w-[56px] h-[56px] flex items-center justify-center">
          {icon}
          {dropDown && (
            <span className="absolute right-[-24px]">
              <ArrowDown className='cursor-pointer' />
            </span>
          )}
        </div>
      )}
      <div className="flex flex-col">
        <span className="text-gray font-medium text-sm">{title}</span>
        <span className="text-[24px] font-bold">{value}</span>
        {increment && <span className="text-xs"><span className="text-[#05CD99]">{increment}</span> since last month</span>}
      </div>
    </div>
  );
}

export default Statics;
