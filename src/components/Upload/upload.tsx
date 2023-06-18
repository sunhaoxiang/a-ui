import { useRef, FC, ChangeEvent } from 'react'
import axios, { AxiosProgressEvent } from 'axios'
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

  const fileInput = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    if (fileInput.current) {
      fileInput.current.click()
    }
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) {
      return
    }
    uploadFiles(files)
    if (fileInput.current) {
      fileInput.current.value = ''
    }
  }

  const uploadFiles = (files: FileList) => {
    const postFiles = Array.from(files)
    postFiles.forEach(file => {
      const formData = new FormData()
      formData.append(file.name, file)
      axios
        .post(action, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          onUploadProgress: (e: AxiosProgressEvent) => {
            const percentage = e.total
              ? Math.round((e.loaded * 100) / e.total)
              : 0
            if (percentage < 100) {
              if (onProgress) {
                onProgress(percentage, file)
              }
            }
          }
        })
        .then(res => {
          if (onSuccess) {
            onSuccess(res.data, file)
          }
        })
        .catch(err => {
          if (onError) {
            onError(err, file)
          }
        })
    })
  }

  return (
    <div className="a-upload-component">
      <Button btnType="primary" onClick={handleClick}>
        Upload File
      </Button>
      <input
        ref={fileInput}
        className="a-file-input"
        style={{ display: 'none' }}
        type="file"
        onChange={handleFileChange}
      />
    </div>
  )
}

export default Upload
