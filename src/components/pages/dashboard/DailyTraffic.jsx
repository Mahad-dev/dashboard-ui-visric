import React from "react";
import BarChart from "../../charts/BarChart";
import { dailyTrafficData, optionsDailyTraffic } from "../../charts/chartData";
import { MiniTriangle } from "../../icons/Icons";

function DailyTraffic() {
  return (
    <div className="rounded-[20px] flex flex-col gap-[23px] bg-primary dark:bg-secondary w-full min-h-[345px] py-[26px] px-[20px]">
      <div className="flex flex-col">
        <div className="flex justify-between">
          <span className="text-gray text-[14px] font-medium">
            Daily Trafic
          </span>
          <span className="flex items-center gap-1 text-green text-[12px]">
            <MiniTriangle />
            +2.45%
          </span>
        </div>
        <div>
          <span className="text-[34px] font-bold">2.579</span>
          <span className="text-[12px] text-gray pl-2">Visitors</span>
        </div>
      </div>
      <div className="h-full w-full">
        <BarChart
          chartData={dailyTrafficData}
          chartOptions={optionsDailyTraffic}
        />
      </div>
    </div>
  );
}

export default DailyTraffic;
