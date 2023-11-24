import React from "react";
import Button from "../../common/Button";
import { FingerPrint } from "../../icons/Icons";

function ControlCard() {
  return (
    <div className="rounded-[20px] min-h-[350px] flex flex-col justify-between gap-[23px] bg-primary dark:bg-secondary w-full py-[26px] px-[21px]">
      <div className="flex items-center gap-2">
        <FingerPrint className="fill-blue dark:fill-primary" />
      </div>
      <div>
      <h4 className="text-[18px] font-bold">
        Control card security in-app with a tap
      </h4>
      <span className="text-[14px] text-gray font-medium">Discover our cards benefits, with one tap.</span>
      </div>
      <div className="flex flex-col gap-[2rem]">
        <Button
          className="!text-[12px] !w-full min-h-[46px]"
          label="Get Started"
        />
      </div>
    </div>
  );
}

export default ControlCard;
