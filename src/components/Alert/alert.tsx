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

const Alert = () => {
  return <div>Alert</div>
}

export default Alert
