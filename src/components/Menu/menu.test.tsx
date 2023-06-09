import { beforeEach, describe, it, expect, vi } from 'vitest'
import Menu from './menu'
import MenuItem from './menuItem'
import SubMenu from './subMenu'
import { fireEvent, render, screen } from '@/utils/test-utils'
import type { MenuProps } from './menu'

vi.mock('@/components/Icon', () => {
  return {
    default: () => {
      return <i className="fa" />
    }
  }
})

const testProps: MenuProps = {
  defaultIndex: '0',
  className: 'test',
  onSelect: vi.fn()
}

const testVerticalProps: MenuProps = {
  defaultIndex: '0',
  mode: 'vertical',
  onSelect: vi.fn(),
  defaultOpenSubMenus: ['4']
}

const generateMenu = (props: MenuProps) => {
  return (
    <Menu {...props}>
      <MenuItem index="0">active</MenuItem>
      <MenuItem index="1" disabled>
        disabled
      </MenuItem>
      <MenuItem index="2">xyz</MenuItem>
      <SubMenu index="3" title="dropdown">
        <MenuItem index="3-0">drop1</MenuItem>
      </SubMenu>
      <SubMenu index="4" title="opened">
        <MenuItem index="4-0">opened1</MenuItem>
      </SubMenu>
    </Menu>
  )
}

const createStyleFile = () => {
  const cssFile = `
    .a-submenu {
      display: none;
    }
  `
  const style = document.createElement('style')
  style.innerHTML = cssFile
  return style
}

describe('test Menu and MenuItem component', () => {
  let menuElement: HTMLElement,
    activeElement: HTMLElement,
    disabledElement: HTMLElement,
    subMenuElement: HTMLElement,
    subMenuItemElement: HTMLElement | null
  beforeEach(() => {
    const { container } = render(generateMenu(testProps))
    container.append(createStyleFile())
    menuElement = screen.getByRole('menu')
    activeElement = screen.getByText('active')
    disabledElement = screen.getByText('disabled')
    subMenuElement = screen.getByText('dropdown')
    subMenuItemElement = screen.queryByText('drop1')
  })
  it('should render the correct Menu and MenuItem based on default props', () => {
    expect(menuElement).toBeInTheDocument()
    expect(menuElement).toHaveClass('a-menu test')
    expect(menuElement.querySelectorAll(':scope > li').length).toEqual(5)
    expect(activeElement).toHaveClass('a-menu-item is-active')
    expect(disabledElement).toHaveClass('a-menu-item is-disabled')
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
  it('should show dropdown items when hover on subMenu', async () => {
    expect(subMenuItemElement).not.toBeInTheDocument()
    fireEvent.mouseEnter(subMenuElement)
    expect(await screen.findByText('drop1')).toBeInTheDocument()
    fireEvent.click(screen.getByText('drop1'))
    expect(testProps.onSelect).toHaveBeenCalledWith('3-0')
    fireEvent.mouseLeave(subMenuElement)
    expect(await screen.findByText('drop1')).not.toBeVisible()
  })
})

describe('test Menu and MenuItem component in vertical mode', () => {
  let menuElement: HTMLElement,
    subMenuElement: HTMLElement,
    subMenuItemDrop1Element: HTMLElement | null,
    subMenuItemOpenedElement: HTMLElement | null
  beforeEach(() => {
    const { container } = render(generateMenu(testVerticalProps))
    container.append(createStyleFile())
    menuElement = screen.getByRole('menu')
    subMenuElement = screen.getByText('dropdown')
    subMenuItemDrop1Element = screen.queryByText('drop1')
    subMenuItemOpenedElement = screen.queryByText('opened1')
  })
  it('should render vertical mode when mode is set to vertical', () => {
    expect(menuElement).toHaveClass('a-menu-vertical')
  })
  it('should show dropdown items when click on subMenu for vertical mode', async () => {
    expect(subMenuItemDrop1Element).not.toBeInTheDocument()
    fireEvent.click(subMenuElement)
    expect(screen.getByText('drop1')).toBeInTheDocument()
    fireEvent.click(screen.getByText('drop1'))
    expect(testVerticalProps.onSelect).toHaveBeenCalledWith('3-0')
    fireEvent.click(subMenuElement)
    expect(subMenuItemDrop1Element).not.toBeInTheDocument()
  })
  it('should show subMenu dropdown when defaultOpenSubMenus contains SubMenu index', () => {
    expect(subMenuItemOpenedElement).toBeInTheDocument()
  })
})
