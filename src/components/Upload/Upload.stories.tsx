import type { Meta, StoryObj } from "@storybook/react";
import Upload from "./index";

import {
  Title,
  Description,
  Stories,
  Canvas,
  Controls,
} from "@storybook/blocks";
import Button from "../Button";
import { HiOutlineCloudUpload, HiOutlinePlus } from "react-icons/hi";
import { FcImageFile } from "react-icons/fc";
import React from "react";
// import React from "react";
import Avatar from "../Avatar";

// Define metadata for the component
const meta: Meta<typeof Upload> = {
  title: "Components/Upload",
  component: Upload,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Upload is a component that allow user to attach files & images, it can be used with form and upload the data to some where else.",
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
type Story = StoryObj<typeof Upload>;

export const Basic: Story = {
  args: {},
};

export const DragAndDrop: Story = {
  args: {
    draggable: true,
  },
};

export const Disabled: Story = {
  render: () => (
    <div>
      <div className="mb-6">
        <Upload disabled />
      </div>
      <div>
        <Upload draggable disabled />
      </div>
    </div>
  ),
};

export const Customize: Story = {
  render: () => (
    <div>
      <div className="mb-4">
        <Upload>
          <Button variant="solid" icon={<HiOutlineCloudUpload />}>
            Upload your file
          </Button>
        </Upload>
      </div>
      <div>
        <Upload draggable>
          <div className="my-16 text-center">
            <div className="text-6xl mb-4 flex justify-center">
              <FcImageFile />
            </div>
            <p className="font-semibold">
              <span className="text-gray-800 dark:text-white">
                Drop your image here, or{" "}
              </span>
              <span className="text-blue-500">browse</span>
            </p>
            <p className="mt-1 opacity-60 dark:text-white">
              Support: jpeg, png, gif
            </p>
          </div>
        </Upload>
      </div>
    </div>
  ),
};

export const UploadControl: Story = {
  render: () => {
    const maxUpload = 2;

    const beforeUpload = (files: FileList | null, fileList: File[]) => {
      let valid: string | boolean = true;

      const allowedFileType = ["image/jpeg", "image/png"];
      const maxFileSize = 500000;

      if (fileList.length >= maxUpload) {
        return `You can only upload ${maxUpload} file(s)`;
      }

      if (files) {
        for (const f of files) {
          if (!allowedFileType.includes(f.type)) {
            valid = "Please upload a .jpeg or .png file!";
          }

          if (f.size >= maxFileSize) {
            valid = "Upload image cannot more then 500kb!";
          }
        }
      }

      return valid;
    };

    const tip = <p className="mt-2">jpeg or png only (max 500kb)</p>;

    return (
      <div>
        <Upload beforeUpload={beforeUpload} uploadLimit={maxUpload} tip={tip} />
      </div>
    );
  },
};

export const AvatarUpload: Story = {
  render: () => {
    const [avatarImg, setAvatarImg] = React.useState<string | null>(null);

    const onFileUpload = (files: (File | undefined)[]) => {
      const file = files[0]; // Extract the first file
      if (file) {
        setAvatarImg(URL.createObjectURL(file)); // Safe to use because we ensured `file` exists
      }
    };
    const beforeUpload = (files: FileList | null) => {
      let valid: string | boolean = true;

      const allowedFileType = ["image/jpeg", "image/png"];
      if (files) {
        for (const file of files) {
          if (!allowedFileType.includes(file.type)) {
            valid = "Please upload a .jpeg or .png file!";
          }
        }
      }

      return valid;
    };

    return (
      <div>
        <Upload
          className="cursor-pointer"
          showList={false}
          uploadLimit={1}
          beforeUpload={beforeUpload}
          onChange={onFileUpload}
        >
          <Avatar
            size={80}
            src={avatarImg as string}
            icon={<HiOutlinePlus />}
          />
        </Upload>
      </div>
    );
  },
};
