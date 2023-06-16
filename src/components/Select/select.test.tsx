import { beforeEach, describe, expect, vi } from 'vitest'
import { config } from 'react-transition-group'
import Select, { SelectProps } from './select.tsx'
import Option from './option.tsx'
import {
  fireEvent,
  render,
  RenderResult,
  screen,
  waitFor
} from '@/utils/test-utils.tsx'

config.disabled = true

const testProps: SelectProps = {
  defaultValue: '',
  placeholder: 'test',
  onChange: vi.fn(),
  onVisibleChange: vi.fn()
}

const multipleProps: SelectProps = {
  ...testProps,
  multiple: true
}

describe('test Select component', () => {
  it('should render the correct Select component')

  it('should works fine in multiple mode')
})
