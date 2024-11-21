/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from "@storybook/react";
import Progress from "./index";

import {
  Title,
  Description,
  Stories,
  Canvas,
  Controls,
} from "@storybook/blocks";

// Define metadata for the component
const meta: Meta<typeof Progress> = {
  title: "Components/Progress",
  component: Progress,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A Progress loader show the progression of an operation flow in visual way.",
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
    percent: { control: "number" },
    variant: {
      control: { type: "select" },
      options: ["line", "circle"],
    },
  },
};
export default meta;

// Define Story objects for each variant of the component
type Story = StoryObj<typeof Progress>;

export const Primary: Story = {
  args: {
    percent: 70,
  },
};

export const Circle: Story = {
  args: {
    percent: 70,
    variant: "circle",
  },
};

export const Colors: Story = {
  args: {
    percent: 20,
    customColorClass: "bg-red-500",
  },
};

export const Size: Story = {
  args: {
    percent: 20,
    size: "sm",
  },
};
