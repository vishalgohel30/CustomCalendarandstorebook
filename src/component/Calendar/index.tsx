import React, { memo } from "react";
import { useStaticState, Calendar } from "@material-ui/pickers";
import { ThemeProvider } from "@material-ui/styles";
import lightBlue from "@material-ui/core/colors/lightBlue";
import { createMuiTheme } from "@material-ui/core";

type props = {
  value: string;
  onChange: () => void;
};

const materialTheme = (createMuiTheme as any)({
  overrides: {
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: lightBlue.A200,
      },
    },
    MuiPickersDay: {
      day: {
        color: "#3f51b5",
      },
      dayDisabled: {
        color: "rgba(0, 0, 0, 0.38)",
       pointerEvents: "none",
       textDecoration: "line-through",
      },
      strike:{
        content: "",
        position: "absolute",
        bottom: 0,
        left: 0,
        borderTop: "2px solid red",
        height: "45%",
        width: "100%",
        transform: "rotateZ(-4deg)"
      }
    },
    
    MuiPickersModal: {
      dialogAction: {
        color: lightBlue["400"],
      },
    },
  },
});

function disableWeekends(date: any) {
  var d = new Date();
  d.setDate(d.getDate()-1);
  return date.getDay() === 0 ||
    date.getDay() === 6 ||
    date.getTime() < d.getTime()
    ? true
    : false;
}

const dateExcludedSundayAndSaturday = (dateValue: Date | string) => {
  let currentDate = new Date(dateValue);
  if (currentDate.getDay() === 0) {
    currentDate.setDate(currentDate.getDate() + 1);
  } else if (currentDate.getDay() === 6) {
    currentDate.setDate(currentDate.getDate() + 2);
  }
  return currentDate;
};

function StaticPickers(props: props) {
  const value = dateExcludedSundayAndSaturday(props.value);
  // you can past mostly all available props, like minDate, maxDate, autoOk and so on
  const { pickerProps } = useStaticState({...props,value});
  return (
    <>
      <div style={{ overflow: "hidden" }}>
        <ThemeProvider theme={materialTheme}>
          <Calendar
          
            {...pickerProps}
            shouldDisableDate={disableWeekends}
          />
        </ThemeProvider>
      </div>
    </>
  );
}

export default memo(StaticPickers);
