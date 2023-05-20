import { useState } from 'react'
import classNames from 'classnames'
import Icon from '@/components/Icon/icon.tsx'
import Transition from '@/components/Transition/transition.tsx'

export type AlertType = 'success' | 'default' | 'danger' | 'warning'

export interface AlertProps {
  title: string
  description?: string
  type?: AlertType
  closable?: boolean
  onClose?: () => void
}

const Alert = (props: AlertProps) => {
  const { title, description, type, onClose, closable } = props

  const [hide, setHide] = useState(false)

  const classes = classNames('alert', {
    [`alert-${type}`]: type
  })

  const titleClass = classNames('alert-title', {
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
        {description && <p className="alert-desc">{description}</p>}
        {closable && (
          <span
            className="alert-close"
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
