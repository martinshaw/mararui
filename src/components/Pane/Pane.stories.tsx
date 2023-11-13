import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';

import App, { AppProps } from '../App';
import Pane, { PaneProps } from './Pane';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Pane> = {
  title: 'Mararui/Pane',
  component: Pane,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    // layout: 'centered',
    layout: 'fullscreen',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => {  
      return <App>
        <Story />
      </App>
    }
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const CenteredPane: Story = {
  args: {
    vertical: 'center',
    horizontal: 'center',
    children: (
      <i>Centered Text</i>
    )
  },
};

export const RowPane: Story = {
  args: {
    direction: 'row',
    children: (
      <>
        <i>Row Text 1</i>
        <i>Row Text 2</i>
        <i>Row Text 3</i>
        <i>Row Text 4</i>
      </>
    )
  },
};


export const ColumnPane: Story = {
  args: {
    direction: 'column',
    children: (
      <>
        <i>Column Text 1</i>
        <i>Column Text 2</i>
        <i>Column Text 3</i>
        <i>Column Text 4</i>
      </>
    )
  },
};