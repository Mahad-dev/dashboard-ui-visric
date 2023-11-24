import React from "react";
import {
  Chart,
  Dollar,
  FlagIcon,
  NewTask,
  Paper,
} from "../components/icons/Icons";
import TotalSpent from "../components/pages/dashboard/TotalSpent";
import Statics from "../components/pages/dashboard/Statics";
import WeeklyRevenue from "../components/pages/dashboard/WeeklyRevenue";
import CheckTable from "../components/pages/dashboard/CheckTable";
import DailyTraffic from "../components/pages/dashboard/DailyTraffic";
import YourPieChart from "../components/pages/dashboard/YourPieChart";
import ComplexTable from "../components/pages/dashboard/ComplexTable";
import MiniTasks from "../components/pages/dashboard/MiniTasks";
import Calender from "../components/pages/dashboard/Calender";
import TeamMembers from "../components/pages/dashboard/TeamMembers";
import BusinessDesign from "../components/pages/dashboard/BusinessDesign";
import ControlCard from "../components/pages/dashboard/ControlCard";
import StarBuckCard from "../components/pages/dashboard/StarBuckCard";

function Dashboard() {
  return (
    <div className="grid gap-[20px]">
      <div className="grid sm:grid-cols-2 md:gridgrid-cols-2 lg:grid-cols-3 3xl:grid-cols-6 gap-[20px]">
        <Statics
          icon={<Chart className="fill-blue dark:fill-primary w-8 h-8" />}
          title="Earnings"
          value="$350.4"
        />{" "}
        <Statics
          icon={<Dollar className="fill-blue dark:fill-primary w-8 h-8" />}
          title="Spend this month"
          value="$640.39"
        />{" "}
        <Statics
          className="!pb-[14px] !pt-[17px] pl-[23px]"
          title="Sales"
          value="$574.34"
          increment="+23%"
        />
        <Statics
          className="flex-row-reverse justify-between pr-[2.5rem]"
          icon={<FlagIcon />}
          title="Your balance"
          value="$1,000"
          dropDown
        />
        <Statics
          icon={
            <span className=" rounded-full flex items-center justify-center w-full h-full bg-[linear-gradient(90deg,#4481EB_0%,#04BEFE_100%)]">
              <NewTask />
            </span>
          }
          title="New Tasks"
          value="154"
        />
        <Statics
          icon={<Paper className="fill-blue dark:fill-primary w-8 h-8" />}
          title="Total Projects"
          value="350"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
        <TotalSpent />
        <WeeklyRevenue />
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-[20px]">
        <CheckTable />
        <div className="grid grid-cols-2 gap-[20px]">
          <DailyTraffic />
          <YourPieChart />
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-[20px]">
        <ComplexTable />
        <div className="grid grid-cols-2 gap-[20px]">
          <MiniTasks />
          <Calender />
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-[20px]">
        <div className="grid grid-cols-2 gap-[20px] mb-[20px]">
          <BusinessDesign />
          <TeamMembers />
        </div>
        <div className="grid grid-cols-2 gap-[20px] mb-[20px]">
          <ControlCard />
          <StarBuckCard />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
