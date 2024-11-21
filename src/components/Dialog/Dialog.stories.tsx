/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from "@storybook/react";
import Dialog from "./Dialog";
import { useState } from "react";
import Button from "../Button";

import {
  Title,
  Description,
  Stories,
  Canvas,
  Controls,
} from "@storybook/blocks";

const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "The Dialog component is a modal window that appears on top of the main content to provide important information or require user input.",
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
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Dialog>;

// Wrapper component to handle state
const DialogDemo = (args: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Open Dialog
      </button>

      <Dialog
        direction="ltr"
        {...args}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Dialog Title</h2>
          <p className="mb-4">
            This is the dialog content. You can put any content here.
          </p>
          <div className=" text-right">
            <Button onClick={() => setIsOpen(false)} variant="plain">
              Close
            </Button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

// Basic Dialog
export const Default: Story = {
  render: (args) => <DialogDemo {...args} />,
};

// Custom Width Dialog
export const CustomWidth: Story = {
  render: (args) => <DialogDemo {...args} width={800} />,
};

// Custom Height Dialog
export const CustomHeight: Story = {
  render: (args) => <DialogDemo {...args} height={400} />,
};

// Non-closable Dialog
export const NonClosable: Story = {
  render: (args) => <DialogDemo {...args} closable={false} />,
};

// Custom Style Dialog
export const CustomStyle: Story = {
  render: (args) => (
    <DialogDemo
      {...args}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        },
        content: {
          background: "linear-gradient(to right, #4a90e2, #63b3ed)",
          borderRadius: "16px",
          padding: "0",
        },
      }}
    >
      <div className="p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">Styled Dialog</h2>
        <p className="mb-4">This dialog has custom styling applied.</p>
        <Button
          onClick={() => {}}
          className="px-4 py-2 bg-white text-blue-500 rounded hover:bg-gray-100"
        >
          Close
        </Button>
      </div>
    </DialogDemo>
  ),
};

// Dialog with Custom Content Class
export const CustomContentClass: Story = {
  render: (args) => (
    <DialogDemo {...args} contentClassName="bg-gray-100 rounded-lg shadow-xl" />
  ),
};

// Dialog with RTL Support
