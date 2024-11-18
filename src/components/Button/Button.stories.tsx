/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { FaStar } from "react-icons/fa";
import {
  Title,
  Description,
  Stories,
  Canvas,
  Controls,
} from "@storybook/blocks";
// import React from "react";

// Define metadata for the component
const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Button is used to start an instant operation and is used when triggers an action or event",
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

  argTypes: {
    asElement: { control: "text" },
    variant: {
      control: { type: "select" },
      options: ["solid", "plain", "default"],
    },
    size: {
      control: { type: "select" },
      options: ["lg", "md", "sm", "xs"],
    },
    iconAlignment: {
      control: { type: "select" },
      options: ["start", "end"],
    },
    onClick: { action: "clicked" },
  },
};
export default meta;

// Define Story objects for each variant of the component
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "solid",
    size: "md",
    children: "Primary Button",
    disabled: false,
    loading: false,
  },
  //
};

export const PlainWithIcon: Story = {
  args: {
    variant: "plain",
    size: "md",
    children: "With Icon",
    icon: <FaStar />,
    iconAlignment: "start",
  },
};

export const Default: Story = {
  args: {
    variant: "default",
    size: "md",
    children: "Default Button",
  },
};

export const LoadingButton: Story = {
  args: {
    variant: "solid",
    size: "md",
    children: "Loading...",
    loading: true,
  },
};

export const DisabledButton: Story = {
  args: {
    variant: "solid",
    size: "md",
    children: "Disabled Button",
    disabled: true,
  },
};

export const BlockButton: Story = {
  args: {
    variant: "solid",
    size: "md",
    children: "Block Button",
    block: true,
  },
};

export const IconOnly: Story = {
  args: {
    variant: "solid",
    size: "md",
    icon: <FaStar />,
  },
};
