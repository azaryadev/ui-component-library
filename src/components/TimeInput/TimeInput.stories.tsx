import type { Meta, StoryObj } from "@storybook/react";
import TimeInput from "./index";

import {
  Title,
  Description,
  Stories,
  Canvas,
  Controls,
} from "@storybook/blocks";
import dayjs from "dayjs";
import React from "react";
import { HiClock, HiOutlineClock } from "react-icons/hi";
// import React from "react";

// Define metadata for the component
const meta: Meta<typeof TimeInput> = {
  title: "Components/TimeInput",
  component: TimeInput,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "An input field alllow user enter specify time.",
      },
      page: () => (
        <>
          <Title />
          <Description />
          <Canvas withToolbar />
          <Controls />
          {/* <ArgTypes />
          <ArgsTable /> */}
          <Stories />
        </>
      ),
    },
  },

  argTypes: {},
};
export default meta;

// Define Story objects for each variant of the component
type Story = StoryObj<typeof TimeInput>;

export const Basic: Story = {
  args: {},
};

export const TimeRangeInput: Story = {
  render: () => (
    <TimeInput.TimeInputRange
      clearable
      defaultValue={[new Date(), dayjs(new Date()).add(60, "minutes").toDate()]}
    />
  ),
};

export const Controlled: Story = {
  render: () => {
    const { TimeInputRange } = TimeInput;

    const [timeValue, setTimeValue] = React.useState<Date | null>(null);

    const [timeRangeValue, setTimeRangeValue] = React.useState<
      [Date | null, Date | null]
    >([new Date(), dayjs(new Date()).add(60, "minutes").toDate()]);

    return (
      <div className="flex flex-col gap-5">
        <TimeInput value={timeValue} onChange={setTimeValue} />
        <TimeInputRange value={timeRangeValue} onChange={setTimeRangeValue} />
      </div>
    );
  },
};

export const DisplaySeconds: Story = {
  args: {
    showSeconds: true,
    defaultValue: new Date(),
  },
};

export const DisplayAMOrPM: Story = {
  args: {
    format: "12",
    defaultValue: new Date(),
  },
};

export const Size: Story = {
  render: () => {
    return (
      <div className="flex flex-col gap-5">
        <TimeInput size="sm" />
        <TimeInput />
        <TimeInput size="lg" />
      </div>
    );
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Affix: Story = {
  render: () => {
    return (
      <div className="flex flex-col gap-5">
        <TimeInput
          prefix={<HiOutlineClock className="text-lg" />}
          suffix={null}
        />
        <TimeInput suffix={<HiClock className="text-lg" />} />
      </div>
    );
  },
};

export const InvalidState: Story = {
  args: {
    invalid: true,
  },
};
