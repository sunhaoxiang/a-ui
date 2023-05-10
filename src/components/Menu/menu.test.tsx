import { beforeEach, describe, expect, vi } from 'vitest'
import Menu from './menu'
import MenuItem from './menuItem'
import type { MenuProps } from './menu'
import { fireEvent, render, screen } from '@/utils/test-utils'

const testProps: MenuProps = {
  defaultIndex: '0',
  onSelect: vi.fn(),
  className: 'test',
}

const testVerticalProps: MenuProps = {
  defaultIndex: '0',
  mode: 'vertical',
}

const generateMenu = (props: MenuProps) => {
  return (
    <Menu {...props}>
      <MenuItem index="0">active</MenuItem>
      <MenuItem index="1" disabled>disabled</MenuItem>
      <MenuItem index="2">xyz</MenuItem>
    </Menu>
  )
}

describe('test Menu and MenuItem component', () => {
  let menuElement: HTMLElement, activeElement: HTMLElement, disabledElement: HTMLElement
  beforeEach(() => {
    render(generateMenu(testProps))
    menuElement = screen.getByRole('menu')
    activeElement = screen.getByText('active')
    disabledElement = screen.getByText('disabled')
  })
  it('should render the correct Menu and MenuItem based on default props', () => {
    expect(menuElement).toBeInTheDocument()
    expect(menuElement).toHaveClass('menu test')
    expect(menuElement.getElementsByTagName('li').length).toEqual(3)
    expect(activeElement).toHaveClass('menu-item is-active')
    expect(disabledElement).toHaveClass('menu-item is-disabled')
  })
  it('click items should change active and call the right callback', () => {
    const thirdItem = screen.getByText('xyz')
    expect(testProps.onSelect).not.toHaveBeenCalled()
    fireEvent.click(thirdItem)
    expect(thirdItem).toHaveClass('is-active')
    expect(activeElement).not.toHaveClass('is-active')
    expect(testProps.onSelect).toHaveBeenCalledWith('2')
    fireEvent.click(disabledElement)
    expect(disabledElement).not.toHaveClass('is-active')
    expect(testProps.onSelect).not.toHaveBeenCalledWith('1')
  })
})

describe('test Menu and MenuItem component in vertical mode', () => {
  let menuElement: HTMLElement
  beforeEach(() => {
    render(generateMenu(testVerticalProps))
    menuElement = screen.getByRole('menu')
  })
  it('should render vertical mode when mode is set to vertical', () => {
    expect(menuElement).toHaveClass('menu-vertical')
  })
})
