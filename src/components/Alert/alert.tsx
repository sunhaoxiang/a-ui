import { FC, useState } from 'react'
import classNames from 'classnames'
import Icon from '@/components/Icon/icon'
import Transition from '@/components/Transition/transition'

export type AlertType = 'success' | 'default' | 'danger' | 'warning'

export interface AlertProps {
  title: string
  description?: string
  type?: AlertType
  closable?: boolean
  onClose?: () => void
}

export const Alert: FC<AlertProps> = props => {
  const { title, description, type, onClose, closable } = props

  const [hide, setHide] = useState(false)

  const classes = classNames('a-alert', {
    [`a-alert-${type}`]: type
  })

  const titleClass = classNames('a-alert-title', {
    'bold-title': description
  })

  const handleClose = () => {
    if (onClose) {
      onClose()
    }
    setHide(true)
  }

  return (
    <Transition in={!hide} timeout={300} animation="zoom-in-top">
      <div className={classes} role="alert">
        <span className={titleClass}>{title}</span>
        {description && <p className="a-alert-desc">{description}</p>}
        {closable && (
          <span
            className="a-alert-close"
            role="alert-close-button"
            onClick={handleClose}
          >
            <Icon icon="times" />
          </span>
        )}
      </div>
    </Transition>
  )
}

Alert.defaultProps = {
  type: 'default',
  closable: true
}

export default Alert
