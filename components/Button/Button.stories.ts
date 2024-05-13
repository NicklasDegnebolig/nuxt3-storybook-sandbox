import type { Meta, StoryObj } from '@storybook/vue3'

import button from './Button.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

const meta = {
  title: 'button',
  component: button,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],

} satisfies Meta<typeof button>

export default meta
type Story = StoryObj<typeof meta>

export const buttonPrimaryStory: Story = {
  args: {
    title: 'primary button',
    type: 'primary'

  },
}

export const buttonSecondaryStory: Story = {
  args: {
    title: 'secndary button',
    type: 'secondary'

  },
}

export const buttontertiaryStory: Story = {
  args: {
    title: 'tertiary button',
    type: 'tertiary'

  },
}
