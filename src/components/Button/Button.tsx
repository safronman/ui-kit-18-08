import { Button as BaseButton } from '@base-ui/react/button'
import type { ComponentPropsWithoutRef } from 'react'
import s from './Button.module.css'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text'

export interface ButtonProps
  extends Omit<ComponentPropsWithoutRef<typeof BaseButton>, 'className'> {
  /** Визуальный вариант кнопки для основного, дополнительного или ненавязчивого действия. */
  variant?: ButtonVariant
  /** Дополнительный CSS-класс для частного случая использования. */
  className?: string
  /** Растягивает кнопку на всю ширину родительского контейнера. */
  fullWidth?: boolean
}

/**
 * Универсальная кнопка для запуска пользовательских действий в интерфейсе.
 *
 * Поддерживает четыре визуальных варианта, состояние недоступности и растяжение
 * на всю ширину контейнера.
 */
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
