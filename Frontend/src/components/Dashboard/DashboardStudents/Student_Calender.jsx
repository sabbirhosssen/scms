import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
const Student_Calender = () => {
  const [value, onChange] = useState(new Date());
  

  return (
    <div>
      <h4>Calender</h4>
      <div className="w-full">
        <Calendar
          value={value}
          onChange={onChange}
          defaultView="month"
          nextLabel="Next"
          calendarType="islamic"
        />
      </div>
    </div>
  );
};

export default Student_Calender;
