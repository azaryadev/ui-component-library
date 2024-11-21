import type { Meta, StoryObj } from "@storybook/react";
import Select from "./index";

import {
  Title,
  Description,
  Stories,
  Canvas,
  Controls,
} from "@storybook/blocks";
// import React from "react";

// Define metadata for the component
const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Select allows a user to pick single or multiple options from a list. This component is a wrapper of react-select.",
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
type Story = StoryObj<typeof Select>;

const colourOptions = [
  { value: "ocean", label: "Ocean", color: "#00B8D9" },
  { value: "blue", label: "Blue", color: "#0052CC" },
  { value: "purple", label: "Purple", color: "#5243AA" },
  { value: "red", label: "Red", color: "#FF5630" },
  { value: "orange", label: "Orange", color: "#FF8B00" },
  { value: "yellow", label: "Yellow", color: "#FFC400" },
  { value: "green", label: "Green", color: "#36B37E" },
  { value: "forest", label: "Forest", color: "#00875A" },
  { value: "slate", label: "Slate", color: "#253858" },
  { value: "silver", label: "Silver", color: "#666666" },
];

export const Basic: Story = {
  args: {
    placeholder: "Please Select",
    options: colourOptions,
  },
  //
};

export const Size: Story = {
  render: () => (
    <div>
      <Select
        size="sm"
        className="mb-4"
        placeholder="Please Select"
        options={colourOptions}
      ></Select>
      <Select
        className="mb-4"
        placeholder="Please Select"
        options={colourOptions}
      ></Select>
      <Select
        size="lg"
        placeholder="Please Select"
        options={colourOptions}
      ></Select>
    </div>
  ),
};

export const MultiSelection: Story = {
  args: {
    isMulti: true,
    placeholder: "Please Select",
    options: colourOptions,
    defaultValue: [colourOptions[2], colourOptions[3]],
  },
  //
};

const colourOptionsDisabled = [
  { value: "ocean", label: "Ocean", color: "#00B8D9", isDisabled: true },
  { value: "blue", label: "Blue", color: "#0052CC", isDisabled: true },
  { value: "purple", label: "Purple", color: "#5243AA" },
  { value: "red", label: "Red", color: "#FF5630", isDisabled: true },
  { value: "orange", label: "Orange", color: "#FF8B00" },
  { value: "yellow", label: "Yellow", color: "#FFC400" },
  { value: "green", label: "Green", color: "#36B37E" },
  { value: "forest", label: "Forest", color: "#00875A", isDisabled: true },
  { value: "slate", label: "Slate", color: "#253858", isDisabled: true },
  { value: "silver", label: "Silver", color: "#666666" },
];

export const Disabled: Story = {
  render: () => (
    <div>
      <Select
        className="mb-4"
        placeholder="Certain options disabled"
        options={colourOptionsDisabled}
      />
      <Select
        className="mb-4"
        isDisabled
        placeholder="Please Select"
        defaultValue={colourOptionsDisabled[2]}
        options={colourOptionsDisabled}
      />
      <Select
        isDisabled
        isMulti
        defaultValue={[colourOptionsDisabled[2], colourOptionsDisabled[3]]}
        options={colourOptionsDisabled}
      />
    </div>
  ),
};

export const DisabledSearch: Story = {
  args: {
    isSearchable: false,
    placeholder: "Please Select",
    options: colourOptions,
  },
  //
};

const groupedOptions = [
  {
    label: "Colours",
    options: [
      { value: "ocean", label: "Ocean", color: "#00B8D9" },
      { value: "blue", label: "Blue", color: "#0052CC" },
      { value: "purple", label: "Purple", color: "#5243AA" },
      { value: "red", label: "Red", color: "#FF5630" },
      { value: "orange", label: "Orange", color: "#FF8B00" },
      { value: "yellow", label: "Yellow", color: "#FFC400" },
      { value: "green", label: "Green", color: "#36B37E" },
      { value: "forest", label: "Forest", color: "#00875A" },
      { value: "slate", label: "Slate", color: "#253858" },
      { value: "silver", label: "Silver", color: "#666666" },
    ],
  },
  {
    label: "Flavours",
    options: [
      { value: "vanilla", label: "Vanilla", rating: "safe" },
      { value: "chocolate", label: "Chocolate", rating: "good" },
      { value: "strawberry", label: "Strawberry", rating: "wild" },
      {
        value: "salted-caramel",
        label: "Salted Caramel",
        rating: "crazy",
      },
    ],
  },
];

const formatGroupLabel = (data: any) => (
  <div className="font-bold text-xs uppercase text-gray-800 dark:text-white my-2">
    {data.label}
  </div>
);

export const Group: Story = {
  args: {
    defaultValue: groupedOptions[0]?.options[1],
    options: groupedOptions,
    formatGroupLabel: formatGroupLabel,
  },
  //
};
