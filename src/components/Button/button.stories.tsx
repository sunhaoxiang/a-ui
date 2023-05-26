import { Meta, StoryObj } from '@storybook/react'
import Button from './button.tsx'

const buttonMeta: Meta<typeof Button> = {
  title: 'Button1',
  component: Button,
  argTypes: {
    btnType: {
      options: ['primary', 'default', 'danger', 'link'],
      control: {
        type: 'radio'
      }
    }
  },
  tags: ['autodocs']
}

export default buttonMeta

type Story = StoryObj<typeof Button>

export const DefaultButton: Story = {
  args: {
    children: 'Default'
  }
}

export const ButtonWithSize: Story = () => (
  <>
    <Button size="lg">Large Button</Button>
    <Button size="sm">Small Button</Button>
  </>
)

export const ButtonWithType: Story = () => (
  <>
    <Button btnType="primary">Primary Button</Button>
    <Button btnType="danger">Danger Button</Button>
    <Button btnType="link" href="https://google.com">
      Link Button
    </Button>
  </>
)
