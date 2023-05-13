import { describe, expect, vi } from 'vitest'
import Button, { ButtonSize, ButtonType } from './button'
import type { ButtonProps } from './button'
import { fireEvent, render, screen } from '@/utils/test-utils'

const defaultProps = {
  onClick: vi.fn()
}

const testProps: ButtonProps = {
  btnType: ButtonType.Primary,
  size: ButtonSize.Large,
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
    expect(element).toHaveClass('btn btn-default')
    expect(element).not.toBeDisabled()
    expect(defaultProps.onClick).not.toHaveBeenCalled()
    fireEvent.click(element)
    expect(defaultProps.onClick).toHaveBeenCalled()
  })

  it('should render the correct component based on different props', () => {
    render(<Button {...testProps}>A Button</Button>)
    const element = screen.getByRole('button')
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('btn-primary btn-lg klass')
  })

  it('should render a link when btnType equals link and href is provided', () => {
    render(
      <Button btnType={ButtonType.Link} href="http://dummyurl">
        A Link
      </Button>
    )
    const element = screen.getByRole('link')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('A')
    expect(element).toHaveClass('btn btn-link')
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
