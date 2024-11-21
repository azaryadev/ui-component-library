import type { Meta, StoryObj } from "@storybook/react";
import Switcher from "./index";
import {
  Title,
  Description,
  Stories,
  Canvas,
  Controls,
} from "@storybook/blocks";
import React, { ChangeEvent, ReactNode } from "react";
import { RiMoonClearLine, RiSunLine } from "react-icons/ri";
// import React from "react";

// Define metadata for the component
const meta: Meta<typeof Switcher> = {
  title: "Components/Switcher",
  component: Switcher,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Switcher component used as an alternative of the single Checkbox, it can be switch between enabled or disabled.",
      },
      page: () => (
        <>
          <Title />
          <Description />
          <Canvas withToolbar />
          <Controls />
          {/* <ArgTypes />
          <ArgsTable /> */}
          <Stories />
        </>
      ),
    },
  },

  argTypes: {},
};
export default meta;

// Define Story objects for each variant of the component
type Story = StoryObj<typeof Switcher>;

export const Basic: Story = {
  render: () => {
    const onSwitcherToggle = (val: boolean, e: ChangeEvent) => {
      console.log(val, e);
    };

    return (
      <div>
        <Switcher defaultChecked onChange={onSwitcherToggle} />
      </div>
    );
  },
};

export const Content: Story = {
  render: () => {
    const withIcon = (component: ReactNode) => {
      return <div className="text-lg">{component}</div>;
    };

    return (
      <div>
        <div className="mb-4">
          <Switcher checkedContent="a" unCheckedContent="b" />
        </div>
        <div className="mb-4">
          <Switcher
            unCheckedContent={withIcon(<RiMoonClearLine />)}
            checkedContent={withIcon(<RiSunLine />)}
          />
        </div>
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    return (
      <div>
        <div className="mb-4">
          <Switcher disabled />
        </div>
        <div className="mb-4">
          <Switcher disabled defaultChecked />
        </div>
      </div>
    );
  },
};

export const Loading: Story = {
  render: () => {
    const [checked, setChecked] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);

    const onSwitcherToggle = () => {
      setIsLoading(true);
      setTimeout(() => {
        setChecked((checked) => !checked);
        setIsLoading(false);
      }, 1000);
    };

    return (
      <div>
        <Switcher
          checked={checked}
          isLoading={isLoading}
          onChange={onSwitcherToggle}
        />
      </div>
    );
  },
};

export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = React.useState(false);

    const onSwitcherToggle = (val: boolean) => {
      console.log("value", val);
      setChecked(!val);
    };

    return (
      <div>
        <Switcher checked={checked} onChange={onSwitcherToggle} />
      </div>
    );
  },
};
