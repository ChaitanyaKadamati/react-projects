import type {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';
import {Header as HeaderComponent} from './Header';

const meta = {
  title: 'Features/Marketing/Components',
  component: HeaderComponent,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen'
  },
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn()
  }
} satisfies Meta<typeof HeaderComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Header: Story = {};
