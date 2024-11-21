/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from "@storybook/react";
import Drawer from "./Drawer";
import { useState } from "react";
import {
  Title,
  Description,
  Stories,
  Canvas,
  Controls,
} from "@storybook/blocks";

const meta: Meta<typeof Drawer> = {
  title: "Components/Drawer",
  component: Drawer,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "The Drawer component is a panel that slides in from the edge of the screen. It's commonly used for navigation menus, filters, or displaying additional content without leaving the current context.",
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
type Story = StoryObj<typeof Drawer>;

// Wrapper component to handle state
const DrawerDemo = (args: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Open Drawer
      </button>

      <Drawer
        className="text-white"
        {...args}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div className="p-4">
          <p>This is the drawer content. You can put any content here.</p>
          <div className="mt-4">
            <p>Some example content:</p>
            <ul className="list-disc ml-4 mt-2">
              <li>First item</li>
              <li>Second item</li>
              <li>Third item</li>
            </ul>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

// Basic Right Drawer (Default)
export const Default: Story = {
  render: (args) => <DrawerDemo {...args} />,
};

// Left Placement
export const LeftDrawer: Story = {
  render: (args) => (
    <DrawerDemo {...args} placement="left" title="Left Drawer" />
  ),
};

// Top Placement
export const TopDrawer: Story = {
  render: (args) => (
    <DrawerDemo {...args} placement="top" title="Top Drawer" height={300} />
  ),
};

// Bottom Placement
export const BottomDrawer: Story = {
  render: (args) => (
    <DrawerDemo
      {...args}
      placement="bottom"
      title="Bottom Drawer"
      height={300}
    />
  ),
};

// Custom Width
export const CustomWidth: Story = {
  render: (args) => <DrawerDemo {...args} width={600} title="Wide Drawer" />,
};

// With Footer
export const WithFooter: Story = {
  render: (args) => (
    <DrawerDemo
      {...args}
      title="Drawer with Footer"
      footer={
        <div className="flex justify-end space-x-2 p-4 bg-gray-50">
          <button
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            onClick={() => {}}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => {}}
          >
            Submit
          </button>
        </div>
      }
    />
  ),
};

// No Backdrop
export const NoBackdrop: Story = {
  render: (args) => (
    <DrawerDemo
      {...args}
      showBackdrop={false}
      title="Drawer without Backdrop"
    />
  ),
};

// Non-closable
export const NonClosable: Story = {
  render: (args) => (
    <DrawerDemo {...args} closable={false} title="Non-closable Drawer" />
  ),
};

// Custom Styled
export const CustomStyled: Story = {
  render: (args) => (
    <DrawerDemo
      {...args}
      title="Custom Styled Drawer"
      headerClass="bg-purple-600 text-white"
      bodyClass="bg-purple-50"
      footerClass="bg-purple-100"
      footer={
        <div className="flex justify-end p-4">
          <button
            className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
            onClick={() => {}}
          >
            Close
          </button>
        </div>
      }
    />
  ),
};

// With Complex Content
export const ComplexContent: Story = {
  render: (args) => (
    <DrawerDemo {...args} title="Complex Content" width={500}>
      <div className="p-4">
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">User Details</h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
              <div>
                <p className="font-medium">John Doe</p>
                <p className="text-sm text-gray-500">john@example.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t pt-4">
          <h4 className="font-medium mb-2">Recent Activity</h4>
          <div className="space-y-2">
            <div className="bg-gray-50 p-2 rounded">
              <p className="text-sm">Updated profile picture</p>
              <p className="text-xs text-gray-500">2 hours ago</p>
            </div>
            <div className="bg-gray-50 p-2 rounded">
              <p className="text-sm">Changed account settings</p>
              <p className="text-xs text-gray-500">1 day ago</p>
            </div>
          </div>
        </div>
      </div>
    </DrawerDemo>
  ),
};
