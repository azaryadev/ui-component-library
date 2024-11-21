import type { Meta, StoryObj } from "@storybook/react";
import { InputGroup } from "./index";
import {
  Title,
  Description,
  Stories,
  Canvas,
  Controls,
} from "@storybook/blocks";
import Input from "../Input/index";

const { Addon } = InputGroup;

const meta: Meta<typeof InputGroup> = {
  title: "Components/InputGroup",
  component: InputGroup,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Input groups allowed us to chain serveral input related components into a single row.",
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
};

export default meta;

type Story = StoryObj<typeof InputGroup>;

export const Addons: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Addon can be placed on either side of an input. It also can place in between of both Input.",
      },
    },
  },
  render: () => (
    <div>
      <InputGroup className="mb-4">
        <Addon>@</Addon>
        <Input />
      </InputGroup>
      <InputGroup className="mb-4">
        <Input />
        <Addon>.exmaple.com</Addon>
      </InputGroup>
      <InputGroup className="mb-4">
        <Addon>http://</Addon>
        <Input />
        <Addon>.com</Addon>
      </InputGroup>
      <InputGroup className="mb-4">
        <Input />
        <Addon>to</Addon>
        <Input />
      </InputGroup>
    </div>
  ),
};
