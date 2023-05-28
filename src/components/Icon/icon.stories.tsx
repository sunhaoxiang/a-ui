import { Meta, StoryObj } from '@storybook/react'
import Icon from './icon.tsx'
import Button from '../Button/button.tsx'

const iconMeta: Meta<typeof Icon> = {
  title: 'General/Icon',
  component: Icon,
  tags: ['autodocs']
}

export default iconMeta

type Story = StoryObj<typeof Icon>

const Template: Story = {
  render: args => (
    <>
      <Icon {...args} icon="check" size="3x" />
      <Icon {...args} icon="times" size="3x" />
      <Icon {...args} icon="anchor" size="3x" />
      <Icon {...args} icon="trash" size="3x" />
      <Button size="lg" btnType="primary">
        <Icon {...args} icon="check" />
        check
      </Button>
    </>
  )
}

export const DefaultIcon: Story = {
  ...Template
}
