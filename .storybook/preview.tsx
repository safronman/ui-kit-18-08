import addonA11y from '@storybook/addon-a11y'
import addonDocs from '@storybook/addon-docs'
import { definePreview } from '@storybook/react-vite'
import addonMsw from 'msw-storybook-addon'
import '../src/index.css'
import { mswHandlers } from './msw-handlers'

const preview = definePreview({
  tags: ['ai-generated'],
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
  async beforeEach({ msw }) {
    msw.use(...mswHandlers)
  },
  addons: [addonA11y(), addonDocs(), addonMsw()],
})

export default preview
