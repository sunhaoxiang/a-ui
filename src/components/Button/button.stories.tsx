import { Meta, StoryObj } from '@storybook/react'
import Button from './button.tsx'

const buttonMeta: Meta<typeof Button> = {
  title: 'Button1',
  component: Button,
  // argTypes: {
  //   btnType: {
  //     options: ['primary', 'default', 'danger', 'link'],
  //     control: {
  //       type: 'radio'
  //     }
  //   }
  // },
  tags: ['autodocs']
}

export default buttonMeta

type Story = StoryObj<typeof Button>

export const DefaultButton: Story = {
  render: args => <Button {...args}>Default Button</Button>
}

export const ButtonWithSize: Story = {
  render: args => (
    <>
      <Button {...args} size="lg">
        Large Button
      </Button>
      <Button size="sm">Small Button</Button>
    </>
  )
}

export const ButtonWithType: Story = {
  render: args => (
    <>
      <Button {...args} btnType="primary">
        Primary Button
      </Button>
      <Button {...args} btnType="danger">
        Danger Button
      </Button>
      <Button {...args} btnType="link" href="https://google.com">
        Link Button
      </Button>
    </>
  )
}
