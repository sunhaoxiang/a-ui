import { Meta, StoryObj } from '@storybook/react'
import Button from './button.tsx'

const buttonMeta: Meta<typeof Button> = {
  title: 'Button1',
  component: Button,
  tags: ['autodocs']
}

export default buttonMeta

type Story = StoryObj<typeof buttonMeta>

export const DefaultButton: Story = () => <Button>Default</Button>

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
