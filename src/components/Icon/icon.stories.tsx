import { Meta, StoryObj } from '@storybook/react'
import Icon from './icon'

const iconMeta: Meta<typeof Icon> = {
  title: 'General/Icon',
  component: Icon,
  tags: ['autodocs']
}

export default iconMeta

type Story = StoryObj<typeof Icon>

const Template: Story = {
  render: args => <Icon {...args} />
}

export const DefaultIcon: Story = {
  ...Template,
  args: {
    icon: 'check',
    size: '3x'
  }
}

export const SuccessIcon: Story = {
  ...Template,
  args: {
    icon: 'check',
    size: '3x',
    theme: 'success'
  }
}

export const DangerIcon: Story = {
  ...Template,
  args: {
    icon: 'times',
    size: '3x',
    theme: 'danger'
  }
}

export const PrimaryIcon: Story = {
  ...Template,
  args: {
    icon: 'anchor',
    size: '3x',
    theme: 'primary'
  }
}

export const WarningIcon: Story = {
  ...Template,
  args: {
    icon: 'exclamation-circle',
    size: '3x',
    theme: 'warning'
  }
}

export const SpinIcon: Story = {
  ...Template,
  args: {
    icon: 'spinner',
    size: '3x',
    spin: true
  }
}

export const PulseIcon: Story = {
  ...Template,
  args: {
    icon: 'spinner',
    size: '3x',
    pulse: true
  }
}
