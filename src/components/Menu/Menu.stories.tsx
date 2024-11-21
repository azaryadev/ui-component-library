import type { Meta, StoryObj } from "@storybook/react";
import Menu from "./index";
import {
  Title,
  Description,
  Stories,
  Canvas,
  Controls,
} from "@storybook/blocks";
import { ReactNode } from "react";

import {
  HiOutlineCog,
  HiOutlineChat,
  HiOutlineGlobeAlt,
  HiOutlineSupport,
  HiWifi,
} from "react-icons/hi";

const meta: Meta<typeof Menu> = {
  title: "Components/Menu",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The Menu component is a flexible and customizable navigation menu for React applications.",
      },
      page: () => (
        <>
          <Title />
          <Description />
          <Canvas />
          <Controls />
          <Stories />
        </>
      ),
    },
  },
};

export default meta;

type Story = StoryObj<typeof Menu>;

const handleSelect = (key: string, e: MouseEvent) => {
  alert(key);
  console.log("event", e);
};

export const Simple: Story = {
  render: () => (
    <div
      className="border border-gray-200 dark:border-gray-700 rounded-md p-2"
      style={{ maxWidth: 250 }}
    >
      <Menu onSelect={handleSelect}>
        <Menu.MenuItem eventKey="settings">Settings</Menu.MenuItem>
        <Menu.MenuItem eventKey="message">Message</Menu.MenuItem>
        <Menu.MenuItem eventKey="gallery">Gallery</Menu.MenuItem>
      </Menu>
    </div>
  ),
};

export const CollapsableMenuItem: Story = {
  render: () => (
    <div
      className="border border-gray-200 dark:border-gray-700 rounded-md p-2"
      style={{ maxWidth: 250 }}
    >
      <Menu>
        <Menu.MenuItem eventKey="item-1">Item 1</Menu.MenuItem>
        <Menu.MenuItem eventKey="item-2">Item 2</Menu.MenuItem>
        <Menu.MenuCollapse eventKey="item-3" label="Item 3">
          <Menu.MenuItem eventKey="item-3-1">Item 3.1</Menu.MenuItem>
          <Menu.MenuItem eventKey="item-3-2">Item 3.2</Menu.MenuItem>
        </Menu.MenuCollapse>
        <Menu.MenuCollapse eventKey="item-4" label="Item 4">
          <Menu.MenuItem eventKey="item-4-1">Item 4.1</Menu.MenuItem>
          <Menu.MenuItem eventKey="item-4-2">Item 4.2</Menu.MenuItem>
          <Menu.MenuCollapse eventKey="item-4-3" label="Item 4.3">
            <Menu.MenuItem eventKey="item-4-3-1">Item 4.3.1</Menu.MenuItem>
            <Menu.MenuItem eventKey="item-4-2-1">Item 4.3.2</Menu.MenuItem>
          </Menu.MenuCollapse>
        </Menu.MenuCollapse>
      </Menu>
    </div>
  ),
};

export const MenuGroup: Story = {
  render: () => (
    <div
      className="border border-gray-200 dark:border-gray-700 rounded-md p-2"
      style={{ minWidth: 250 }}
    >
      <Menu>
        <Menu.MenuGroup key="group-1" label="Group 1">
          <Menu.MenuItem eventKey="group-1-item-1">Item 1</Menu.MenuItem>
          <Menu.MenuItem eventKey="group-1-item-2">Item 2</Menu.MenuItem>
          <Menu.MenuCollapse eventKey="group-1-item-3" label="Item 3">
            <Menu.MenuItem eventKey="group-1-item-3-1">Item 3.1</Menu.MenuItem>
            <Menu.MenuItem eventKey="group-1-item-3-2">Item 3.2</Menu.MenuItem>
          </Menu.MenuCollapse>
        </Menu.MenuGroup>
        <Menu.MenuGroup key="group-2" label="Group 2">
          <Menu.MenuItem eventKey="group-2-item-1">Item 1</Menu.MenuItem>
          <Menu.MenuItem eventKey="group-2-item-2">Item 2</Menu.MenuItem>
        </Menu.MenuGroup>
      </Menu>
    </div>
  ),
};

