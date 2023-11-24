import React from "react";
import Button from "../../common/Button";
import { Fire, Time, Video } from "../../icons/Icons";
import Avatars from '../../../assets/img/Avatars.png'
function BusinessDesign() {
  return (
    <div className="rounded-[20px] min-h-[350px] flex flex-col justify-between gap-[23px] bg-primary dark:bg-secondary w-full py-[26px] px-[21px]">
      <div className="flex items-center gap-2">
        <div className="w-[48px] h-[48px] bg-[#FEEFEE] dark:bg-base-blue flex items-center justify-center rounded-[15px]">
          <Fire className="fill-[#EE5D50] dark:fill-primary" />
        </div>
        <div className="flex flex-col">
          <span className="text-gray font-bold text-[12px]">
            Business Design
          </span>
          <span className="font-bold text-[14px]">
            New lession is available
          </span>
        </div>
      </div>
      <h4 className="text-[18px] font-bold">
        What do you need to know to create better products?
      </h4>
      <div className="flex flex-col gap-[2rem]">
        <div className="flex gap-4">
          <span className="text-[12px] font-bold flex items-center gap-2">
            <Time /> 85 mins
          </span>
          <span className="text-[12px] font-bold flex items-center gap-2">
            <Video /> Video format
          </span>
        </div>
        <div className="flex items-center justify-between">
            <img src={Avatars} alt="img" />
            <Button className='!text-[12px]'  label='Get Started'/>
        </div>
      </div>
    </div>
  );
}

export default BusinessDesign;
