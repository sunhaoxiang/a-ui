import { beforeEach, describe, it, expect, vi } from 'vitest'
import { config } from 'react-transition-group'
import { AutoComplete, AutoCompleteProps, DataSourceType } from './autoComplete'
import {
  fireEvent,
  render,
  RenderResult,
  screen,
  waitFor
} from '@/utils/test-utils'

config.disabled = true

vi.mock('@/components/Icon', () => {
  return {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    default: (props: any) => {
      return <span onClick={props.onClick}>{props.icon}</span>
    }
  }
})

const testArray = [
  { value: 'ab', number: 11 },
  { value: 'abc', number: 1 },
  { value: 'b', number: 4 },
  { value: 'c', number: 15 }
]

const renderOption = (item: DataSourceType) => {
  const itemWithNumber = item as DataSourceType<{
    value: string
    number: number
  }>
  return <>name: {itemWithNumber.value}</>
}

const testProps: AutoCompleteProps = {
  fetchSuggestions: query => {
    return testArray.filter(item => item.value.includes(query))
  },
  onSelect: vi.fn(),
  placeholder: 'auto-complete'
}

const testPropsWithCustomRender: AutoCompleteProps = {
  ...testProps,
  placeholder: 'auto-complete-2',
  renderOption
}

let wrapper: RenderResult, inputNode: HTMLInputElement

describe('test AutoComplete component', () => {
  beforeEach(() => {
    wrapper = render(<AutoComplete {...testProps} />)
    inputNode = screen.getByPlaceholderText('auto-complete') as HTMLInputElement
  })

  it('test basic AutoComplete behavior', async () => {
    const { container } = wrapper
    fireEvent.change(inputNode, { target: { value: 'a' } })
    expect(await screen.findByText('ab')).toBeInTheDocument()
    expect(await screen.findByText('abc')).toBeInTheDocument()
    // should have two suggestion items
    expect(container.querySelectorAll('.suggestion-item').length).toEqual(2)
    //click the first item
    fireEvent.click(screen.getByText('ab'))
    expect(testProps.onSelect).toHaveBeenCalledWith({ value: 'ab', number: 11 })
    expect(screen.queryByText('ab')).not.toBeInTheDocument()
    expect(inputNode.value).toBe('ab')
  })

  it('should provide keyboard support', async () => {
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

  it('click outside should hide the dropdown', async () => {
    fireEvent.change(inputNode, { target: { value: 'a' } })
    expect(await screen.findByText('ab')).toBeInTheDocument()
    fireEvent.click(document)
    expect(screen.queryByText('ab')).not.toBeInTheDocument()
  })

  it('renderOption should generate the right template', async () => {
    render(<AutoComplete {...testPropsWithCustomRender} />)
    const inputNode = screen.getByPlaceholderText(
      'auto-complete-2'
    ) as HTMLInputElement
    fireEvent.change(inputNode, { target: { value: 'a' } })
    expect(await screen.findByText('name: ab')).toBeInTheDocument()
  })

  it('async fetchSuggestions should works fine', async () => {
    const testPropsWithPromise: AutoCompleteProps = {
      ...testProps,
      fetchSuggestions: vi.fn(query => {
        return Promise.resolve(
          testArray.filter(item => item.value.includes(query))
        )
      }),
      placeholder: 'auto-complete-3'
    }
    render(<AutoComplete {...testPropsWithPromise} />)
    const inputNode = screen.getByPlaceholderText(
      'auto-complete-3'
    ) as HTMLInputElement
    fireEvent.change(inputNode, { target: { value: 'a' } })
    await waitFor(() => {
      expect(testPropsWithPromise.fetchSuggestions).toHaveBeenCalled()
    })
    expect(await screen.findByText('ab')).toBeInTheDocument()
  })
})
