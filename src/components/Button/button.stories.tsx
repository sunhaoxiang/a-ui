import { Meta, StoryObj } from '@storybook/react'
import Button from './button.tsx'
import Icon from '@/components/Icon/icon.tsx'

const buttonMeta: Meta<typeof Button> = {
  title: 'General/Button',
  component: Button,
  tags: ['autodocs']
}

export default buttonMeta

type Story = StoryObj<typeof Button>

const Template: Story = {
  render: args => <Button {...args} />
}

export const DefaultButton: Story = {
  ...Template,
  args: {
    children: 'Default Button'
  }
}

export const DisabledButton: Story = {
  ...Template,
  args: {
    disabled: true,
    children: 'Disabled Button'
  }
}

export const PrimaryButton: Story = {
  ...Template,
  args: {
    btnType: 'primary',
    children: 'Primary Button'
  }
}
export const DangerButton: Story = {
  ...Template,
  args: {
    btnType: 'danger',
    children: 'Danger Button'
  }
}
export const LinkButton: Story = {
  ...Template,
  args: {
    btnType: 'link',
    href: 'https://www.google.com',
    children: 'Link Button'
  }
}

export const LargeButton: Story = {
  ...Template,
  args: {
    size: 'lg',
    children: 'Large Button'
  }
}

export const SmallButton: Story = {
  ...Template,
  args: {
    size: 'sm',
    children: 'Small Button'
  }
}

export const IconButton: Story = {
  render: args => (
    <Button {...args} btnType="danger">
      <Icon icon="trash" />
    </Button>
  )
}
