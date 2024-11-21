/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from "@storybook/react";
import Pagination from "./index";
import {
  Title,
  Description,
  Stories,
  Canvas,
  Controls,
  // ArgTypes,
} from "@storybook/blocks";
import Select from "../Select";
// import React from "react";

// Define metadata for the component
const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  component: Pagination,
  // tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Pagination component provides a user-friendly navigation system for paginated data. It includes features for navigating between pages, displaying the current page, and showing the total number of pages if required.",
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
    total: { control: "number" },
    displayTotal: { control: "boolean" },
  },
};
export default meta;

// Define Story objects for each variant of the component
type Story = StoryObj<typeof Pagination>;

const onPaginationChange = (page: number) => {
  console.log("onPaginationChange", page);
};

export const Basic: Story = {
  parameters: {
    docs: {
      description: {
        component: "Basic usage of Pagination.",
      },
    },
  },
  args: {
    onChange: onPaginationChange,
  },
};
export const More: Story = {
  parameters: {
    docs: {
      description: {
        component:
          "Pagination will diaplay ellipsis for indicating previous or continuing results when the page amount is overflow.",
      },
    },
  },
  args: {
    total: 50,
  },
};
export const Total: Story = {
  parameters: {
    docs: {
      description: {
        component:
          "Display total number of data by setting displayTotal to true.",
      },
    },
  },
  args: {
    displayTotal: true,
    total: 50,
  },
};

type Option = {
  value: number;
  label: string;
};

const options: Option[] = [
  { value: 5, label: "5 / page" },
  { value: 10, label: "10 / page" },
  { value: 20, label: "20 / page" },
  { value: 50, label: "50 / page" },
];

const onPageSelect = ({ value }: Option) => {
  console.log(value);
};

export const PageSize: Story = {
  parameters: {
    docs: {
      description: {
        component:
          "Displaying the pagination count divided by total & pageSize, often used on displaying numbers of data in a page.",
      },
    },
  },
  render: () => (
    <div className="flex items-center">
      <Pagination displayTotal pageSize={options[0]?.value} total={100} />
      <div style={{ minWidth: 120 }}>
        <Select
          size="sm"
          isSearchable={false}
          defaultValue={options[0]}
          options={options}
          onChange={(selected) => onPageSelect(selected as Option)}
        />
      </div>
    </div>
  ),
};
