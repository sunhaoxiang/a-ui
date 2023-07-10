import Upload, { UploadFile } from './upload'
import Button from '@/components/Button'
import Icon from '@/components/Icon'
import { parameters } from '@/utils/storybook-utils'
import type { Meta, StoryObj } from '@storybook/react'

const uploadMeta: Meta<typeof Upload> = {
  title: 'Data Entry/Upload',
  component: Upload
}

export default uploadMeta

type Story = StoryObj<typeof Upload>

const simpleUploadCode = `
import { Upload, Button, Icon } from '@a-front-end-project/a-ui'

const App = () => (
  <Upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76">
    <Button>
      <Icon icon="upload" /> Click to Upload
    </Button>
  </Upload>
)

export default App
`

export const SimpleUpload: Story = {
  render: args => (
    <Upload {...args} action="https://www.mocky.io/v2/5cc8019d300000980a055e76">
      <Button>
        <Icon icon="upload" /> Click to Upload
      </Button>
    </Upload>
  ),
  parameters: parameters({ code: simpleUploadCode })
}

const defaultFilesCode = `
import { Upload, Button, Icon } from '@a-front-end-project/a-ui'
import type { UploadFile } from '@a-front-end-project/a-ui'

const App = () => {
  const defaultFileList: UploadFile[] = [
    {
      uid: '123',
      size: 1234,
      name: 'xxx.md',
      status: 'uploading',
      percent: 66
    },
    {
      uid: '122',
      size: 1234,
      name: 'yyy.md',
      status: 'success'
    },
    {
      uid: '121',
      size: 1234,
      name: 'zzz.md',
      status: 'error'
    }
  ]
 
  return (
    <Upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      defaultFileList={defaultFileList}
    >
      <Button>
        <Icon icon="upload" /> Click to Upload
      </Button>
    </Upload>
  )
}

export default App
`

export const DefaultFiles: Story = {
  render: args => {
    const defaultFileList: UploadFile[] = [
      {
        uid: '123',
        size: 1234,
        name: 'xxx.md',
        status: 'uploading',
        percent: 66
      },
      {
        uid: '122',
        size: 1234,
        name: 'yyy.md',
        status: 'success'
      },
      {
        uid: '121',
        size: 1234,
        name: 'zzz.md',
        status: 'error'
      }
    ]
    return (
      <Upload
        {...args}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        defaultFileList={defaultFileList}
      >
        <Button>
          <Icon icon="upload" /> Click to Upload
        </Button>
      </Upload>
    )
  },
  parameters: parameters({ code: defaultFilesCode })
}

const checkUploadSizeCode = `
import { Upload, Button, Icon } from '@a-front-end-project/a-ui'

const App = () => {
    const checkFileSize = (file: File) => {
      if (Math.round(file.size / 1024) > 50) {
        alert('file too big')
        return false
      }
      return true
    }

    return (
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={checkFileSize}
      >
        <Button>
          <Icon icon="upload" /> Max Size: 50Kb
        </Button>
      </Upload>
    )
}

export default App
`

export const CheckUploadSize: Story = {
  render: args => {
    const checkFileSize = (file: File) => {
      if (Math.round(file.size / 1024) > 50) {
        alert('file too big')
        return false
      }
      return true
    }

    return (
      <Upload
        {...args}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={checkFileSize}
      >
        <Button>
          <Icon icon="upload" /> Max Size: 50Kb
        </Button>
      </Upload>
    )
  },
  parameters: parameters({ code: checkUploadSizeCode })
}

const dragUploadCode = `
import { Upload, Icon } from '@a-front-end-project/a-ui'

const App = () => (
  <Upload
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    name="fileName"
    multiple
    drag
  >
    <p style={{ margin: '20px 0' }}>
      <Icon icon="upload" size="2x" theme="secondary" />
    </p>
    <p>Click or drag file to this area to upload</p>
  </Upload>
)

export default App
`

export const DragUpload: Story = {
  render: args => (
    <Upload
      {...args}
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      name="fileName"
      multiple
      drag
    >
      <p style={{ margin: '20px 0' }}>
        <Icon icon="upload" size="2x" theme="secondary" />
      </p>
      <p>Click or drag file to this area to upload</p>
    </Upload>
  ),
  parameters: parameters({ code: dragUploadCode })
}
