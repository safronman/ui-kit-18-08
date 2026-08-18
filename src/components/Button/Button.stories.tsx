import preview from '#.storybook/preview'
import { expect } from 'storybook/test'
import { Button, type ButtonProps } from './Button'

const meta = preview.type<{ args: ButtonProps }>().meta({
  component: Button,
  tags: ['autodocs'],
})

export const Primary = meta.story({
  args: {
    children: 'Continue',
  },
})

export const Secondary = meta.story({
  args: {
    children: 'Continue',
    variant: 'secondary',
  },
})

export const Outline = meta.story({
  args: {
    children: 'Continue',
    variant: 'outline',
  },
})

export const Text = meta.story({
  args: {
    children: 'Continue',
    variant: 'text',
  },
})

export const Disabled = meta.story({
  args: {
    children: 'Continue',
    disabled: true,
  },
})

export const FullWidth = meta.story({
  args: {
    children: 'Continue',
    fullWidth: true,
  },
})

export const CssCheck = meta.story({
  args: {
    children: 'Styled button',
  },
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: 'Styled button' })
    await expect(getComputedStyle(button).backgroundColor).toBe('rgb(57, 125, 246)')
  },
})
