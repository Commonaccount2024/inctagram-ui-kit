import type { Preview } from '@storybook/react'
import '../src/styles/index.scss'
import '@fontsource-variable/inter'
import '@fontsource/source-sans-pro'
import '@fontsource/roboto'
import '../src/styles/index.scss'

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: 'var(--Dark-700)',
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
