import type { Meta, StoryObj } from "@storybook/react";
import Tabs from "./index";

import {
  Title,
  Description,
  Stories,
  Canvas,
  Controls,
} from "@storybook/blocks";
import { HiOutlineHome, HiOutlinePhone, HiOutlineUser } from "react-icons/hi";
import React from "react";
// import React from "react";

// Define metadata for the component
const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Tabs help to organize related content in a single view which user make easy to explore and switch between different views.",
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
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => {
    const { TabNav, TabList, TabContent } = Tabs;

    return (
      <div>
        <Tabs defaultValue="tab1">
          <TabList>
            <TabNav value="tab1">Home</TabNav>
            <TabNav value="tab2">Profile</TabNav>
            <TabNav value="tab3">Contact</TabNav>
          </TabList>
          <div className="p-4">
            <TabContent value="tab1">
              <p>
                If builders built buildings the way programmers wrote programs,
                then the first woodpecker that came along would destroy
                civilization. (Gerald Weinberg)
              </p>
            </TabContent>
            <TabContent value="tab2">
              <p>
                A computer lets you make more mistakes faster than any invention
                in human history with the possible exceptions of handguns and
                tequila. (Mitch Radcliffe).
              </p>
            </TabContent>
            <TabContent value="tab3">
              <p>
                In C++ its harder to shoot yourself in the foot, but when you
                do, you blow off your whole leg. (Bjarne Stroustrup)
              </p>
            </TabContent>
          </div>
        </Tabs>
      </div>
    );
  },
};

export const Pill: Story = {
  render: () => {
    const { TabNav, TabList, TabContent } = Tabs;

    return (
      <div>
        <Tabs defaultValue="tab1" variant="pill">
          <TabList>
            <TabNav value="tab1">Home</TabNav>
            <TabNav value="tab2">Profile</TabNav>
            <TabNav value="tab3">Contact</TabNav>
          </TabList>
          <div className="p-4">
            <TabContent value="tab1">
              <p>
                If builders built buildings the way programmers wrote programs,
                then the first woodpecker that came along would destroy
                civilization. (Gerald Weinberg)
              </p>
            </TabContent>
            <TabContent value="tab2">
              <p>
                A computer lets you make more mistakes faster than any invention
                in human history with the possible exceptions of handguns and
                tequila. (Mitch Radcliffe).
              </p>
            </TabContent>
            <TabContent value="tab3">
              <p>
                In C++ its harder to shoot yourself in the foot, but when you
                do, you blow off your whole leg. (Bjarne Stroustrup)
              </p>
            </TabContent>
          </div>
        </Tabs>
      </div>
    );
  },
};

export const Icons: Story = {
  render: () => {
    const { TabNav, TabList, TabContent } = Tabs;

    return (
      <div>
        <Tabs defaultValue="tab1">
          <TabList>
            <TabNav value="tab1" icon={<HiOutlineHome />}>
              Home
            </TabNav>
            <TabNav value="tab2" icon={<HiOutlineUser />}>
              Profile
            </TabNav>
            <TabNav value="tab3" icon={<HiOutlinePhone />}>
              Contact
            </TabNav>
          </TabList>
          <div className="p-4">
            <TabContent value="tab1">
              <p>
                If builders built buildings the way programmers wrote programs,
                then the first woodpecker that came along would destroy
                civilization. (Gerald Weinberg)
              </p>
            </TabContent>
            <TabContent value="tab2">
              <p>
                A computer lets you make more mistakes faster than any invention
                in human historywith the possible exceptions of handguns and
                tequila. (Mitch Radcliffe).
              </p>
            </TabContent>
            <TabContent value="tab3">
              <p>
                In C++ its harder to shoot yourself in the foot, but when you
                do, you blow off your whole leg. (Bjarne Stroustrup)
              </p>
            </TabContent>
          </div>
        </Tabs>
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    const { TabNav, TabList } = Tabs;

    return (
      <div>
        <Tabs defaultValue="tab1" className="mb-4">
          <TabList>
            <TabNav value="tab1">Home</TabNav>
            <TabNav disabled value="tab2">
              Profile
            </TabNav>
            <TabNav value="tab3">Contact</TabNav>
          </TabList>
        </Tabs>
        <Tabs defaultValue="tab1" variant="pill">
          <TabList>
            <TabNav value="tab1">Home</TabNav>
            <TabNav disabled value="tab2">
              Profile
            </TabNav>
            <TabNav value="tab3">Contact</TabNav>
          </TabList>
        </Tabs>
      </div>
    );
  },
};

export const Controlled: Story = {
  render: () => {
    const { TabNav, TabList, TabContent } = Tabs;

    const [currentTab, setCurrentTab] = React.useState("tab1");

    return (
      <div>
        <Tabs value={currentTab} onChange={(val) => setCurrentTab(val)}>
          <TabList>
            <TabNav value="tab1">Home</TabNav>
            <TabNav value="tab2">Profile</TabNav>
            <TabNav value="tab3">Contact</TabNav>
          </TabList>
          <div className="p-4">
            <TabContent value="tab1">
              <p>
                If builders built buildings the way programmers wrote programs,
                then the first woodpecker that came along would destroy
                civilization. (Gerald Weinberg)
              </p>
            </TabContent>
            <TabContent value="tab2">
              <p>
                A computer lets you make more mistakes faster than any invention
                in human history with the possible exceptions of handguns and
                tequila. (Mitch Radcliffe).
              </p>
            </TabContent>
            <TabContent value="tab3">
              <p>
                In C++ its harder to shoot yourself in the foot, but when you
                do, you blow off your whole leg. (Bjarne Stroustrup)
              </p>
            </TabContent>
          </div>
        </Tabs>
      </div>
    );
  },
};
