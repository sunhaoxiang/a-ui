import Button from '@/components/Button'
import Icon from '@/components/Icon'
import { parameters } from '@/utils/storybook-utils'
import type { Meta, StoryObj } from '@storybook/react'

const buttonMeta: Meta<typeof Button> = {
  title: 'General/Button',
  component: Button
}

export default buttonMeta

type Story = StoryObj<typeof Button>

const Template: Story = {
  render: args => <Button {...args} />
}

const defaultButtonCode = `
import { Button } from '@a-front-end-project/a-ui'

const App = () => (
  <Button>Default Button</Button>
)

export default App
`

export const DefaultButton: Story = {
  ...Template,
  args: {
    children: 'Default Button'
  },
  parameters: parameters({ code: defaultButtonCode })
}

const disabledButtonCode = `
import { Button } from '@a-front-end-project/a-ui'

const App = () => (
  <Button disabled>Disabled Button</Button>
)

export default App
`

export const DisabledButton: Story = {
  ...Template,
  args: {
    disabled: true,
    children: 'Disabled Button'
  },
  parameters: parameters({ code: disabledButtonCode })
}

const primaryButtonCode = `
import { Button } from '@a-front-end-project/a-ui'

const App = () => (
  <Button btnType="primary">Primary Button</Button>
)

export default App
`

export const PrimaryButton: Story = {
  ...Template,
  args: {
    btnType: 'primary',
    children: 'Primary Button'
  },
  parameters: parameters({ code: primaryButtonCode })
}

const dangerButtonCode = `
import { Button } from '@a-front-end-project/a-ui'

const App = () => (
  <Button btnType="danger">Danger Button</Button>
)

export default App
`

export const DangerButton: Story = {
  ...Template,
  args: {
    btnType: 'danger',
    children: 'Danger Button'
  },
  parameters: parameters({ code: dangerButtonCode })
}

const linkButtonCode = `
import { Button } from '@a-front-end-project/a-ui'

const App = () => (
  <Button
     btnType="link"
     href="https://www.google.com"
  >
    Link Button
  </Button>
)

export default App
`

export const LinkButton: Story = {
  ...Template,
  args: {
    btnType: 'link',
    href: 'https://www.google.com',
    children: 'Link Button'
  },
  parameters: parameters({ code: linkButtonCode })
}

const largeButtonCode = `
import { Button } from '@a-front-end-project/a-ui'

const App = () => (
  <Button size="lg">Large Button</Button>
)

export default App
`

export const LargeButton: Story = {
  ...Template,
  args: {
    size: 'lg',
    children: 'Large Button'
  },
  parameters: parameters({ code: largeButtonCode })
}

const smallButtonCode = `
import { Button } from '@a-front-end-project/a-ui'

const App = () => (
  <Button size="sm">Small Button</Button>
)

export default App
`

export const SmallButton: Story = {
  ...Template,
  args: {
    size: 'sm',
    children: 'Small Button'
  },
  parameters: parameters({ code: smallButtonCode })
}

const iconButtonCode = `
import { Button, Icon } from '@a-front-end-project/a-ui'

const App = () => (
  <Button btnType="danger">
    <Icon icon="trash" />
  </Button>
)

export default App
`

export const IconButton: Story = {
  render: args => (
    <Button {...args} btnType="danger">
      <Icon icon="trash" />
    </Button>
  ),
  parameters: parameters({ code: iconButtonCode })
}
