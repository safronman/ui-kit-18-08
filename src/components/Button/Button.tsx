import { Button as BaseButton } from '@base-ui/react/button'
import type { ComponentPropsWithoutRef } from 'react'
import styles from './Button.module.css'

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
    styles.button,
    styles[variant],
    fullWidth ? styles.fullWidth : undefined,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return <BaseButton type={type} className={buttonClassName} {...props} />
}
