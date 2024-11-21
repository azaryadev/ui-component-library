import type { Meta, StoryObj } from "@storybook/react";
import { DatePicker } from "./index";
import {
  Title,
  Description,
  Stories,
  Canvas,
  Controls,
} from "@storybook/blocks";
import Badge from "../Badge";
import dayjs from "dayjs";
import { useState } from "react";
import { HiOutlineCalendar } from "react-icons/hi";
import { TbCalendarStats } from "react-icons/tb";
import Button from "../Button";

const { DatePickerRange, DateTimepicker } = DatePicker;

const meta: Meta<typeof DatePicker> = {
  title: "Components/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          " Date picker allow users select a date by from a popup calendar.",
      },
      page: () => (
        <>
          <Title />
          <Description />

          <Canvas />
          <Controls />
          {/* <ArgTypes /> */}
          {/* <ArgsTable /> */}
          <Stories />
        </>
      ),
    },
  },
  argTypes: {
    placeholder: { control: "text" },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

export const Basic: Story = {
  parameters: {
    docs: {
      description: {
        story: "Typical usage DatePicker component.",
      },
    },
  },
  args: {
    placeholder: "Pick a date",
  },
};

export const RangePicker: Story = {
  parameters: {
    docs: {
      description: {
        story: "Typical usage RangePicker component.",
      },
    },
  },
  render: () => <DatePickerRange placeholder="Select dates range" />,
};

export const DateTimePicker: Story = {
  parameters: {
    docs: {
      description: {
        story: "Combination of <DatePicker /> & <TimeInput />",
      },
    },
  },
  render: () => <DateTimepicker placeholder="Select dates range" />,
};

const date = new Date();

export const Format: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Picker allow us to set custom both date format for input & picker via inputFormat & labelFormat props.",
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-4">
      <div>
        <div className="mb-1 font-semibold text-sm">Input format:</div>
        <DatePicker inputFormat="MMM, DD YYYY" defaultValue={date} />
      </div>
      <div>
        <div className="mb-1 font-semibold text-sm">Inner label format:</div>
        <DatePicker
          labelFormat={{
            month: "MMMM",
            year: "YY",
          }}
          defaultValue={date}
        />
      </div>
    </div>
  ),
};

export const CustomRender: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "You can render custom day elements or apply styles & className to days with these dayStyle, dayClassName & renderDay props.",
      },
    },
  },
  render: () => (
    <DatePicker
      placeholder="Pick date"
      dayClassName={(date, { selected }) => {
        if (date.getDate() === 12 && !selected) {
          return "text-red-600";
        }

        if (selected) {
          return "text-white";
        }

        return "text-gray-700 dark:text-gray-200";
      }}
      dayStyle={(date, { selected, outOfMonth }) => {
        if (date.getDate() === 18 && !selected) {
          return { color: "#15c39a" };
        }

        if (outOfMonth) {
          return {
            opacity: 0,
            pointerEvents: "none",
            cursor: "default",
          };
        }

        return {};
      }}
      renderDay={(date) => {
        const day = date.getDate();

        if (day !== 12) {
          return <span>{day}</span>;
        }

        return (
          <span className="relative flex justify-center items-center w-full h-full">
            {day}
            <Badge className="absolute bottom-1" innerClass="h-1 w-1" />
          </span>
        );
      }}
    />
  ),
};

const dateGap = 7;

// Only able to select previos & future 7 days start from today
const minDate = dayjs(new Date())
  .subtract(dateGap, "day")
  .startOf("day")
  .toDate();
const maxDate = dayjs(new Date()).add(dateGap, "day").toDate();

export const DisableOutOfPeriodDate: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Setting minDate & maxDate props to limit available date within a period.",
      },
    },
  },
  args: {
    placeholder: "Pick a date",
    minDate: minDate,
    maxDate: maxDate,
  },
};

const DisabledCertainDateComponent = () => {
  const [dateValue, setDateValue] = useState<Date>(new Date());

  const onCertainPeriodChange = (date: Date) => {
    setDateValue(date);
  };

  const disableCertainDate = (date: Date) => {
    const banDate = [7, 15, 21];
    return banDate.includes(date.getDate());
  };

  return (
    <DatePicker
      value={dateValue}
      placeholder="Pick your date"
      disableDate={disableCertainDate}
      onChange={(date) => onCertainPeriodChange(date as Date)}
    />
  );
};

export const DisableCertainDate: Story = {
  parameters: {
    docs: {
      description: {
        story: "Disabled part of dates by using disabledDate prop callback.",
      },
    },
  },
  render: () => <DisabledCertainDateComponent />,
};

export const InputSize: Story = {
  parameters: {
    docs: {
      description: {
        story: "DatePicker allow us to control the input size via size prop.",
      },
    },
  },
  render: () => (
    <div>
      <DatePicker
        className="mb-4"
        placeholder="Select a date"
        defaultValue={date}
        size="sm"
      />
      <DatePicker
        className="mb-4"
        placeholder="Select a date"
        defaultValue={date}
      />
      <DatePicker
        className="mb-4"
        placeholder="Select a date"
        defaultValue={date}
        size="lg"
      />
    </div>
  ),
};

export const InputAffix: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "inputSuffix or inputPrefix allow us to customize input affix content.",
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-5">
      <div>
        <div className="mb-1 font-semibold text-sm">Prefix:</div>
        <DatePicker
          inputPrefix={<HiOutlineCalendar className="text-lg" />}
          inputSuffix={null}
        />
      </div>
      <div>
        <div className="mb-1 font-semibold text-sm">Suffix:</div>
        <DatePicker inputSuffix={<TbCalendarStats className="text-xl" />} />
      </div>
    </div>
  ),
};

export const ClearButton: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "You can customize the clear button via clearable or clearButton props.",
      },
    },
  },
  args: {
    defaultValue: new Date(),
    clearButton: <Button size="xs">Clear</Button>,
  },
};
