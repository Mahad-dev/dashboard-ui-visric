import React, { useState, useEffect, useRef } from "react";
import { chartDataTotalSpent, optionsTotalSpent } from "../../charts/chartData";
import LineChart from "../../charts/LineChart";
import { Calender, Chart, Check, MiniTriangle } from "../../icons/Icons";

function TotalSpent() {
  const [dropDownValue, setDropDownValue] = useState("This Month");
  const [dropDown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    // Function to handle outside clicks
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    // Attach the event listener to the document
    document.addEventListener("click", handleOutsideClick);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  return (
    <div className="rounded-[20px] bg-primary dark:bg-secondary w-full py-[26px] px-[31px]">
      <div className="flex justify-between">
        <div
          onClick={() => setShowDropdown(!dropDown)}
          ref={dropdownRef}
          className="relative rounded-[10px] bg-body-light dark:bg-body-dark p-[10px] cursor-pointer"
        >
          <div className="cursor-pointer flex justify-between w-[90px]">
            <Calender />
            <span className="text-gray font-medium text-[13px] select-none">
              {dropDownValue}
            </span>
          </div>
          {dropDown && (
            <ul className="absolute top-[40px] w-full right-0 left-0 text-[12px] text-gray flex flex-col gap-2 rounded-[10px] bg-body-light dark:bg-body-dark p-[8px]">
              {["This Month", "This Week", "This Daily"].map((item) => (
                <li
                  className="cursor-pointer hover:text-base-blue dark:hover:text-primary"
                  onClick={() => setDropDownValue(item)}
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="bg-body-light dark:bg-base-blue w-[33px] h-[33px] rounded-[10px] flex items-center justify-center">
          <Chart className="w-6 h-6 fill-blue dark:fill-primary" />
        </div>
      </div>

      <div className="mt-7">
        <div className="grid grid-cols-1 lg:grid-cols-[150px_1fr]">
          <div className="flex flex-col">
            <span className="text-[34px] font-bold">$37.5K</span>
            <span className="flex">
              <span className="text-[14px] text-gray mr-1">Total Spent</span>
              <span className="text-green text-xs flex items-center font-bold">
                <MiniTriangle />
                +2.45%
              </span>
            </span>
            <span className="text-green text-[1rem] flex items-center gap-1 font-bold">
              <Check />
              On track
            </span>
          </div>
          <div className="lg:h-[250px]">
            <LineChart
              chartData={chartDataTotalSpent}
              chartOptions={optionsTotalSpent}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TotalSpent;
