import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { Button } from './Button'

const meta = {
  component: Button,
  tags: ['ai-generated'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Continue',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Continue',
    variant: 'secondary',
  },
}

export const Outline: Story = {
  args: {
    children: 'Continue',
    variant: 'outline',
  },
}

export const Text: Story = {
  args: {
    children: 'Continue',
    variant: 'text',
  },
}

export const Disabled: Story = {
  args: {
    children: 'Continue',
    disabled: true,
  },
}

export const FullWidth: Story = {
  args: {
    children: 'Continue',
    fullWidth: true,
  },
}

export const CssCheck: Story = {
  args: {
    children: 'Styled button',
  },
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: 'Styled button' })
    await expect(getComputedStyle(button).backgroundColor).toBe('rgb(57, 125, 246)')
  },
}
