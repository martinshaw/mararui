import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';

import App, { AppProps } from '../App';
import Pane, { PaneProps } from '../Pane';
import Button, { ButtonProps } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
  title: 'Mararui/Button',
  component: Button,
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
export const Active: Story = {
  args: {
    variant: 'active',
    text: 'Connect to Server',
  },
};

export const Text: Story = {
  args: {
    text: 'More Options',
  },
};

export const IconAndText: Story = {
  args: {
    text: 'Icon and Text',
    icon: '👍',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    text: 'Disconnect from Server',
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    text: 'More...',
  },
};

export const OutlineOnFocusAndActive: Story = {
  args: {
    outline: true,
    text: 'More Options',
  },
};


export const Disabled: Story = {
  args: {
    disabled: true,
    text: 'Authenticate',
  },
};
