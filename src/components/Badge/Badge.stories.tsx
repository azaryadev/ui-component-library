import Badge from "./Badge";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Title,
  Description,
  Stories,
  Canvas,
  Controls,
} from "@storybook/blocks";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    content: { control: "text" },
    maxCount: { control: "number", defaultValue: 99 },
    badgeStyle: { control: "object" },
    className: { control: "text" },
    innerClass: { control: "text" },
  },
  parameters: {
    docs: {
      description: {
        component:
          "The Badge component is a versatile indicator for displaying small notifications or counts on other UI elements, such as icons or avatars.",
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
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    content: "New",
  },
};

export const WithNumberContent: Story = {
  args: {
    content: 12,
    maxCount: 10,
  },
};

export const WithCustomStyles: Story = {
  args: {
    content: "99+",
    badgeStyle: {
      backgroundColor: "purple",
      color: "white",
      padding: "0.25rem 0.5rem",
    },
  },
};

export const DotBadge: Story = {
  args: {
    content: "", // Empty content to display as a dot
  },
};

export const WithChildren: Story = {
  args: {
    content: 5,
  },
  render: (args) => (
    <Badge {...args}>
      <button style={{ padding: "0.5rem 1rem", border: "1px solid gray" }}>
        Notifications
      </button>
    </Badge>
  ),
};
