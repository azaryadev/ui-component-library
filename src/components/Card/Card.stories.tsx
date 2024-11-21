import { Meta, StoryFn } from "@storybook/react";
import Card, { CardProps } from "./index";
import {
  Title,
  Description,
  Stories,
  Canvas,
  Controls,
} from "@storybook/blocks";

import Button from "../Button";
import CloseButton from "../CloseButton/index";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    clickable: { control: "boolean" },
    bordered: { control: "boolean" },
    onClick: { action: "clicked" },
    header: {
      control: "object",
      description: "Defines header content, class, and bordered option.",
    },
    footer: {
      control: "object",
      description: "Defines footer content, class, and bordered option.",
    },
  },
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          " The Card component provides a flexible, customizable container for displaying grouped content with optional header and footer sections. It can include borders, be clickable, and supports additional content in the header.",
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
} as Meta<typeof Card>;

const Template: StoryFn<CardProps> = (args) => (
  <Card {...args}>
    <p>
      Some quick example text to build on the card title and make up the bulk of
      the card&apos;s content.
    </p>
  </Card>
);

export const Default = Template.bind({});
Default.args = {
  bordered: true,
};

export const ClickableCard = Template.bind({});
ClickableCard.args = {
  clickable: true,
  bordered: true,
};

export const WithHeader = Template.bind({});
WithHeader.args = {
  bordered: true,
  header: {
    content: "Card Header",
    extra: <CloseButton />,
    bordered: true,
  },
};

export const WithFooter = Template.bind({});
WithFooter.args = {
  bordered: true,
  footer: {
    content: (
      <>
        <div className="flex gap-4">
          <Button size="sm" className="ltr:mr-2 rtl:ml-2">
            Save
          </Button>
          <Button size="sm" variant="solid">
            New Post
          </Button>
        </div>
      </>
    ),
    bordered: true,
  },
};

export const WithHeaderAndFooter = Template.bind({});
WithHeaderAndFooter.args = {
  bordered: true,
  header: {
    content: "Card Header",
    extra: <CloseButton />,
    bordered: false,
  },
  footer: {
    content: (
      <>
        <div className="flex justify-end gap-4">
          <Button size="sm" className="ltr:mr-2 rtl:ml-2">
            Save
          </Button>
          <Button size="sm" variant="solid">
            New Post
          </Button>
        </div>
      </>
    ),
    bordered: false,
  },
};
