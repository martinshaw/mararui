import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';

import App, { AppProps } from '../App';
import Pane, { PaneProps } from '../Pane';
import ProgressBar, { ProgressBarProps } from './ProgressBar';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof ProgressBar> = {
  title: 'Mararui/ProgressBar',
  component: ProgressBar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
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
        <Pane vertical="center" horizontal="center">
          <Story />
        </Pane>
      </App>
    }
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const ActiveVariant: Story = {
  args: {
    variant: 'active',
    text: 'Connecting to Server',
  },
};

export const DestructiveVariant: Story = {
  args: {
    variant: 'destructive',
    text: 'Disconnecting from Server',
  },
};

export const Ongoing: Story = {
  args: {
    text: 'More Options',
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    text: 'More...',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    text: 'Authenticate',
  },
};
