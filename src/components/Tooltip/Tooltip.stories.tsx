import type { Meta, StoryObj } from "@storybook/react";
import Tooltip from "./index";

import {
  Title,
  Description,
  Stories,
  Canvas,
  Controls,
} from "@storybook/blocks";
// import React from "react";

// Define metadata for the component
const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Tooltips will appear when users hover on an element, it display contextual information related to the element.",
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
type Story = StoryObj<typeof Tooltip>;

export const Basic: Story = {
  render: () => (
    <div>
      <Tooltip title="Tooltip message">
        <span className="cursor-pointer">Hover me</span>
      </Tooltip>
    </div>
  ),
};

export const Customize: Story = {
  render: () => (
    <div>
      <Tooltip
        title={
          <div>
            This is <strong className="text-yellow-400">HTML</strong>
          </div>
        }
      >
        <span className="cursor-pointer">Hover me</span>
      </Tooltip>
    </div>
  ),
};

export const Placement: Story = {
  render: () => (
    <div
      style={{ maxWidth: 700 }}
      className="grid grid-cols-1 md:grid-cols-5 gap-4"
    >
      <div></div>
      <Tooltip title="Top start" placement="top-start">
        <div className="border border-gray-200 py-2 px-4 text-center cursor-pointer w-full">
          Top start
        </div>
      </Tooltip>
      <Tooltip title="Top" placement="top">
        <div className="border border-gray-200 py-2 px-4 text-center cursor-pointer w-full">
          Top
        </div>
      </Tooltip>
      <Tooltip title="Top end" placement="top-end">
        <div className="border border-gray-200 py-2 px-4 text-center cursor-pointer w-full">
          Top end
        </div>
      </Tooltip>
      <div></div>
      <Tooltip title="Left start" placement="left-start">
        <div className="border border-gray-200 py-2 px-4 text-center cursor-pointer w-full">
          Left start
        </div>
      </Tooltip>
      <div></div>
      <div></div>
      <div></div>
      <Tooltip title="Right start" placement="right-start">
        <div className="border border-gray-200 py-2 px-4 text-center cursor-pointer w-full">
          Right start
        </div>
      </Tooltip>
      <Tooltip title="Left" placement="left">
        <div className="border border-gray-200 py-2 px-4 text-center cursor-pointer w-full">
          Left
        </div>
      </Tooltip>
      <div></div>
      <div></div>
      <div></div>
      <Tooltip title="Right" placement="right">
        <div className="border border-gray-200 py-2 px-4 text-center cursor-pointer w-full">
          Right
        </div>
      </Tooltip>
      <Tooltip title="Left end" placement="left-end">
        <div className="border border-gray-200 py-2 px-4 text-center cursor-pointer w-full">
          Left end
        </div>
      </Tooltip>
      <div></div>
      <div></div>
      <div></div>
      <Tooltip title="Right end" placement="right-end">
        <div className="border border-gray-200 py-2 px-4 text-center cursor-pointer w-full">
          Right end
        </div>
      </Tooltip>
      <div></div>
      <Tooltip title="Bottom start" placement="bottom-start">
        <div className="border border-gray-200 py-2 px-4 text-center cursor-pointer w-full">
          Bottom start
        </div>
      </Tooltip>
      <Tooltip title="Bottom" placement="bottom">
        <div className="border border-gray-200 py-2 px-4 text-center cursor-pointer w-full">
          Bottom
        </div>
      </Tooltip>
      <Tooltip title="Bottom end" placement="bottom-end">
        <div className="border border-gray-200 py-2 px-4 text-center cursor-pointer w-full">
          Bottom end
        </div>
      </Tooltip>
      <div></div>
    </div>
  ),
};
