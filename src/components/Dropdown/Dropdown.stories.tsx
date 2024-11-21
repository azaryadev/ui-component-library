import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "./index";
import {
  Title,
  Description,
  Stories,
  Canvas,
  Controls,
} from "@storybook/blocks";
import { SyntheticEvent } from "react";
import Button from "../Button";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
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
    title: { control: "text" },
  },
};

export default meta;

const dropdownItems = [
  { key: "a", name: "Item A" },
  { key: "b", name: "Item B" },
  { key: "c", name: "Item C" },
  { key: "d", name: "Item D" },
];

const DropdownItems = () => (
  <>
    <Dropdown.Item eventKey="a">Item A</Dropdown.Item>
    <Dropdown.Item eventKey="b">Item B</Dropdown.Item>
    <Dropdown.Item eventKey="c">Item C</Dropdown.Item>
    <Dropdown.Item eventKey="d">Item D</Dropdown.Item>
  </>
);

type Story = StoryObj<typeof Dropdown>;

const onDropdownItemClick = (eventKey: string, e: SyntheticEvent) => {
  console.log("Dropdown Item Clicked", eventKey, e);
};

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: "Default usage of Dropdown",
      },
    },
  },
  args: {
    title: "click me!",
    children: (
      <div>
        {dropdownItems.map((item) => (
          <Dropdown.Item
            className=" !text-black hover:!text-white"
            variant="default"
            key={item.key}
            eventKey={item.key}
            onSelect={onDropdownItemClick}
          >
            {item.name}
          </Dropdown.Item>
        ))}
      </div>
    ),
  },
};

const Toggle = <Button>Toggle as Button</Button>;

export const CustomToggle: Story = {
  parameters: {
    docs: {
      description: {
        story: "We can set custom toggler for Dropdown via renderTitle prop.",
      },
    },
  },
  args: {
    renderTitle: Toggle,
    children: (
      <div>
        {dropdownItems.map((item) => (
          <Dropdown.Item
            className=" !text-black hover:!text-white"
            variant="default"
            key={item.key}
            eventKey={item.key}
            onSelect={onDropdownItemClick}
          >
            {item.name}
          </Dropdown.Item>
        ))}
      </div>
    ),
  },
};

export const TriggerHover: Story = {
  parameters: {
    docs: {
      description: {
        story: "Dropdown allow us to settrigger mode to  hover",
      },
    },
  },
  args: {
    title: "Hover",
    trigger: "hover",
    children: (
      <div>
        {dropdownItems.map((item) => (
          <Dropdown.Item
            className=" !text-black hover:!text-white"
            variant="default"
            key={item.key}
            eventKey={item.key}
            onSelect={onDropdownItemClick}
          >
            {item.name}
          </Dropdown.Item>
        ))}
      </div>
    ),
  },
};

export const TriggerRightClick: Story = {
  parameters: {
    docs: {
      description: {
        story: "Dropdown allow us to settrigger mode to context.",
      },
    },
  },
  args: {
    title: "Right Click",
    trigger: "context",
    children: (
      <div>
        {dropdownItems.map((item) => (
          <Dropdown.Item
            className=" !text-black hover:!text-white"
            variant="default"
            key={item.key}
            eventKey={item.key}
            onSelect={onDropdownItemClick}
          >
            {item.name}
          </Dropdown.Item>
        ))}
      </div>
    ),
  },
};

export const SubMenu: Story = {
  parameters: {
    docs: {
      description: {
        story: "Dropdown can also have multiple levels.",
      },
    },
  },
  args: {
    title: "Click Me!",
    children: (
      <div>
        <Dropdown.Item className=" !text-black hover:!text-white">
          Item 1
        </Dropdown.Item>
        <Dropdown.Menu
          className=" !text-black hover:!text-white"
          title="Right Item 2"
        >
          <Dropdown.Menu title="Item 2-1">
            <Dropdown.Item active>Item 2-1-1</Dropdown.Item>
            <Dropdown.Item>Item 2-1-2</Dropdown.Item>
            <Dropdown.Item>Item 2-1-3</Dropdown.Item>
          </Dropdown.Menu>
          <Dropdown.Item>Item 2-2</Dropdown.Item>
          <Dropdown.Item>Item 2-3</Dropdown.Item>
        </Dropdown.Menu>
        <Dropdown.Menu title="Right Item 3">
          <Dropdown.Menu title="Item 3-1">
            <Dropdown.Item>Item 3-1-1</Dropdown.Item>
            <Dropdown.Item>Item 3-1-2</Dropdown.Item>
            <Dropdown.Item>Item 3-1-3</Dropdown.Item>
          </Dropdown.Menu>
          <Dropdown.Item>Item 3-2</Dropdown.Item>
          <Dropdown.Item>Item 3-3</Dropdown.Item>
        </Dropdown.Menu>
        <Dropdown.Item className=" !text-black hover:!text-white">
          Item 4
        </Dropdown.Item>
      </div>
    ),
  },
};

