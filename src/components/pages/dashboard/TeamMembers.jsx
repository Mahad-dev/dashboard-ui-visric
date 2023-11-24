import React, { useState } from "react";
import { Dots, Plus } from "../../icons/Icons";
import profile from "../../../assets/img/person.png";
const initialMembers = [
  {
    id: 1,
    name: "Adela Parkson",
    director: "Creative Director",
  },
  {
    id: 2,
    name: "Adela Parkson",
    director: "Creative Director",
  },
  {
    id: 3,
    name: "Adela Parkson",
    director: "Creative Director",
  },
];
function TeamMembers() {
  const [Members, setMembers] = useState(initialMembers);

  const addMembers = () => {
    setMembers((preMembers) => [
      ...preMembers,
      {
        id: Date.now(),
        name: "Adela Parkson",
        director: "Creative Director",
      },
    ]);
  };
  return (
    <div className="rounded-[20px] max-h-[350px] overflow-auto flex flex-col justify-between gap-[10px] bg-primary dark:bg-secondary w-full py-[26px] px-[21px] width-sroll-0">
      <div className="flex justify-between">
        <span className="text-[18px] font-bold">Team members</span>
        <div
          onClick={addMembers}
          className="bg-body-light dark:bg-base-blue w-[37px] h-[37px] cursor-pointer rounded-[10px] flex items-center justify-center select-none"
        >
          <Plus className=" fill-[#4318FF] dark:fill-primary" />
        </div>
      </div>
      <div className="flex flex-col gap-[14px]">
        {Members.map((member, index) => (
          <div
            key={index}
            className="rounded-[16px] py-3 px-3 flex bg-primary dark:bg-base-blue items-center justify-between shadow-[0px_18px_40px_0px_rgba(112,144,176,0.12)] dark:shadow-none"
          >
            <div className="flex items-center gap-2">
              <figure className="w-[46px] h-[46px] overflow-hidden right-full select-none">
                <img src={profile} alt="img" />
              </figure>
              <div className="flex flex-col">
                <span className="font-bold text-[15px]">Adela Parkson</span>
                <span className="text-gray text-[12px] font-medium">
                  Creative Director
                </span>
              </div>
            </div>
            <Dots className="w-6 h-6 fill-gray dark:fill-primary rotate-90" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamMembers;
