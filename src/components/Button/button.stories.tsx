import { Meta, StoryObj } from '@storybook/react'
import Button from '@/components/Button'
import Icon from '@/components/Icon'

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
`

export const DefaultButton: Story = {
  ...Template,
  args: {
    children: 'Default Button'
  },
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: defaultButtonCode
      }
    }
  }
}

const disabledButtonCode = `
import { Button } from '@a-front-end-project/a-ui'

const App = () => (
  <Button disabled>Disabled Button</Button>
)
`

export const DisabledButton: Story = {
  ...Template,
  args: {
    disabled: true,
    children: 'Disabled Button'
  },
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: disabledButtonCode
      }
    }
  }
}

const primaryButtonCode = `
import { Button } from '@a-front-end-project/a-ui'

const App = () => (
  <Button btnType="primary">Primary Button</Button>
)
`

export const PrimaryButton: Story = {
  ...Template,
  args: {
    btnType: 'primary',
    children: 'Primary Button'
  },
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: primaryButtonCode
      }
    }
  }
}

const dangerButtonCode = `
import { Button } from '@a-front-end-project/a-ui'

const App = () => (
  <Button btnType="danger">Danger Button</Button>
)
`

export const DangerButton: Story = {
  ...Template,
  args: {
    btnType: 'danger',
    children: 'Danger Button'
  },
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: dangerButtonCode
      }
    }
  }
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
`

export const LinkButton: Story = {
  ...Template,
  args: {
    btnType: 'link',
    href: 'https://www.google.com',
    children: 'Link Button'
  },
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: linkButtonCode
      }
    }
  }
}

const largeButtonCode = `
import { Button } from '@a-front-end-project/a-ui'

const App = () => (
  <Button size="lg">Large Button</Button>
)
`

export const LargeButton: Story = {
  ...Template,
  args: {
    size: 'lg',
    children: 'Large Button'
  },
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: largeButtonCode
      }
    }
  }
}

const smallButtonCode = `
import { Button } from '@a-front-end-project/a-ui'

const App = () => (
  <Button size="sm">Small Button</Button>
)
`

export const SmallButton: Story = {
  ...Template,
  args: {
    size: 'sm',
    children: 'Small Button'
  },
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: smallButtonCode
      }
    }
  }
}

const iconButtonCode = `
import { Button, Icon } from '@a-front-end-project/a-ui'

const App = () => (
  <Button btnType="danger">
    <Icon icon="trash" />
  </Button>
)
`

export const IconButton: Story = {
  render: args => (
    <Button {...args} btnType="danger">
      <Icon icon="trash" />
    </Button>
  ),
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: iconButtonCode
      }
    }
  }
}
