import type { Meta, StoryObj } from "@storybook/react";
import Radio from "./index";
import {
  Title,
  Description,
  Stories,
  Canvas,
  Controls,
} from "@storybook/blocks";

const meta: Meta<typeof Radio> = {
  title: "Components/Radio",
  component: Radio,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          " Radios let users choose a single option in a series of options.",
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
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Radio>;

export const Simple: Story = {
  parameters: {
    docs: {
      description: {
        story: "Simple Radio example.",
      },
    },
  },
  render: () => (
    <div>
      <Radio className="mr-4" name="simpleRadioExample">
        Radio
      </Radio>
      <Radio defaultChecked name="simpleRadioExample">
        Checked Radio
      </Radio>
    </div>
  ),
};

export const Group: Story = {
  parameters: {
    docs: {
      description: {
        story: "Controlled radio group example",
      },
    },
  },
  render: () => (
    <div>
      <Radio.Group value={"Banana"} onChange={() => {}}>
        <Radio value={"Apple"}>Apple</Radio>
        <Radio value={"Banana"}>Banana</Radio>
        <Radio value={"Cherry"}>Cherry</Radio>
      </Radio.Group>
    </div>
  ),
};

export const Disabled: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Radio & Radio.Group allow to disabled to prevent user execute click event.",
      },
    },
  },
  render: () => (
    <div>
      <Radio disabled className="mr-4">
        Disabled Radio
      </Radio>
      <Radio disabled checked>
        Disabled Checked Radio
      </Radio>
      <div className="mt-4">
        <Radio.Group value={"Apple"} disabled>
          <Radio value={"Apple"}>Apple</Radio>
          <Radio value={"Banana"}>Banana</Radio>
          <Radio value={"Cherry"}>Cherry</Radio>
        </Radio.Group>
      </div>
    </div>
  ),
};

export const Vertical: Story = {
  parameters: {
    docs: {
      description: {
        story: "Radio list can display in vertical.",
      },
    },
  },
  render: () => (
    <div>
      <Radio.Group vertical value={"Banana"} onChange={() => {}}>
        <Radio value={"Apple"}>Apple</Radio>
        <Radio value={"Banana"}>Banana</Radio>
        <Radio value={"Cherry"}>Cherry</Radio>
      </Radio.Group>
    </div>
  ),
};

export const Color: Story = {
  parameters: {
    docs: {
      description: {
        story: "Radio & group able to apply custom css via radioClass prop.",
      },
    },
  },
  render: () => (
    <div>
      <Radio defaultChecked radioClass="text-green-500">
        Radio
      </Radio>
      <div className="mt-4">
        <Radio.Group
          radioClass="text-yellow-500"
          value={"Apple"}
          name="radioColorGroup"
        >
          <Radio radioClass="text-blue-600" value={"Apple"}>
            Apple
          </Radio>
          <Radio value={"Banana"}>Banana</Radio>
          <Radio value={"Cherry"}>Cherry</Radio>
        </Radio.Group>
      </div>
    </div>
  ),
};
