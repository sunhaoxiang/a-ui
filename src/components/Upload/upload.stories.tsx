import { Meta, StoryObj } from '@storybook/react'
import Upload from './upload.tsx'
import Button from '@/components/Button/button.tsx'
import Icon from '@/components/Icon/icon.tsx'

const uploadMeta: Meta<typeof Upload> = {
  title: 'Data Entry/Upload',
  component: Upload,
  // decorators: [
  //   Story => (
  //     <div style={{ width: '350px' }}>
  //       <Story />
  //     </div>
  //   )
  // ],
  tags: ['autodocs']
}

export default uploadMeta

type Story = StoryObj<typeof Upload>

export const SimpleUpload: Story = {
  render: args => (
    <Upload {...args} action="https://www.mocky.io/v2/5cc8019d300000980a055e76">
      <Button>
        <Icon icon="upload" /> Click to Upload
      </Button>
    </Upload>
  )
}

export const CheckUploadUpload: Story = {
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
  }
}

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
  )
}
