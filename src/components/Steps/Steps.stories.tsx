/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from "@storybook/react";
import Steps from "./index";

import {
  Title,
  Description,
  Stories,
  Canvas,
  Controls,
} from "@storybook/blocks";
import {
  HiOutlineClipboardCheck,
  HiOutlineDocumentSearch,
  HiOutlineLogin,
} from "react-icons/hi";
import Spinner from "../Spinner";
import React from "react";
import Button from "../Button";
// import React from "react";

// Define metadata for the component
const meta: Meta<typeof Steps> = {
  title: "Components/Steps",
  component: Steps,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Steps component display progress & tasks through a sequence order.",
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

  argTypes: {},
};
export default meta;

// Define Story objects for each variant of the component
type Story = StoryObj<typeof Steps>;

export const Basic: Story = {
  render: () => (
    <Steps current={1}>
      <Steps.Item />
      <Steps.Item />
      <Steps.Item />
      <Steps.Item />
    </Steps>
  ),
};

export const WithTitle: Story = {
  render: () => (
    <div>
      <Steps current={1}>
        <Steps.Item title="Login" />
        <Steps.Item title="Order Placed" />
        <Steps.Item title="In Review" />
        <Steps.Item title="Approved" />
      </Steps>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div>
      <Steps vertical current={1}>
        <Steps.Item title="Login" />
        <Steps.Item title="Order Placed" />
        <Steps.Item title="In Review" />
        <Steps.Item title="Approved" />
      </Steps>
    </div>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <div className="mb-6">
      <Steps vertical current={2}>
        <Steps.Item title="Login" description="Login to your account" />
        <Steps.Item title="Place Order" description="Start placing an order" />
        <Steps.Item title="In Review" description="We will review the order" />
        <Steps.Item title="Approved" description="Order approved" />
      </Steps>
    </div>
  ),
};

export const CustomIcon: Story = {
  render: () => (
    <div>
      <Steps current={1}>
        <Steps.Item title="Login" customIcon={<HiOutlineLogin />} />
        <Steps.Item title="Order Placed" customIcon={<Spinner />} />
        <Steps.Item
          title="In Review"
          customIcon={<HiOutlineDocumentSearch />}
        />
        <Steps.Item title="Approved" customIcon={<HiOutlineClipboardCheck />} />
      </Steps>
    </div>
  ),
};

export const Error: Story = {
  render: () => (
    <div>
      <Steps current={1} status="error">
        <Steps.Item title="Login" />
        <Steps.Item title="Order Placed" />
        <Steps.Item title="In Review" />
        <Steps.Item title="Approved" />
      </Steps>
    </div>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [step, setStep] = React.useState(0);

    const onChange = (nextStep: number) => {
      if (nextStep < 0) {
        setStep(0);
      } else if (nextStep > 3) {
        setStep(3);
      } else {
        setStep(nextStep);
      }
    };

    const onNext = () => onChange(step + 1);

    const onPrevious = () => onChange(step - 1);

    return (
      <div>
        <Steps current={step}>
          <Steps.Item title="Login" />
          <Steps.Item title="Order Placed" />
          <Steps.Item title="In Review" />
          <Steps.Item title="Approved" />
        </Steps>
        <div className="mt-6 h-40 bg-gray-50 dark:bg-gray-700 rounded flex items-center justify-center">
          <h6>Step {`${step + 1}`} content</h6>
        </div>
        <div className="mt-4 text-right">
          <Button className="mx-2" disabled={step === 0} onClick={onPrevious}>
            Previous
          </Button>
          <Button disabled={step === 3} variant="solid" onClick={onNext}>
            {step === 3 ? "Completed" : "Next"}
          </Button>
        </div>
      </div>
    );
  },
};

export const Clickable: Story = {
  render: () => {
    const [step, setStep] = React.useState(1);

    const onStepChange = (index: number) => {
      setStep(index);
    };

    return (
      <div>
        <Steps current={step} onChange={(index) => onStepChange(index)}>
          <Steps.Item title="Login" />
          <Steps.Item title="Order Placed" />
          <Steps.Item title="In Review" />
          <Steps.Item title="Approved" />
        </Steps>
      </div>
    );
  },
};
