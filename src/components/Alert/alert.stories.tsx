import { Meta, StoryObj } from '@storybook/react'
import Alert from './alert.tsx'

const alertMeta: Meta<typeof Alert> = {
  title: 'Feedback/Alert',
  component: Alert,
  // decorators: [
  //   Story => (
  //     <div style={{ width: '350px' }}>
  //       <Story />
  //     </div>
  //   )
  // ],
  tags: ['autodocs']
}

export default alertMeta

type Story = StoryObj<typeof Alert>

const Template: Story = {
  render: args => <Alert {...args} />
}

export const DefaultAlert: Story = {
  ...Template,
  args: {
    title: 'this is alert!'
  }
}

export const AlertWithDescription: Story = {
  ...Template,
  args: {
    title: 'this is alert!',
    description: 'this is description!'
  }
}

export const AlertCanNotClose: Story = {
  ...Template,
  args: {
    title: 'this is alert!',
    closable: false
  }
}

export const SuccessAlert: Story = {
  ...Template,
  args: {
    title: 'this is success!',
    type: 'success'
  }
}

export const DangerAlert: Story = {
  ...Template,
  args: {
    title: 'this is danger!',
    type: 'danger'
  }
}

export const WarningAlert: Story = {
  ...Template,
  args: {
    title: 'this is warning!',
    type: 'warning'
  }
}
