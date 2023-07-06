import { Meta, StoryObj } from '@storybook/react'
import Icon from '@/components/Icon'
import { parameters } from '@/utils/storybook-utils'

const iconMeta: Meta<typeof Icon> = {
  title: 'General/Icon',
  component: Icon,
  argTypes: {
    icon: {
      description:
        'Font Awesome icon name. The Icon component is based on Font Awesome solid icons. You can find the list of available icon names [here](https://fontawesome.com/search?o=r&m=free&s=solid).'
    }
  }
}

export default iconMeta

type Story = StoryObj<typeof Icon>

const Template: Story = {
  render: args => <Icon {...args} />
}

const defaultIconCode = `
import { Icon } from '@a-front-end-project/a-ui'

const App = () => (
  <Icon icon="check" size="3x" />
)
`

export const DefaultIcon: Story = {
  ...Template,
  args: {
    icon: 'check',
    size: '3x'
  },
  parameters: parameters({ code: defaultIconCode })
}

const successIconCode = `
import { Icon } from '@a-front-end-project/a-ui'

const App = () => (
  <Icon icon="check" size="3x" theme="success" />
)
`

export const SuccessIcon: Story = {
  ...Template,
  args: {
    icon: 'check',
    size: '3x',
    theme: 'success'
  },
  parameters: parameters({ code: successIconCode })
}

const dangerIconCode = `
import { Icon } from '@a-front-end-project/a-ui'

const App = () => (
  <Icon icon="times" size="3x" theme="danger" />
)
`

export const DangerIcon: Story = {
  ...Template,
  args: {
    icon: 'times',
    size: '3x',
    theme: 'danger'
  },
  parameters: parameters({ code: dangerIconCode })
}

const primaryIconCode = `
import { Icon } from '@a-front-end-project/a-ui'

const App = () => (
  <Icon icon="anchor" size="3x" theme="primary" />
)
`

export const PrimaryIcon: Story = {
  ...Template,
  args: {
    icon: 'anchor',
    size: '3x',
    theme: 'primary'
  },
  parameters: parameters({ code: primaryIconCode })
}

const warningIconCode = `
import { Icon } from '@a-front-end-project/a-ui'

const App = () => (
  <Icon icon="exclamation-circle" size="3x" theme="warning" />
)
`

export const WarningIcon: Story = {
  ...Template,
  args: {
    icon: 'exclamation-circle',
    size: '3x',
    theme: 'warning'
  },
  parameters: parameters({ code: warningIconCode })
}

const spinIconCode = `
import { Icon } from '@a-front-end-project/a-ui'

const App = () => (
  <Icon icon="spinner" size="3x" spin />
)
`

export const SpinIcon: Story = {
  ...Template,
  args: {
    icon: 'spinner',
    size: '3x',
    spin: true
  },
  parameters: parameters({ code: spinIconCode })
}

const pulseIconCode = `
import { Icon } from '@a-front-end-project/a-ui'

const App = () => (
  <Icon icon="spinner" size="3x" pulse />
)
`

export const PulseIcon: Story = {
  ...Template,
  args: {
    icon: 'spinner',
    size: '3x',
    pulse: true
  },
  parameters: parameters({ code: pulseIconCode })
}
