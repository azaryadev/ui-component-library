import type { Meta, StoryObj } from "@storybook/react";
import Timeline from "./index";

import {
  Title,
  Description,
  Stories,
  Canvas,
  Controls,
} from "@storybook/blocks";
import Avatar, { AvatarProps } from "../Avatar";
import Badge from "../Badge";
import Card from "../Card";
import { HiTag } from "react-icons/hi";
import Tag from "../Tag";
// import React from "react";

// Define metadata for the component
const meta: Meta<typeof Timeline> = {
  title: "Components/Timeline",
  component: Timeline,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Timeline displays a list of events in chronological order.",
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
type Story = StoryObj<typeof Timeline>;

export const Basic: Story = {
  render: () => {
    return (
      <Timeline>
        <Timeline.Item>Breakfast - 09:00</Timeline.Item>
        <Timeline.Item>Lunch - 12:30</Timeline.Item>
        <Timeline.Item>Dinner - 7:00</Timeline.Item>
      </Timeline>
    );
  },
};

export const Advance: Story = {
  render: () => {
    type TimelineAvatarProps = AvatarProps;

    const TimelineAvatar = ({ children, ...rest }: TimelineAvatarProps) => {
      return (
        <Avatar {...rest} size={25} shape="circle">
          {children}
        </Avatar>
      );
    };

    return (
      <div className="max-w-[700px]">
        <Timeline>
          <Timeline.Item
            media={<TimelineAvatar className="!bg-amber-500">C</TimelineAvatar>}
          >
            <p className="my-1 flex items-center">
              <span className="font-semibold text-gray-900 dark:text-gray-100">
                Angelina Gotelli{" "}
              </span>
              <span className="mx-2">has change the status to </span>
              <Badge className="!bg-emerald-500" />
              <span className="ml-1 rtl:mr-1 font-semibold text-gray-900 dark:text-gray-100">
                Completed
              </span>
              <span className="ml-3 rtl:mr-3">6h ago</span>
            </p>
          </Timeline.Item>
          <Timeline.Item
            media={
              <TimelineAvatar
                src="/img/avatars/thumb-1.jpg"
                className="!bg-amber-500"
              />
            }
          >
            <p className="my-1 flex items-center">
              <span className="font-semibold text-gray-900 dark:text-gray-100">
                Max Alexander
              </span>
              <span className="mx-2">comment on your </span>
              <span className="font-semibold text-gray-900 dark:text-gray-100">
                Post
              </span>
              <span className="ml-3 rtl:mr-3">2d ago</span>
            </p>
            <Card className="mt-4">
              <p>
                Fine, Java MIGHT be a good example of what a programming
                language should be like. But Java applications are good examples
                of what applications SHOULDN&apos;T be like.
              </p>
            </Card>
          </Timeline.Item>
          <Timeline.Item
            media={
              <TimelineAvatar className="text-gray-700 bg-gray-200 dark:text-gray-100">
                <HiTag />
              </TimelineAvatar>
            }
          >
            <p className="flex items-center">
              <span className="font-semibold text-gray-900 dark:text-gray-100">
                Eugene Stewart{" "}
              </span>
              <span className="mx-2">added tags </span>
              <Tag
                prefix
                className="mr-2 rtl:ml-2 cursor-pointer"
                prefixClass="!bg-rose-500"
              >
                Live Issue
              </Tag>
              <Tag
                prefix
                className="mr-2 rtl:ml-2 cursor-pointer"
                prefixClass=" !bg-blue-500"
              >
                Backend
              </Tag>
              <span className="ml-3 rtl:mr-3">2d ago</span>
            </p>
          </Timeline.Item>
        </Timeline>
      </div>
    );
  },
};
