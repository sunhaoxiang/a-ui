import { describe, it, expect, vi, Mocked } from 'vitest'
import axios from 'axios'
import { fireEvent, render, screen, RenderResult } from '@/utils/test-utils.tsx'
import { Upload, UploadProps } from './upload.tsx'

vi.mock('@/components/Icon/icon.tsx', () => {
  return {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    default: (props: any) => {
      return <span onClick={props.onClick}>{props.icon}</span>
    }
  }
})

vi.mock('axios')
const mockedAxios = axios as Mocked<typeof axios>

const testProps: UploadProps = {
  action: 'fake-url.com',
  onSuccess: vi.fn(),
  onChange: vi.fn(),
  onRemove: vi.fn(),
  drag: true
}

let wrapper: RenderResult, fileInput: HTMLInputElement, uploadArea: HTMLElement

const testFile = new File(['xyz'], 'test.png', { type: 'image/png' })

describe('test upload component', () => {
  beforeEach(() => {
    wrapper = render(<Upload {...testProps}>Click to upload</Upload>)
    const { container } = wrapper
    fileInput = container.querySelector('.a-file-input') as HTMLInputElement
    uploadArea = screen.queryByText('Click to upload') as HTMLElement
  })

  it('upload process should works fine', async () => {
    mockedAxios.post.mockResolvedValue({ data: 'cool' })
    expect(uploadArea).toBeInTheDocument()
    expect(fileInput).not.toBeVisible()
    fireEvent.change(fileInput, { target: { files: [testFile] } })
    expect(screen.queryByText('spinner')).toBeInTheDocument()
    expect(await screen.findByText('test.png')).toBeInTheDocument()
    expect(await screen.findByText('check-circle')).toBeInTheDocument()
    expect(testProps.onSuccess).toHaveBeenCalledWith(
      'cool',
      expect.objectContaining({
        raw: testFile,
        status: 'success',
        response: 'cool',
        name: 'test.png'
      })
    )
    expect(testProps.onChange).toHaveBeenCalledWith(
      expect.objectContaining({
        raw: testFile,
        status: 'success',
        response: 'cool',
        name: 'test.png'
      })
    )
  })

  it('drag and drop files should works fine')
})
