import type { Meta, StoryObj } from "@storybook/react";
import Alert from "./Alert";
import { HiCheckCircle } from "react-icons/hi";

import {
  Title,
  Description,
  Stories,
  Canvas,
  Controls,
} from "@storybook/blocks";

// Meta definition for the Alert component
const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["success", "info", "warning", "danger"],
    },
    closable: { control: "boolean" },
    showIcon: { control: "boolean" },
    triggerByToast: { control: "boolean" },
    duration: { control: "number" },
    onClose: { action: "closed" },
  },
  parameters: {
    docs: {
      description: {
        component:
          "The Alert component displays brief, important messages to users, with options for success, information, warning, or error styles.",
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
};
export default meta;

// Define Story objects for different variants of the Alert component
type Story = StoryObj<typeof Alert>;

export const SuccessAlert: Story = {
  args: {
    type: "success",
    title: "Success",
    children: "This is a success alert message.",
    showIcon: true,
    closable: true,
  },
  parameters: {
    docs: {
      source: {
        code: `<Alert type="success" title="Success" showIcon closable>This is a success alert message.</Alert>`,
      },
    },
  },
};

export const InfoAlert: Story = {
  args: {
    type: "info",
    title: "Information",
    children: "This is an informational alert message.",
    showIcon: true,
    closable: true,
  },
};

export const WarningAlert: Story = {
  args: {
    type: "warning",
    title: "Warning",
    children: "This is a warning alert message.",
    showIcon: true,
    closable: true,
  },
};

export const DangerAlert: Story = {
  args: {
    type: "danger",
    title: "Error",
    children: "This is a danger alert message.",
    showIcon: true,
    closable: true,
  },
};

export const CustomIconAlert: Story = {
  args: {
    type: "info",
    title: "Custom Icon Alert",
    children: "This alert uses a custom icon.",
    showIcon: true,
    closable: true,
    customIcon: <HiCheckCircle className="text-info" />,
  },
};

export const AutoCloseAlert: Story = {
  args: {
    type: "success",
    title: "Auto Close",
    children: "This alert will close automatically after 3 seconds.",
    duration: 3000,
    closable: true,
  },
};

export const NonClosableAlert: Story = {
  args: {
    type: "info",
    title: "Non-Closable Alert",
    children: "This alert does not have a close button.",
    closable: false,
  },
};
