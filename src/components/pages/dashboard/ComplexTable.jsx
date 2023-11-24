
import React from "react";
import ProgressBar from "../../common/ProgressBar";
import { Check, Disable, Dots, Error } from "../../icons/Icons";
const headings = ["NAME", "STATUS", "DATE", "PROGRESS"];
const tableData = [
  {
    id: 1,
    name: "Visric PRO",
    status: "Approved",
    date: "24.Jan.2021",
    progress: "50",
  },
  {
    id: 2,
    name: "Visric Free",
    status: "Disable",
    date: "24.Jan.2022",
    progress: "100",
  },
  {
    id: 3,
    name: "Weekly Update",
    status: "Error",
    date: "24.Jan.2023",
    progress: "40",
  },
  {
    id: 4,
    name: "Venus 3D Asset",
    status: "Approved",
    date: "24.Jan.2024",
    progress: "20",
  },
];
function ComplexTable() {
  return (
    <div className="rounded-[20px] flex flex-col gap-[23px] bg-primary dark:bg-secondary w-full min-h-[345px] py-[26px] px-[25px]">
      <div className="flex justify-between">
        <div className="text-[24px] font-bold">Complex Table</div>
        <div className="bg-body-light dark:bg-base-blue w-[33px] h-[33px] rounded-[10px] flex items-center justify-center">
          <Dots className="w-6 h-6 fill-blue dark:fill-primary" />
        </div>
      </div>

      <div className="">
        <table className="w-full text-[14px]">
          <thead>
            <tr>
              {headings.map((heading, index) => (
                <th
                  className="text-gray font-medium pb-5 text-start"
                  key={index}
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="font-bold">
            {tableData.map((data) => (
              <tr key={data.id}>
                <td className="text-start py-[8px]">{data.name}</td>
                <td className="pt-[8px] pb-[20px]">
                  <div className="flex items-center gap-1">
                    {data.status === "Disable" ? (
                      <Disable />
                    ) : data.status === "Error" ? (
                      <Error />
                    ) : (
                      <Check className="!w-[20px] !h-[20px]" />
                    )}
                    {data.status}
                  </div>
                </td>
                <td className="py-[8px]">{data.date}</td>
                <td className="py-[8px]">
                  <ProgressBar
                    progress={data.progress}
                    className="fill-blue dark:fill-purple"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ComplexTable;
