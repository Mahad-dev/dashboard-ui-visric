import React from "react";
import bgBuck from '../../../assets/img/starbuck.png'
import { Snacks } from "../../icons/Icons";
function StarBuckCard() {
  return (
    <div className="rounded-[20px] min-h-[350px] flex flex-col gap-[23px] bg-primary dark:bg-secondary w-full py-[26px] px-[21px]">
        <div>
            <img src={bgBuck} alt="bg" />
        </div>
        <div>
            <span className="text-[24px] font-bold pb-3 block">Starbucks</span>
            <span className="text-gray text-[18px] font-medium flex items-center gap-2"><Snacks /> 10% cashback & off</span>
        </div>
    </div>
  );
}

export default StarBuckCard;
