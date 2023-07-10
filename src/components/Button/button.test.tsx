import { describe, it, expect, vi } from 'vitest'
import { fireEvent, render, screen } from '@/utils/test-utils'
import Button from './button'
import type { ButtonProps } from './button'

const defaultProps = {
  onClick: vi.fn()
}

const testProps: ButtonProps = {
  btnType: 'primary',
  size: 'lg',
  className: 'klass'
}

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: vi.fn()
}

describe('test Button component', () => {
  it('should render the correct default button', () => {
    render(<Button {...defaultProps}>A Button</Button>)
    const element = screen.getByRole('button')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('BUTTON')
    expect(element).toHaveClass('a-btn a-btn-default')
    expect(element).not.toBeDisabled()
    expect(defaultProps.onClick).not.toHaveBeenCalled()
    fireEvent.click(element)
    expect(defaultProps.onClick).toHaveBeenCalled()
  })

  it('should render the correct component based on different props', () => {
    render(<Button {...testProps}>A Button</Button>)
    const element = screen.getByRole('button')
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('a-btn-primary a-btn-lg klass')
  })

  it('should render a link when btnType equals link and href is provided', () => {
    render(
      <Button btnType="link" href="http://dummyurl">
        A Link
      </Button>
    )
    const element = screen.getByRole('link')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('A')
    expect(element).toHaveClass('a-btn a-btn-link')
  })

  it('should render disabled button when disabled set to true', () => {
    render(<Button {...disabledProps}>A Button</Button>)
    const element = screen.getByRole('button')
    expect(element).toBeInTheDocument()
    expect(element).toBeDisabled()
    fireEvent.click(element)
    expect(disabledProps.onClick).not.toHaveBeenCalled()
  })
})
