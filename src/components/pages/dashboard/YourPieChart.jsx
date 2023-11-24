import React from "react";
import { pieChartData, pieChartOptions } from "../../charts/chartData";
import PieChart from "../../../components/charts/PieChart";
function YourPieChart() {
  return (
    <div className="rounded-[20px] justify-between bg-primary dark:bg-secondary flex flex-col gap-[23px] w-full min-h-[345px] py-[26px] px-[20px]">
      <div className="flex justify-between">
        <span className="font-bold">Your Pie Chart</span>
        <span className="text-[12px] text-gray font-bold">Monthly</span>
      </div>
      <div className="w-[200px] h-[200px] mx-auto">
        <PieChart chartData={pieChartData} chartOptions={pieChartOptions} />
      </div>
      <div className="flex justify-between rounded-2xl p-3 dark:to-base-blue shadow-[0px_18px_40px_0px_rgba(112,144,176,0.12)] dark:shadow-">
        <div className="flex flex-col">
          <span className="text-[12px] text-gray font-medium flex items-center gap-1">
            <span className="block w-2 h-2 rounded-full bg-blue dark:bg-purple"></span>
            Your files
          </span>
          <span className="font-bold text-[18px]">63%</span>
        </div>
        <div className="bg-[rgba(255,255,255,0.10)] h-full w-[1px]"></div>
        <div className="flex flex-col">
          <span className="text-[12px] text-gray font-medium flex items-center gap-1 ">
            <span className="block w-2 h-2 rounded-full bg-[#6AD2FF] dark:bg-[#39B8FF]"></span>
            System
          </span>
          <span className="font-bold text-[18px]">25%</span>
        </div>  
      </div>
    </div>
  );
}

export default YourPieChart;
