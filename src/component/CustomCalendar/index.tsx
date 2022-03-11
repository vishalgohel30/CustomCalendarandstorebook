import React, { memo } from "react";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import inLocale from "date-fns/locale/en-IN";
import Button from "../Button";
import RadioGroup from "../RadioGroup";
import StaticPickers from "../Calendar";
import Typography from "@material-ui/core/Typography";
import moment from "moment";
import "../../App.css";

const CustomCalendar = ({
  calendarProperty,
  radioGroupProperty,
  buttonProperty,
}: any) => {
  return (
    <table style={{
      marginLeft: "auto",
      marginRight: "auto"
    }}>
      <tr>
        <td colSpan={2} style={{ backgroundColor: "#3f51b5" }}>
          <p style={{ color: "white" }}> Select a date and time</p>
        </td>
      </tr>
      <tr>
        <th rowSpan={2}>
          <MuiPickersUtilsProvider utils={DateFnsUtils} locale={inLocale}>
            <StaticPickers {...calendarProperty} />
          </MuiPickersUtilsProvider>
        </th>
        <th rowSpan={2} style={{ padding: "6%" }}>
          <div>Available Times</div>
          <Typography variant="h6">
            {moment(calendarProperty.value).format("dddd Do MMMM")}
          </Typography>
          <RadioGroup {...radioGroupProperty} />
          <Button {...buttonProperty} />
        </th>
      </tr>
    </table>
  );
};

CustomCalendar.defaultProps = {
  buttonProperty: {
    text: "Reserve appointment slot",
    variant: "contained",
    color: "primary",
    onClick: () => {},
  },
  calendarProperty: {
    onChange: () => {},
    value: new Date(),
  },
  radioGroupProperty: {
    onChange: () => {},
    value: "",
    radioGroupList: [{ value: "valuetext", label: "Lable Text" }],
  },
};

export default memo(CustomCalendar);
