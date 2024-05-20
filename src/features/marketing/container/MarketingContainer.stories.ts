import type {Meta, StoryObj} from '@storybook/react';
import {within, userEvent, expect} from '@storybook/test';

import {MarketingContainer as component} from './MarketingContainer';

const meta = {
  title: 'Features/Marketing/Container',
  component: component
} satisfies Meta<typeof component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MarketingContainer: Story = {};
