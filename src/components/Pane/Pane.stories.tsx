import type { Meta, StoryObj } from "@storybook/react";

import React from "react";

import App, { AppProps } from "../App";
import Pane, { PaneProps } from "./Pane";
import Header, { HeaderProps } from "../Header";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Pane> = {
  title: "Mararui/Pane",
  component: Pane,
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
export const CenteredPane: Story = {
  args: {
    vertical: "center",
    horizontal: "center",
    children: <i>Centered Text</i>,
  },
};

export const RowPane: Story = {
  args: {
    direction: "row",
    children: (
      <>
        <Pane>
          <i>Row Text 1</i>
        </Pane>
        <Pane>
          <i>Row Text 2</i>
        </Pane>
        <Pane vertical="top" horizontal="left" padding="medium" fill>
          <b>Pane in a Pane</b>
        </Pane>
        <Pane>
          <i>Row Text 4</i>
        </Pane>
      </>
    ),
  },
};

export const ColumnPane: Story = {
  args: {
    direction: "column",
    children: (
      <>
        <Pane>
          <i>Column Text 1</i>
        </Pane>
        <Pane vertical="bottom" horizontal="right" padding="medium" fill>
          <b>Pane in a Pane</b>
        </Pane>
        <Pane>
          <i>Column Text 3</i>
        </Pane>
        <Pane>
          <i>Column Text 4</i>
        </Pane>
      </>
    ),
  },
};

export const PanesInPanesPane: Story = {
  args: {
    fill: true,
    direction: "column",
    children: (
      <>
        <Pane direction="row" fill>
          <Pane>
            <i>Row Text 1</i>
          </Pane>
          <Pane padding="small">
            <i>Row Text 2</i>
          </Pane>
          <Pane>
            <i>Row Text 2</i>
          </Pane>
          <Pane fill direction="column">
            <Header text="Pane Header" />
            <Pane fill>
              abc
            </Pane>
          </Pane>
        </Pane>
        <Pane direction="row" fill>
          <Pane>
            <i>Row Text 1</i>
          </Pane>
          <Pane>
            <i>Row Text 2</i>
          </Pane>
          <Pane vertical="top" horizontal="left" padding="medium" fill>
            <b>Pane in a Pane</b>
          </Pane>
          <Pane>
            <i>Row Text 4</i>
          </Pane>
        </Pane>
        <Pane direction="row">
          <Pane>
            <i>Row Text 1</i>
          </Pane>
          <Pane fill direction="column">
            <Header text="Pane Header" size="small" />
            <Pane fill>
              abc
            </Pane>
          </Pane>
          <Pane>
            <i>Row Text 2</i>
          </Pane>
          <Pane>
            <i>Row Text 4</i>
          </Pane>
        </Pane>
      </>
    ),
  },
};

export const SmallPaddingPane: Story = {
  args: {
    vertical: "top",
    horizontal: "left",
    padding: "small",
    children: <i>Small Padding</i>,
  },
};

export const MediumPaddingPane: Story = {
  args: {
    vertical: "top",
    horizontal: "left",
    padding: "medium",
    children: <i>Medium Padding</i>,
  },
};

export const LargePaddingPane: Story = {
  args: {
    vertical: "top",
    horizontal: "left",
    padding: "large",
    children: <i>Large Padding</i>,
  },
};

export const ExtraLargePaddingPane: Story = {
  args: {
    vertical: "top",
    horizontal: "left",
    padding: "extralarge",
    children: <i>Extra Large Padding</i>,
  },
};
