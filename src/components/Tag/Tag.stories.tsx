import type { Meta, StoryObj } from "@storybook/react";
import Tag from "./index";

import {
  Title,
  Description,
  Stories,
  Canvas,
  Controls,
} from "@storybook/blocks";
import { HiPlusCircle, HiX } from "react-icons/hi";
// import React from "react";

// Define metadata for the component
const meta: Meta<typeof Tag> = {
  title: "Components/Tag",
  component: Tag,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Tag component is used for categorize content with a keyword.",
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
};
export default meta;

// Define Story objects for each variant of the component
type Story = StoryObj<typeof Tag>;

export const Basic: Story = {
  render: () => {
    return (
      <div className="flex">
        <div className="mr-2 rtl:ml-2">
          <Tag>Basic Tag</Tag>
        </div>
      </div>
    );
  },
};

export const Affix: Story = {
  render: () => {
    return (
      <div className="flex">
        <div className="mr-2 rtl:ml-2">
          <Tag prefix>Tag 1</Tag>
        </div>
        <div className="mr-2 rtl:ml-2">
          <Tag prefix prefixClass="!bg-emerald-500">
            Tag 2
          </Tag>
        </div>
        <div className="mr-2 rtl:ml-2">
          <Tag
            prefix={
              <HiPlusCircle className="text-base !text-blue-500 mr-1 rtl:ml-1" />
            }
          >
            Tag 3
          </Tag>
        </div>
        <div className="mr-2 rtl:ml-2">
          <Tag suffix suffixClass="!bg-rose-500">
            Tag 4
          </Tag>
        </div>
        <div className="mr-2 rtl:ml-2">
          <Tag suffix={<HiX className="ml-1 rtl:mr-1 cursor-pointer" />}>
            Tag 5
          </Tag>
        </div>
      </div>
    );
  },
};

export const Custom: Story = {
  render: () => {
    return (
      <div className="flex">
        <div className="mr-2 rtl:ml-2">
          <Tag className="text-red-600 bg-red-100 dark:text-red-100 dark:bg-red-500/20 border-0">
            Tag 1
          </Tag>
        </div>
        <div className="mr-2 rtl:ml-2">
          <Tag className="text-white bg-indigo-600 border-0">Tag 2</Tag>
        </div>
        <div className="mr-2 rtl:ml-2">
          <Tag className="bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-100 border-0 rounded">
            Tag 3
          </Tag>
        </div>
      </div>
    );
  },
};
