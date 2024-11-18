import { HiUser } from "react-icons/hi";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Title,
  Description,
  Stories,
  Canvas,
  Controls,
} from "@storybook/blocks";
import Avatar from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["lg", "md", "sm", 40, 60],
    },
    shape: {
      control: { type: "select" },
      options: ["circle", "square"],
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "The Avatar component displays user images, initials, or icons in various shapes and sizes, with optional styling and customization.",
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
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    src: "/img/avatars/thumb-1.jpg",
    alt: "User Avatar",
    size: "md",
  },
};

export const WithIcon: Story = {
  args: {
    icon: <HiUser />,
    size: "lg",
    shape: "square",
  },
};

export const CustomSize: Story = {
  args: {
    src: "/img/avatars/thumb-1.jpg",
    size: 80,
  },
};

export const WithChildren: Story = {
  args: {
    children: "JD",
    size: "md",
    shape: "circle",
  },
};
