import React, { memo } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

type radioGroupType = {
  value: string;
  onChange: () => void;
  radioGroupList: { value: string; label: string }[];
};

function RadioGroups({ value, onChange, radioGroupList }: radioGroupType) {
  return (
    <div>
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={value}
        onChange={onChange}
      >
        {radioGroupList.map((radioGroupObj) => (
          <FormControlLabel
            key={radioGroupObj.value}
            value={radioGroupObj.value}
            label={radioGroupObj.label}
            control={<Radio color="default" />}
          />
        ))}
      </RadioGroup>
    </div>
  );
}

RadioGroups.defaultProps = {
  value: "",
  onChange: () => {},
  radioGroupList: [
    { value: "8am-12pm", label: "8am-12pm" },
    { value: "2pm-5pm", label: "2pm-5pm" },
  ],
};
export default memo(RadioGroups);
