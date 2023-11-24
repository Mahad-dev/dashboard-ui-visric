import React, { useState } from "react";
import Calendar from "react-calendar";

function Calender() {
    const [value, onChange] = useState(new Date());
  return (
    <div className="rounded-[20px] bg-primary dark:bg-secondary w-full pt-[26px] px-[21px]">
      <Calendar
        onChange={onChange}
        value={value}
        view={"month"}
      />
    </div>
  );
}

export default Calender;
