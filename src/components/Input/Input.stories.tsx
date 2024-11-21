import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./index";
import {
  Title,
  Description,
  Stories,
  Canvas,
  Controls,
} from "@storybook/blocks";
import {
  HiOutlineExclamationCircle,
  HiOutlineEye,
  HiOutlineEyeOff,
  HiOutlineUser,
} from "react-icons/hi";
import Tooltip from "../Tooltip";
import { useState } from "react";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The DropdownItem component is a single item within a dropdown menu, supporting various styles and states like active, disabled, divider, header, and custom.",
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
  argTypes: {
    placeholder: { control: "text" },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    disabled: { control: "boolean" },
    textArea: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Basic: Story = {
  parameters: {
    docs: {
      description: {
        story: "Default usage of Dropdown",
      },
    },
  },
  args: {
    placeholder: "Basic Usage",
  },
};

export const Sizes: Story = {
  parameters: {
    docs: {
      description: {
        story: "There's three sizes of option for Input field.",
      },
    },
  },
  render: () => (
    <div>
      <div className="mb-4">
        <Input size="sm" placeholder="Input sm" />
      </div>
      <div className="mb-4">
        <Input placeholder="Input md" />
      </div>
      <div className="mb-4">
        <Input size="lg" placeholder="Input lg" />
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  parameters: {
    docs: {
      description: {
        story: "Disabled Input.",
      },
    },
  },
  args: {
    placeholder: "Disabled Input",
    disabled: true,
  },
};

export const Affix: Story = {
  parameters: {
    docs: {
      description: {
        story: "Input can have suffix or prefix content inside.",
      },
    },
  },
  render: () => (
    <div>
      <div className="mb-4">
        <Input
          placeholder="Enter your name"
          prefix={<HiOutlineUser className="text-lg" />}
        />
      </div>
      <div className="mb-4">
        <Input
          placeholder="Enter your rate"
          suffix={
            <Tooltip title="Field info">
              <HiOutlineExclamationCircle className="text-lg cursor-pointer ml-1" />
            </Tooltip>
          }
        />
      </div>
      <div className="mb-4">
        <Input prefix="$" suffix=".00" />
      </div>
    </div>
  ),
};

const PasswordVisibleComponent = () => {
  const [pwInputType, setPwInputType] = useState("password");

  const onPasswordVisibleClick = () => {
    // e.preventDefault();
    setPwInputType(pwInputType === "password" ? "text" : "password");
  };

  const inputIcon = (
    <span className="cursor-pointer" onClick={() => onPasswordVisibleClick()}>
      {pwInputType === "password" ? <HiOutlineEyeOff /> : <HiOutlineEye />}
    </span>
  );

  return (
    <div>
      <Input type={pwInputType} suffix={inputIcon} placeholder="Password" />
    </div>
  );
};

export const PasswordVisible: Story = {
  parameters: {
    docs: {
      description: {
        story: "Example of controlling the Input type via prefix icon.",
      },
    },
  },
  render: () => (
    <>
      <PasswordVisibleComponent />
    </>
  ),
};

export const TextArea: Story = {
  parameters: {
    docs: {
      description: {
        story: "Turn Input field to textarea by setting textarea prop to true.",
      },
    },
  },
  args: {
    placeholder: "Basic Usage",
    textArea: true,
  },
};
