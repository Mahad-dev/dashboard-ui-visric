import React from "react";
import { pieChartData, pieChartOptions } from "../../charts/chartData";
import PieChart from "../../../components/charts/PieChart";
function YourPieChart() {
  return (
    <div className="rounded-[20px] justify-between  flex flex-col gap-[23px] bg-primary dark:bg-secondary w-full min-h-[345px] py-[26px] px-[20px]">
      <div className="flex justify-between">
        <span className="font-bold">Your Pie Chart</span>
        <span className="text-[12px] text-gray font-bold">Monthly</span>
      </div>
      <div className="w-[200px] h-[200px] mx-auto">
        <PieChart chartData={pieChartData} chartOptions={pieChartOptions} />
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <span className="text-[12px] text-gray font-medium">Your files</span>
          <span className="font-bold text-[18px]">63%</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[12px] text-gray font-medium">System</span>
          <span className="font-bold text-[18px]">25%</span>
        </div>
      </div>
    </div>
  );
}

export default YourPieChart;
