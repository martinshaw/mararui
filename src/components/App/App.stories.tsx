import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';

import App, { AppProps } from './App';
import Header from '../Header';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof App> = {
  title: 'Mararui/App',
  component: App,
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
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const EmptyApp: Story = {
  args: {
    children: (
      null
    )
  },
};

export const WithHeader: Story = {
  args: {
    children: (
      <Header text="Header Text" size="large"/>
    )
  },
};

