import React, { useState } from "react";
import "./App.css";
import CustomCalendar from "./component/CustomCalendar";

function App() {
  const [value, handleDateChange] = useState(new Date());
  const [valueas, setvalue] = useState("");
  return (
    <>
      <CustomCalendar
        calendarProperty={{
          onChange: handleDateChange,
          value: value,
        }}
        radioGroupProperty={{
          onChange: (e:any) => {setvalue(e.target.value);
            console.log(e.target.value)},
          value: valueas,
          radioGroupList: [
            { value: "8am-12pm", label: "8am-12pm" },
            { value: "2pm-5pm", label: "2pm-5pm" },
          ],
        }}
         />
    </>
  );
}
export default App;

