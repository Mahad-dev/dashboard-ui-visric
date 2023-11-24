import { data } from "autoprefixer";
import React from "react";
import { Dots } from "../../icons/Icons";
import CheckBox from "../../inputs/CheckBox";
const headings = ["NAME", "PROGRESS", "QUANTITY", "DATE"];
const tableData = [
  {
    id: 1,
    name: "Visric PRO",
    progress: "17.5%",
    quantity: "2.458",
    date: "24.Jan.2021",
  },
  {
    id: 2,
    name: "Visric Free",
    progress: "11.5%",
    quantity: "2.458",
    date: "24.Jan.2022",
  },
  {
    id: 3,
    name: "Weekly Update",
    progress: "10.5%",
    quantity: "2.458",
    date: "24.Jan.2023",
  },
  {
    id: 4,
    name: "Venus 3D Asset",
    progress: "31.5%",
    quantity: "2.458",
    date: "24.Jan.2024",
  },
  {
    id: 5,
    name: "Marketplace",
    progress: "12.5%",
    quantity: "2.458",
    date: "24.Jan.2025",
  },
];
function CheckTable() {
  return (
    <div className="rounded-[20px] flex flex-col gap-[23px] bg-primary dark:bg-secondary w-full min-h-[345px] py-[26px] px-[31px]">
      <div className="flex justify-between">
        <div className="text-[24px] font-bold">Check Table</div>
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
                <td className="text-start py-[8px]">
                  <CheckBox
                    id={data.id}
                    label={data.name}
                    onChange={(value) => console.log(value)}
                    className="font-bold text-secondary dark:text-primary"
                  />
                </td>
                <td className="py-[8px]">{data.progress}</td>
                <td className="py-[8px]">{data.quantity}</td>
                <td className="py-[8px]">{data.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CheckTable;
