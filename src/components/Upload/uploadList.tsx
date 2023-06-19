import { FC } from 'react'
import { UploadFile } from './upload'
import Icon from '@/components/Icon/icon.tsx'

interface UploadListProps {
  fileList: UploadFile[]
  onRemove: (_file: UploadFile) => void
}

export const UploadList: FC<UploadListProps> = props => {
  const { fileList, onRemove } = props

  return (
    <ul className="a-upload-list">
      {fileList.map(item => {
        return (
          <li className="a-upload-list-item" key={item.uid}>
            <span className={`file-name file-name${item.status}`}>
              <Icon icon="file-alt" theme="secondary" />
              {item.name}
            </span>
          </li>
        )
      })}
    </ul>
  )
}

export default UploadList
