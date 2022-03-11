import React, { memo } from "react";
import Btn from "@material-ui/core/Button";

function Button({ text, ...btnElement }: any) {
  return <Btn {...btnElement}>{text}</Btn>;
}

Button.defaultProps = {
  text: "",
  variant: "contained",
  color: "primary",
  onClick: () => {},
};

export default memo(Button);
