import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Calendar from "./index";
import RangeCalendar from "../RangeCalendar";
import dayjs from "dayjs";
import Badge from "../Badge";
import {
  Title,
  Description,
  Stories,
  Canvas,
  Controls,
} from "@storybook/blocks";

// Utility functions


const meta: Meta<typeof Calendar> = {
  title: "Components/Calendar",
  component: Calendar,
  parameters: {
    docs: {
      description: {
        component: "",
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
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Calendar>;

// const [view, setView] = React.useState<'date' | 'month' | 'year'>('date');

export const Basic: Story = {
  parameters: {
    docs: {
      description: {
        story: "Basic usage of Calendar.",
      },
    },
  },
  render: () => {
    const [value, setValue] = React.useState<Date | null>(null);
    // const [value, setValue] = React.useState (Date)
    return (
      <div className="md:w-[280px] max-w-[280px] mx-auto">
        <Calendar value={value} onChange={setValue} />
      </div>
    );
  },
};

export const Range: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "RangeCalendar have similar behavior with Calendar, but it able to select start and end date.",
      },
    },
  },
  render: () => {
    const [value, setValue] = React.useState<[Date | null, Date | null]>( // Fixed initialization syntax
      [new Date(), dayjs(new Date()).add(5, "days").toDate()] // Corrected to use an array
    );

    return (
      <div className="md:w-[280px] max-w-[280px] mx-auto">
        <RangeCalendar value={value} onChange={setValue} />
      </div>
    );
  },
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
  render: () => {
    const [value, setValue] = React.useState<Date | null>(null);

    return (
      <div className="md:w-[280px] max-w-[280px] mx-auto">
        <Calendar
          value={value}
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
          onChange={setValue}
        />
      </div>
    );
  },
};

export const DisableOutOfPerioDate: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Setting minDate & maxDate props to limit available date within a period.",
      },
    },
  },
  render: () => {
    const [value, setValue] = React.useState<Date | null>(null);
    const dateGap = 7;
    const minDate = dayjs(new Date())
      .subtract(dateGap, "day")
      .startOf("day")
      .toDate();
    const maxDate = dayjs(new Date()).add(dateGap, "day").toDate();

    return (
      <div className="md:w-[280px] max-w-[280px] mx-auto">
        <Calendar
          value={value}
          onChange={setValue}
          minDate={minDate}
          maxDate={maxDate}
        />
      </div>
    );
  },
};

export const MultipleDateView: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Calender or RangeCalendar can have mutiple date view by setting dateViewCount more than 1.",
      },
    },
  },
  render: () => {
    const [value, setValue] = React.useState<Date | null>(null);



    return (
      <div className="overflow-x-auto ">
        <div className="w-[584x] mx-auto">
          <Calendar value={value} dateViewCount={2} onChange={setValue} />
        </div>
      </div>
    );
  },
};

export const MultipleSelection: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Calendar component allow multiple dates selection by setting multipleSelection props",
      },
    },
  },
  render: () => {
    const [value, setValue] = React.useState<Date[]>([]);

    return (
      <div className="md:w-[280px] max-w-[280px] mx-auto">
        <Calendar multipleSelection value={value} onChange={setValue} />
      </div>
    );
  },
};
