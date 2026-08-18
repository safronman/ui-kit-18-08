import preview from '#.storybook/preview'
import { expect } from 'storybook/test'
import { Button, type ButtonProps } from './Button'

const meta = preview.type<{ args: ButtonProps }>().meta({
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Универсальная кнопка для запуска действий пользователя. Выберите вариант, соответствующий важности действия, и используйте недоступное состояние только когда действие временно нельзя выполнить.',
      },
    },
  },
  argTypes: {
    children: {
      description: 'Текст или другое содержимое, объясняющее действие кнопки.',
    },
    variant: {
      description:
        'Визуальный вариант: primary — главное действие, secondary — дополнительное, outline — альтернативное, text — ненавязчивое.',
    },
    disabled: {
      description: 'Делает кнопку недоступной: пользователь не может запустить действие.',
    },
    fullWidth: {
      description: 'Растягивает кнопку на всю доступную ширину родительского контейнера.',
    },
  },
})

/** Основной вариант для наиболее важного действия на экране. */
export const Primary = meta.story({
  args: {
    children: 'Continue',
  },
})

/** Дополнительный вариант для действия с меньшим приоритетом. */
export const Secondary = meta.story({
  args: {
    children: 'Continue',
    variant: 'secondary',
  },
})

/** Альтернативный вариант с контуром, который не конкурирует с главным действием. */
export const Outline = meta.story({
  args: {
    children: 'Continue',
    variant: 'outline',
  },
})

/** Текстовый вариант для второстепенного, ненавязчивого действия. */
export const Text = meta.story({
  args: {
    children: 'Continue',
    variant: 'text',
  },
})

/** Недоступная кнопка: показывает действие, которое временно нельзя выполнить. */
export const Disabled = meta.story({
  args: {
    children: 'Continue',
    disabled: true,
  },
})

/** Вариант для форм и узких экранов, где кнопка должна занять всю ширину блока. */
export const FullWidth = meta.story({
  args: {
    children: 'Continue',
    fullWidth: true,
  },
})

/** Техническая проверка подключения глобальных CSS-стилей. */
export const CssCheck = meta.story({
  tags: ['!autodocs'],
  args: {
    children: 'Styled button',
  },
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: 'Styled button' })
    await expect(getComputedStyle(button).backgroundColor).toBe('rgb(57, 125, 246)')
  },
})