const MenuContent = ({ icon, label }: { icon: ReactNode; label: string }) => {
  return (
    <div className="flex items-center gap-2">
      <span className={"text-2xl"}>{icon}</span>
      <span>{label}</span>
    </div>
  );
};

export const WithIcon: Story = {
  render: () => (
    <div
      className="border border-gray-200 dark:border-gray-700 rounded-md p-2"
      style={{ minWidth: 250 }}
    >
      <Menu>
        <Menu.MenuItem eventKey="settings">
          <MenuContent icon={<HiOutlineCog />} label="Settings" />
        </Menu.MenuItem>
        <Menu.MenuItem eventKey="messages">
          <MenuContent icon={<HiOutlineChat />} label="Messages" />
        </Menu.MenuItem>
        <Menu.MenuCollapse
          eventKey="others"
          label={<MenuContent icon={<HiOutlineGlobeAlt />} label="Network" />}
        >
          <Menu.MenuItem eventKey="wifi">
            <MenuContent icon={<HiWifi />} label="Wifi" />
          </Menu.MenuItem>
          <Menu.MenuItem eventKey="support">
            <MenuContent icon={<HiOutlineSupport />} label="Support" />
          </Menu.MenuItem>
        </Menu.MenuCollapse>
      </Menu>
    </div>
  ),
};

export const DisableMenuItem: Story = {
  render: () => (
    <div
      className="border border-gray-200 dark:border-gray-700 rounded-md p-2"
      style={{ minWidth: 250 }}
    >
      <Menu>
        <Menu.MenuItem eventKey="settings">Settings</Menu.MenuItem>
        <Menu.MenuItem eventKey="message" disabled>
          Message
        </Menu.MenuItem>
        <Menu.MenuItem eventKey="gallery">Gallery</Menu.MenuItem>
      </Menu>
    </div>
  ),
};

export const DefaultActive: Story = {
  render: () => (
    <div
      className="border border-gray-200 dark:border-gray-700 rounded-md p-2"
      style={{ minWidth: 250 }}
    >
      <Menu defaultActiveKeys={["item-2", "item-3-2"]}>
        <Menu.MenuItem eventKey="item-1">Item 1</Menu.MenuItem>
        <Menu.MenuItem eventKey="item-2">Item 2</Menu.MenuItem>
        <Menu.MenuCollapse eventKey="item-3" label="Item 3">
          <Menu.MenuItem eventKey="item-3-1">Item 3.1</Menu.MenuItem>
          <Menu.MenuItem eventKey="item-3-2">Item 3.2</Menu.MenuItem>
        </Menu.MenuCollapse>
      </Menu>
    </div>
  ),
};

export const DefaultExpand: Story = {
  render: () => (
    <div
      className="border border-gray-200 dark:border-gray-700 rounded-md p-2"
      style={{ minWidth: 250 }}
    >
      <Menu defaultExpandedKeys={["item-3"]}>
        <Menu.MenuItem eventKey="item-1">Item 1</Menu.MenuItem>
        <Menu.MenuItem eventKey="item-2">Item 2</Menu.MenuItem>
        <Menu.MenuCollapse eventKey="item-3" label="Item 3">
          <Menu.MenuItem eventKey="item-3-1">Item 3.1</Menu.MenuItem>
          <Menu.MenuItem eventKey="item-3-2">Item 3.2</Menu.MenuItem>
        </Menu.MenuCollapse>
        <Menu.MenuCollapse eventKey="item-4" label="Item 4">
          <Menu.MenuItem eventKey="item-4-1">Item 4.1</Menu.MenuItem>
          <Menu.MenuItem eventKey="item-4-2">Item 4.2</Menu.MenuItem>
        </Menu.MenuCollapse>
      </Menu>
    </div>
  ),
};
