import { Meta, StoryObj } from '@storybook/react'
import Alert from './alert'
import { parameters } from '@/utils/storybook-utils'

const alertMeta: Meta<typeof Alert> = {
  title: 'Feedback/Alert',
  component: Alert
}

export default alertMeta

type Story = StoryObj<typeof Alert>

const Template: Story = {
  render: args => <Alert {...args} />
}

const defaultAlertCode = `
import { Alert } from '@a-front-end-project/a-ui'

const App = () => (
  <Alert title="this is alert!" />
)

export default App
`

export const DefaultAlert: Story = {
  ...Template,
  args: {
    title: 'this is alert!'
  },
  parameters: parameters({ code: defaultAlertCode })
}

const alertWithDescriptionCode = `
import { Alert } from '@a-front-end-project/a-ui'

const App = () => (
  <Alert
   title="this is alert!"
   description="this is description!"
  />
)

export default App
`

export const AlertWithDescription: Story = {
  ...Template,
  args: {
    title: 'this is alert!',
    description: 'this is description!'
  },
  parameters: parameters({ code: alertWithDescriptionCode })
}

const alertCanNotCloseCode = `
import { Alert } from '@a-front-end-project/a-ui'

const App = () => (
  <Alert
   title="this is alert!"
   closable={false}
  />
)

export default App
`

export const AlertCanNotClose: Story = {
  ...Template,
  args: {
    title: 'this is alert!',
    closable: false
  },
  parameters: parameters({ code: alertCanNotCloseCode })
}

const successAlertCode = `
import { Alert } from '@a-front-end-project/a-ui'

const App = () => (
  <Alert
   title="this is success!"
   type="success"
  />
)

export default App
`

export const SuccessAlert: Story = {
  ...Template,
  args: {
    title: 'this is success!',
    type: 'success'
  },
  parameters: parameters({ code: successAlertCode })
}

const dangerAlertCode = `
import { Alert } from '@a-front-end-project/a-ui'

const App = () => (
  <Alert
   title="this is danger!"
   type="danger"
  />
)

export default App
`

export const DangerAlert: Story = {
  ...Template,
  args: {
    title: 'this is danger!',
    type: 'danger'
  },
  parameters: parameters({ code: dangerAlertCode })
}

const warningAlertCode = `
import { Alert } from '@a-front-end-project/a-ui'

const App = () => (
  <Alert
   title="this is warning!"
   type="warning"
  />
)

export default App
`

export const WarningAlert: Story = {
  ...Template,
  args: {
    title: 'this is warning!',
    type: 'warning'
  },
  parameters: parameters({ code: warningAlertCode })
}
