import React from "react";
import BarChart from "../../charts/BarChart";
import {
  barChartDataWeekly,
  barChartOptionsWeekly,
} from "../../charts/chartData";
import { Chart } from "../../icons/Icons";

function WeeklyRevenue() {
  return (
    <div className="rounded-[20px] flex flex-col justify-between bg-primary dark:bg-secondary w-full min-h-[345px] py-[26px] px-[31px]">
      <div className="flex justify-between">
        <div className="text-[24px] font-bold">Weekly Revenue</div>
        <div className="bg-body-light dark:bg-base-blue w-[33px] h-[33px] rounded-[10px] flex items-center justify-center">
          <Chart className="w-6 h-6 fill-blue dark:fill-primary" />
        </div>
      </div>

      <div className="h-[250px]">
        <BarChart
          chartData={barChartDataWeekly}
          chartOptions={barChartOptionsWeekly}
        />
      </div>
    </div>
  );
}

export default WeeklyRevenue;
