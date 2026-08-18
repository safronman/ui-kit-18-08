import { Button as BaseButton } from '@base-ui/react/button'
import type { ComponentPropsWithoutRef } from 'react'
import s from './Button.module.css'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text'

export interface ButtonProps
  extends Omit<ComponentPropsWithoutRef<typeof BaseButton>, 'className'> {
  variant?: ButtonVariant
  className?: string
  fullWidth?: boolean
}

export function Button({
  variant = 'primary',
  className,
  fullWidth = false,
  type = 'button',
  ...props
}: ButtonProps) {
  const buttonClassName = [
    s.button,
    s[variant],
    fullWidth ? s.fullWidth : undefined,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return <BaseButton type={type} className={buttonClassName} {...props} />
}
