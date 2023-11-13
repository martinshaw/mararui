import type { Meta, StoryObj } from "@storybook/react";

import React from "react";

import App, { AppProps } from "../App";
import Header, { HeaderProps } from "./Header";
import Pane from "../Pane/Pane";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Header> = {
  title: "Mararui/Header",
  component: Header,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    // layout: 'centered',
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => {
      return (
        <App>
          <Story />
        </App>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const TextOnly: Story = {
  args: {
    text: "Text Only",
  },
};

export const FittedIconButtons: Story = {
  args: {
    text: "Fitted Icon Buttons",
    children: (
      <>
        <button>Button 1</button>
        <button>Button 2</button>
      </>
    ),
  },
};

export const SmallSize: Story = {
  args: {
    text: "Small Size",
    size: "small",
  },
};

export const MediumSize: Story = {
  args: {
    text: "Medium Size",
    size: "medium",
  },
};

export const NoPadding: Story = {
  args: {
    text: "No Padding",
    padding: "none",
  },
};

export const SmallPadding: Story = {
  args: {
    text: "Small Padding",
    padding: "small",
  },
};



// export const CenteredText: Story = {
//   args: {
//     children: (
//       <Pane vertical="center" horizontal="center" fill>
//         Centered Text
//       </Pane>
//     )
//   },
// };