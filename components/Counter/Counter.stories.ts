import type { Meta, StoryObj } from '@storybook/vue3'

import counter from './Counter.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

const meta = {
  title: 'Counter',
  component: counter,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],

} satisfies Meta<typeof counter>

export default meta
type Story = StoryObj<typeof meta>



export const counterPrimaryStory: Story = {
  args: {
    displayHint: 'primary'
  },
}

export const counterSecondaryStory: Story = {
  args: {
    displayHint: 'secondary'

  },
}

export const countertertiaryStory: Story = { 
  args: {
   displayHint: 'tertiary'
  },
}