export const Placement: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Dropdown menu placement can be assign around the trigger element in different positions via placement prop.",
      },
    },
  },
  render: () => (
    <div className="grid grid-cols-3 gap-4 max-w-xl">
      <div>
        <Dropdown placement="top-start" title="Top start">
          <DropdownItems />
        </Dropdown>
      </div>
      <div>
        <Dropdown placement="top" title="Top center">
          <DropdownItems />
        </Dropdown>
      </div>
      <div>
        <Dropdown placement="top-end" title="Top end">
          <DropdownItems />
        </Dropdown>
      </div>
      <div>
        <Dropdown placement="bottom-start" title="Bottom start">
          <DropdownItems />
        </Dropdown>
      </div>
      <div>
        <Dropdown placement="bottom" title="Bottom center">
          <DropdownItems />
        </Dropdown>
      </div>
      <div>
        <Dropdown placement="bottom-end" title="Bottom end">
          <DropdownItems />
        </Dropdown>
      </div>
      <div>
        <Dropdown placement="right-start" title="Right start">
          <DropdownItems />
        </Dropdown>
      </div>
      <div>
        <Dropdown placement="right" title="Right center">
          <DropdownItems />
        </Dropdown>
      </div>
      <div>
        <Dropdown placement="right-end" title="Right end">
          <DropdownItems />
        </Dropdown>
      </div>
      <div>
        <Dropdown placement="left-start" title="Left start">
          <DropdownItems />
        </Dropdown>
      </div>
      <div>
        <Dropdown placement="left" title="Left center">
          <DropdownItems />
        </Dropdown>
      </div>
      <div>
        <Dropdown placement="left-end" title="Left end">
          <DropdownItems />
        </Dropdown>
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "disabled prop can be use in both Dropdown or Dropdown.Item to disable user action.",
      },
    },
  },
  args: {
    title: "Click Me!",
    disabled: true,
    children: (
      <div>
        {dropdownItems.map((item) => (
          <Dropdown.Item
            variant="default"
            key={item.key}
            eventKey={item.key}
            onSelect={onDropdownItemClick}
          >
            {item.name}
          </Dropdown.Item>
        ))}
      </div>
    ),
  },
};

export const DropdownItemType: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Dropdown.Item has several variant type can br apply, Pass the variant prop and use either 'default', 'header', 'divider', 'default'",
      },
    },
  },
  render: () => (
    <div>
      <Dropdown title="Click Me!">
        <Dropdown.Item variant="header">
          <div className="pt-3 pb-1 px-3">
            <span>Signed in as</span>
            <div className="font-semibold mt-1 text-gray-800 dark:text-white">
              alex_g@theme_nate.com
            </div>
          </div>
        </Dropdown.Item>
        <Dropdown.Item variant="divider" />
        <Dropdown.Item>Item A</Dropdown.Item>
        <Dropdown.Item>Item B</Dropdown.Item>
        <Dropdown.Item>Item C</Dropdown.Item>
        <Dropdown.Item>Item D</Dropdown.Item>
        <Dropdown.Item variant="custom">
          <div
            className="
							cursor-pointer 
							px-3 
							py-2 
							text-indigo-600 
							font-semibold 
							hover:bg-gray-100 
							dark:hover:bg-black 
							dark:hover:bg-opacity-20
						"
          >
            Custom Dropdown Item
          </div>
        </Dropdown.Item>
      </Dropdown>
    </div>
  ),
};
