import { describe, expect, vi } from 'vitest'
import { fireEvent, render, screen } from '@/utils/test-utils'
import { Input, InputProps } from './input'

const defaultProps: InputProps = {
  onChange: vi.fn(),
  placeholder: 'test-input'
}

describe('test Input component', () => {
  it('should render the correct default Input', () => {
    render(<Input {...defaultProps} />)
    const testNode = screen.getByPlaceholderText(
      'test-input'
    ) as HTMLInputElement
    expect(testNode).toBeInTheDocument()
    expect(testNode).toHaveClass('a-input-inner')
    fireEvent.change(testNode, { target: { value: '123' } })
    expect(defaultProps.onChange).toHaveBeenCalled()
    expect(testNode.value).toEqual('123')
  })

  it('should render the disabled Input on disabled property', () => {
    render(<Input disabled placeholder="disabled" />)
    const testNode = screen.getByPlaceholderText('disabled')
    expect(testNode).toBeDisabled()
  })

  it('should render different input sizes on size property', () => {
    const { container } = render(<Input placeholder="sizes" size="lg" />)
    const testContainer = container.querySelector('.a-input-wrapper')
    expect(testContainer).toHaveClass('a-input-size-lg')
  })

  it('should render prepand and append element on prepand/append property', () => {
    const { container } = render(
      <Input placeholder="pend" prepend="https://" append=".com" />
    )
    const testContainer = container.querySelector('.a-input-wrapper')
    expect(testContainer).toHaveClass(
      'a-input-group a-input-group-append-wrapper a-input-group-prepend-wrapper'
    )
    expect(screen.queryByText('https://')).toBeInTheDocument()
    expect(screen.queryByText('.com')).toBeInTheDocument()
  })
})
