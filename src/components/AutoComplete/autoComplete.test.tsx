import { beforeEach, describe, expect, vi } from 'vitest'
import { config } from 'react-transition-group'
import { AutoComplete, AutoCompleteProps } from './autoComplete.tsx'
import { fireEvent, render, RenderResult, screen } from '@/utils/test-utils.tsx'

config.disabled = true

const testArray = [
  { value: 'ab', number: 11 },
  { value: 'abc', number: 1 },
  { value: 'b', number: 4 },
  { value: 'c', number: 15 }
]

const testProps: AutoCompleteProps = {
  fetchSuggestions: query => {
    return testArray.filter(item => item.value.includes(query))
  },
  onSelect: vi.fn(),
  placeholder: 'auto-complete'
}

let wrapper: RenderResult, inputNode: HTMLInputElement

describe('test AutoComplete component', () => {
  beforeEach(() => {
    wrapper = render(<AutoComplete {...testProps} />)
    inputNode = screen.getByPlaceholderText('auto-complete') as HTMLInputElement
  })

  it('test basic AutoComplete behavior', async () => {
    const { container } = wrapper
    // input change
    fireEvent.change(inputNode, { target: { value: 'a' } })
    expect(await screen.findByText('ab')).toBeInTheDocument()
    expect(await screen.findByText('abc')).toBeInTheDocument()
    // should have two suggestion items
    expect(container.querySelectorAll('.suggestion-item').length).toEqual(2)
    //click the first item
    fireEvent.click(screen.getByText('ab'))
    expect(testProps.onSelect).toHaveBeenCalledWith({ value: 'ab', number: 11 })
    expect(screen.queryByText('ab')).not.toBeInTheDocument()
    //fill the input
    expect(inputNode.value).toBe('ab')
  })

  it('should provide keyboard support', async () => {
    // input change
    fireEvent.change(inputNode, { target: { value: 'a' } })
    expect(await screen.findByText('ab')).toBeInTheDocument()
    const firstResult = screen.queryByText('ab')
    const secondResult = screen.queryByText('abc')

    // press arrow down
    fireEvent.keyDown(inputNode, {
      code: 'ArrowDown'
    })
    expect(firstResult).toHaveClass('is-active')

    // press arrow down
    fireEvent.keyDown(inputNode, {
      code: 'ArrowDown'
    })
    expect(secondResult).toHaveClass('is-active')

    // press arrow up
    fireEvent.keyDown(inputNode, { code: 'ArrowUp' })
    expect(firstResult).toHaveClass('is-active')
    // press enter
    fireEvent.keyDown(inputNode, { code: 'Enter' })
    expect(testProps.onSelect).toHaveBeenCalledWith({ value: 'ab', number: 11 })
    expect(screen.queryByText('ab')).not.toBeInTheDocument()
  })
})
