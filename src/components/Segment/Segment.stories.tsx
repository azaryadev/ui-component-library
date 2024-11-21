import type { Meta, StoryObj } from "@storybook/react";
import Segment from "./index";
import classNames from "classnames";

import {
  Title,
  Description,
  Stories,
  Canvas,
  Controls,
} from "@storybook/blocks";
import React from "react";
import { HiCheckCircle } from "react-icons/hi";

const meta: Meta<typeof Segment> = {
  title: "Components/Segment",
  component: Segment,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Segments display a group of related options that allow user toggled on or off.",
      },
      page: () => (
        <>
          <Title />
          <Description />
          <Canvas />
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
type Story = StoryObj<typeof Segment>;

export const Basic: Story = {
  parameters: {
    docs: {
      description: "Basic usage of Segment.",
    },
  },
  render: () => (
    <Segment>
      <Segment.Item value="left">Left</Segment.Item>
      <Segment.Item value="center">Center</Segment.Item>
      <Segment.Item value="right">Right</Segment.Item>
    </Segment>
  ),
};

type SizeType = "lg" | "md" | "sm" | "xs";
export const Size: Story = {
  parameters: {
    docs: {
      description: "Segment have exact size variation as Button",
    },
  },
  render: () => {
    const [size, setSize] = React.useState<SizeType>("md");

    const onSizeChange = (val: SizeType) => {
      setSize(val);
    };
    return (
      <Segment
        size={size}
        value={size}
        onChange={(value) => onSizeChange(value as SizeType)}
      >
        <Segment.Item value="xs">Extra Small</Segment.Item>
        <Segment.Item value="sm">Small</Segment.Item>
        <Segment.Item value="md">Medium</Segment.Item>
        <Segment.Item value="lg">Large</Segment.Item>
      </Segment>
    );
  },
};

export const MultipleSelection: Story = {
  parameters: {
    docs: {
      description:
        "Segment support multiple selaction, by setting selectionType to multiple.",
    },
  },
  render: () => (
    <Segment selectionType="multiple">
      <Segment.Item value="left">Left</Segment.Item>
      <Segment.Item value="center">Center</Segment.Item>
      <Segment.Item value="right">Right</Segment.Item>
    </Segment>
  ),
};

export const Disabled: Story = {
  parameters: {
    docs: {
      description: "Make Segment Item inactive by adding the disabled prop to.",
    },
  },
  render: () => (
    <Segment>
      <Segment.Item value="left">Left</Segment.Item>
      <Segment.Item disabled value="center">
        Center
      </Segment.Item>
      <Segment.Item value="right">Right</Segment.Item>
    </Segment>
  ),
};

const segmentSelections = [
  { value: "Personal", desc: "The plan for personal.", disabled: false },
  { value: "Team", desc: "The plan for team", disabled: false },
  {
    value: "Business",
    desc: "Talk to us for business plan.",
    disabled: true,
  },
];

export const CustomSegment: Story = {
  parameters: {
    docs: {
      description:
        "Segment Item allow us to render prop as children to create a more custom look options.",
    },
  },
  render: () => (
    <Segment
      defaultValue={["Team"]}
      className="gap-4 md:flex-row flex-col bg-transparent dark:bg-transparent"
    >
      {segmentSelections.map((item) => (
        <Segment.Item
          key={item.value}
          value={item.value}
          disabled={item.disabled}
        >
          {({ active, value, onSegmentItemClick, disabled }) => {
            return (
              <div
                className={classNames(
                  "flex",
                  "ring-1",
                  "justify-between",
                  "border",
                  "rounded-xl ",
                  "dark:bg-transparent",
                  "border-gray-300",
                  "dark:border-gray-600",
                  "py-5 px-4",
                  "select-none",
                  "w-100",
                  "md:w-[260px]",
                  active
                    ? "ring-primary border-primary "
                    : "ring-transparent bg-gray-100",
                  disabled
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:ring-primary hover:border-primary cursor-pointer"
                )}
                onClick={onSegmentItemClick}
                role="button"
              >
                <div>
                  <h6>{value}</h6>
                  <p>{item.desc}</p>
                </div>
                {active && <HiCheckCircle className="text-primary text-xl" />}
              </div>
            );
          }}
        </Segment.Item>
      ))}
    </Segment>
  ),
};

export const Controlled: Story = {
  parameters: {
    docs: {
      description: "Some example of controlled Segment.",
    },
  },
  render: () => {
    const [singleSegmentValue, setSingleSegmentValue] = React.useState("left");
    const [multipleSegmentValue, setMultipleSegmentValue] = React.useState([
      "center",
    ]);

    const onSingleSelectionSegmentChange = React.useCallback(
      (val: string) => {
        setSingleSegmentValue(val);
      },
      [setSingleSegmentValue]
    );

    const onMultipleSegmentValueChange = React.useCallback(
      (val: string[]) => {
        setMultipleSegmentValue(val);
      },
      [setMultipleSegmentValue]
    );

    return (
      <>
        <div className="mb-6">
          <h6 className="mb-3">Single Selection</h6>
          <Segment
            value={singleSegmentValue}
            onChange={(val) => onSingleSelectionSegmentChange(val as string)}
          >
            <Segment.Item value="left">Left</Segment.Item>
            <Segment.Item value="center">Center</Segment.Item>
            <Segment.Item value="right">Right</Segment.Item>
          </Segment>
        </div>
        <div>
          <h6 className="mb-3">Multiple Selection</h6>
          <Segment
            selectionType="multiple"
            value={multipleSegmentValue}
            onChange={(val) => onMultipleSegmentValueChange(val as string[])}
          >
            <Segment.Item value="left">Left</Segment.Item>
            <Segment.Item value="center">Center</Segment.Item>
            <Segment.Item value="right">Right</Segment.Item>
          </Segment>
        </div>
      </>
    );
  },
};
