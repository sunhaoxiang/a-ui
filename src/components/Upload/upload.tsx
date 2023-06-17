import { FC, useRef } from 'react'
import axios from 'axios'
import Button from '@/components/Button/button.tsx'

export interface UploadProps {
  action: string
  onProgress?: (percentage: number, file: File) => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSuccess?: (data: any, file: File) => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onError?: (err: any, file: File) => void
}

export const Upload: FC<UploadProps> = props => {
  const { action, onProgress, onSuccess, onError } = props

  return (
    <div className="a-upload-component">
      <Button btnType="primary">Upload File</Button>
      <input className="a-file-input" style={{ display: 'none' }} type="file" />
    </div>
  )
}

export default Upload
