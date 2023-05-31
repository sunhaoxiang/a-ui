import { Meta, StoryObj } from '@storybook/react'
import Input from './input.tsx'

const inputMeta: Meta<typeof Input> = {
  title: 'Data Entry/Input',
  component: Input,
  parameters: {
    docs: {
      description: {
        className: 'my-description'
      }
    }
  },
  tags: ['autodocs']
}

export default inputMeta

type Story = StoryObj<typeof Input>

const Template: Story = {
  render: args => <Input {...args} />
}

export const DefaultInput: Story = {
  ...Template,
  args: {
    placeholder: 'Default Input'
  }
}

export const DisabledInput: Story = {
  ...Template,
  args: {
    placeholder: 'Disabled Input',
    disabled: true
  }
}

export const LargeInput: Story = {
  ...Template,
  args: {
    placeholder: 'large input',
    size: 'lg'
  }
}

export const SmallInput: Story = {
  ...Template,
  args: {
    placeholder: 'small input',
    size: 'sm'
  }
}

export const InputWithIcon: Story = {
  ...Template,
  args: {
    placeholder: 'input with icon',
    icon: 'search'
  }
}

export const InputWithPrepend: Story = {
  ...Template,
  args: {
    placeholder: 'google.com',
    prepend: 'https://'
  }
}

export const InputWithAppend: Story = {
  ...Template,
  args: {
    placeholder: 'google',
    append: '.com'
  }
}
