import type {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';
import {Footer as FooterComponent} from './Footer';

const meta = {
  title: 'Features/Marketing/Components',
  component: FooterComponent,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen'
  },
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn()
  }
} satisfies Meta<typeof FooterComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Footer: Story = {};
