import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CustomCalendar from "../component/CustomCalendar";

export default {
  title: "Example/CustomCalendar",
  component: CustomCalendar,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof CustomCalendar>;

const Template: ComponentStory<typeof CustomCalendar>  = (args) => <CustomCalendar {...args} />;

export const calendar = Template.bind({});
calendar.args = {
  onClick: () => {},
  calendarProperty: {
    onChange: () => {},
    value: new Date(),
  },
  radioGroupProperty: {
    onChange: () => {},
    value: "",
    radioGroupList: [
      { value: "8am-12pm", label: "8am-12pm" },
      { value: "2pm-5pm", label: "2pm-5pm" },
    ],
    buttonProperty:{
      text: "Reserve appointment slot",
      variant: "contained",
      color: "primary",
      onClick: () => {},
    }
  },
};
