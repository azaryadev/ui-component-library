// Checkbox.stories.tsx

import { Meta, StoryObj } from "@storybook/react";
import Checkbox from "./index";

import {
  Title,
  Description,
  Stories,
  Canvas,
  Controls,
} from "@storybook/blocks";

// Metadata for the Checkbox stories
const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The Checkbox component provides a flexible, accessible checkbox element with support for custom classes, controlled/uncontrolled states, and optional labels. Use Checkbox.Group to manage multiple checkboxes as a group with shared styling, values, and selection logic.",
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
  args: {
    children: "Checkbox Label",
  },
  argTypes: {
    onChange: { action: "changed" },
  },
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

// Basic Checkbox story
export const Basic: Story = {
  args: {},
};

// Checkbox with defaultChecked prop
export const DefaultChecked: Story = {
  args: {
    defaultChecked: true,
  },
};

// Disabled Checkbox story
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

// Checkbox in a controlled state
export const Controlled: Story = {
  args: {
    // checked: false,
    onChange: (checked) => console.log("Checkbox state:", checked),
  },
};

// Checkbox Group Story
export const Group: Story = {
  render: () => (
    <Checkbox.Group name="example-group">
      <Checkbox value="option1">Option 1</Checkbox>
      <Checkbox value="option2">Option 2</Checkbox>
      <Checkbox value="option3" disabled>
        Option 3 (disabled)
      </Checkbox>
    </Checkbox.Group>
  ),
};
