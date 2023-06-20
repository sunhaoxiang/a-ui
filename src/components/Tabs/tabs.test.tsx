import { describe, it, expect, vi } from 'vitest'
import { render, fireEvent, screen, RenderResult } from '@/utils/test-utils'
import Tabs, { TabsProps } from './tabs.tsx'
import TabItem from './tabItem.tsx'

const testProps: TabsProps = {
  defaultIndex: 1,
  onSelect: vi.fn()
}

let wrapper: RenderResult

describe('test Tabs Component', () => {
  beforeEach(() => {
    wrapper = render(
      <Tabs {...testProps}>
        <TabItem label="tab1">content1</TabItem>
        <TabItem label="tab2">content2</TabItem>
        <TabItem label="disabled" disabled>
          content3
        </TabItem>
      </Tabs>
    )
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should render the correct default Tabs', () => {
    const { container } = wrapper
    expect(container.querySelector('.a-tabs-nav')).toHaveClass('a-nav-line')
    const activeElement = screen.queryByText('tab2')
    expect(activeElement).toBeInTheDocument()
    expect(activeElement).toHaveClass('is-active')
    expect(screen.queryByText('tab1')).not.toHaveClass('is-active')
    expect(screen.queryByText('content2')).toBeInTheDocument()
    expect(screen.queryByText('content1')).not.toBeInTheDocument()
  })

  it('click tabItem should switch to content', () => {
    const clickedElement = screen.getByText('tab1')
    fireEvent.click(clickedElement)
    expect(clickedElement).toHaveClass('is-active')
    expect(screen.queryByText('tab2')).not.toHaveClass('is-active')
    expect(screen.queryByText('content1')).toBeInTheDocument()
    expect(screen.queryByText('content2')).not.toBeInTheDocument()
    expect(testProps.onSelect).toHaveBeenCalledWith(0)
  })

  it('click disabled tabItem should not works', () => {
    const disableElement = screen.getByText('disabled')
    expect(disableElement).toHaveClass('disabled')
    fireEvent.click(disableElement)
    expect(disableElement).not.toHaveClass('is-active')
    expect(testProps.onSelect).not.toHaveBeenCalled()
  })
})
