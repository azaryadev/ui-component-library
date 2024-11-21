/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from "@storybook/react";
import Spinner from "./index";
import {
  Title,
  Description,
  Stories,
  Canvas,
  Controls,
} from "@storybook/blocks";
// import React from "react";
import { ImSpinner9 } from "react-icons/im";

// Define metadata for the component
const meta: Meta<typeof Spinner> = {
  title: "Components/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Spinner indicate the loading state of a component or page, it can help to the user aware and that the data is processing.",
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
type Story = StoryObj<typeof Spinner>;

export const Basic: Story = {
  args: {},
  //
};

export const Size: Story = {
  render: () => (
    <div className="flex items-center">
      <Spinner className="mr-4" size={30} />
      <Spinner className="mr-4" size="40px" />
      <Spinner size="3.25rem" />
    </div>
  ),
};

export const Color: Story = {
  render: () => (
    <div className="flex items-center">
      <Spinner className="mr-4 text-yellow-500" size="40px" />
      <Spinner className="mr-4 text-green-500" size="40px" />
    </div>
  ),
};

export const CustomIndicator: Story = {
  args: {
    size: 40,
    indicator: ImSpinner9,
  },
  //
};

export const Static: Story = {
  args: {
    isSpining: false,
    size: "40px",
  },
  //
};
