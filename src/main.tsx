import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import './styles/index.scss'

library.add(fas)

export { default as Alert } from './components/Alert'
export type { AlertType, AlertProps } from './components/Alert'

export { default as AutoComplete } from './components/AutoComplete'
export type {
  DataSourceType as AutoCompleteDataSourceType,
  AutoCompleteProps
} from './components/AutoComplete'

export { default as Button } from './components/Button'
export type { ButtonType, ButtonSize, ButtonProps } from './components/Button'

export { default as Form } from './components/Form'
export type {
  RenderProps as FormRenderProps,
  FormProps,
  IFormContext,
  IFormRef,
  FormItemProps,
  CustomRuleFunc as FormCustomRuleFunc,
  CustomRule as FormCustomRule,
  FieldDetail as FormFieldDetail,
  FieldsState as FormFieldsState,
  ValidateErrorType as FormValidateErrorType,
  FormState,
  FieldAction as FormFieldAction
} from './components/Form'

export { default as Icon } from './components/Icon'
export type { ThemeProps as IconThemeProps, IconProps } from './components/Icon'

export { default as Input } from './components/Input'
export type { InputProps } from './components/Input'

export { default as Menu } from './components/Menu'
export type {
  MenuMode,
  MenuProps,
  MenuItemProps,
  SubMenuProps
} from './components/Menu'

export { default as Progress } from './components/Progress'
export type { ProgressProps } from './components/Progress'

export { default as Select } from './components/Select'
export type {
  SelectProps,
  ISelectContext,
  SelectOptionProps
} from './components/Select'

export { default as Tabs } from './components/Tabs'
export type { TabsProps, TabItemProps } from './components/Tabs'

export { default as Transition } from './components/Transition'
export type {
  AnimationName as TransitionAnimationName,
  TransitionProps
} from './components/Transition'

export { default as Upload } from './components/Upload'
export type {
  UploadFileStatus,
  UploadFile,
  UploadProps,
  DraggerProps as UploadDraggerProps,
  UploadListProps
} from './components/Upload'
