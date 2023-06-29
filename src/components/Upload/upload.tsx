import { useRef, useState, FC, ReactNode, ChangeEvent } from 'react'
import axios, { AxiosProgressEvent } from 'axios'
import UploadList from './uploadList'
import Dragger from './dragger'

export type UploadFileStatus = 'ready' | 'uploading' | 'success' | 'error'
export interface UploadFile {
  uid: string
  size: number
  name: string
  status?: UploadFileStatus
  percent?: number
  raw?: File
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  response?: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error?: any
}

export interface UploadProps {
  action: string
  defaultFileList?: UploadFile[]
  accept?: string
  multiple?: boolean
  drag?: boolean
  name?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  headers?: { [key: string]: any }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: { [key: string]: any }
  withCredentials?: boolean
  beforeUpload?: (file: File) => boolean | Promise<File>
  onProgress?: (percentage: number, file: UploadFile) => void
  onChange?: (file: UploadFile) => void
  onRemove?: (file: UploadFile) => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSuccess?: (data: any, file: UploadFile) => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onError?: (err: any, file: UploadFile) => void
  children?: ReactNode
}

export const Upload: FC<UploadProps> = props => {
  const {
    action,
    defaultFileList,
    accept,
    multiple,
    drag,
    name,
    headers,
    data,
    withCredentials,
    beforeUpload,
    onProgress,
    onChange,
    onRemove,
    onSuccess,
    onError,
    children
  } = props

  const fileInput = useRef<HTMLInputElement>(null)

  const [fileList, setFileList] = useState<UploadFile[]>(defaultFileList || [])

  const updateFileList = (
    uploadFile: UploadFile,
    updateObj: Partial<UploadFile>
  ) => {
    setFileList(prevList => {
      return prevList.map(file => {
        if (file.uid === uploadFile.uid) {
          return { ...file, ...updateObj }
        } else {
          return file
        }
      })
    })
  }

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

  const handleRemove = (file: UploadFile) => {
    setFileList(prevList => {
      return prevList.filter(item => item.uid !== file.uid)
    })
    if (onRemove) {
      onRemove(file)
    }
  }

  const uploadFiles = (files: FileList) => {
    const postFiles = Array.from(files)
    postFiles.forEach(file => {
      if (!beforeUpload) {
        post(file)
      } else {
        const result = beforeUpload(file)
        if (result instanceof Promise) {
          result.then(processedFile => {
            post(processedFile)
          })
        } else if (result) {
          post(file)
        }
      }
    })
  }

  const post = (file: File) => {
    const _file: UploadFile = {
      uid: Date.now() + 'upload-file',
      status: 'ready',
      name: file.name,
      size: file.size,
      percent: 0,
      raw: file
    }
    setFileList(prevList => {
      return [_file, ...prevList]
    })
    const formData = new FormData()
    formData.append(name || 'file', file)
    if (data) {
      Object.keys(data).forEach(key => {
        formData.append(key, data[key])
      })
    }
    axios
      .post(action, formData, {
        headers: {
          ...headers,
          'Content-Type': 'multipart/form-data'
        },
        withCredentials,
        onUploadProgress: (e: AxiosProgressEvent) => {
          const percentage = e.total
            ? Math.round((e.loaded * 100) / e.total)
            : 0
          if (percentage < 100) {
            updateFileList(_file, { percent: percentage, status: 'uploading' })
            if (onProgress) {
              onProgress(percentage, _file)
            }
          }
        }
      })
      .then(res => {
        updateFileList(_file, { status: 'success', response: res.data })
        _file.status = 'success'
        _file.response = res.data
        if (onSuccess) {
          onSuccess(res.data, _file)
        }
        if (onChange) {
          onChange(_file)
        }
      })
      .catch(err => {
        updateFileList(_file, { status: 'error', error: err.data })
        _file.status = 'error'
        _file.error = err.data
        if (onError) {
          onError(err.data, _file)
        }
        if (onChange) {
          onChange(_file)
        }
      })
  }

  return (
    <div className="a-upload-component">
      <div
        className="a-upload-input"
        style={{ display: 'inline-block' }}
        onClick={handleClick}
      >
        {drag ? (
          <Dragger
            onFile={files => {
              uploadFiles(files)
            }}
          >
            {children}
          </Dragger>
        ) : (
          children
        )}
        <input
          ref={fileInput}
          className="a-file-input"
          style={{ display: 'none' }}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={handleFileChange}
        />
      </div>
      <UploadList fileList={fileList} onRemove={handleRemove} />
    </div>
  )
}

Upload.defaultProps = {
  name: 'file'
}

export default Upload
