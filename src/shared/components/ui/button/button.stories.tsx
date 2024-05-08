import type { Meta, StoryObj } from '@storybook/react'

import { FlagRussiaIcon } from '../../../../assets/icons/flag-russia'
import { Button } from './button'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
    },
  },
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    disabled: false,
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    disabled: false,
    variant: 'secondary',
  },
}

export const Outline: Story = {
  args: {
    children: 'Outline Button',
    disabled: false,
    variant: 'outline',
  },
}

export const TextButton: Story = {
  args: {
    children: 'Text Button',
    disabled: false,
    variant: 'text-button',
  },
}

export const FullWidth: Story = {
  args: {
    children: 'Full Width Button',
    disabled: false,
    fullWidth: true,
    variant: 'primary',
  },
}

export const AsLink: Story = {
  args: {
    as: 'a',
    children: 'Link that looks like a button',
    variant: 'primary',
  },
}

// secondary with icon
export const SecondaryWithIcon: Story = {
  args: {
    children: [<FlagRussiaIcon key={'secondary-logout-icon'} />, 'English'],
    disabled: false,
    variant: 'secondary-with-icon',
  },
}
