import Button from '@/components/Button/button.tsx'
import Menu from '@/components/Menu/menu.tsx'
import SubMenu from '@/components/Menu/subMenu.tsx'
import MenuItem from '@/components/Menu/menuItem.tsx'
import Icon from '@/components/Icon/icon.tsx'

const App = () => {
  return (
    <>
      <Icon icon="coffee" theme="danger" size="2xl" />
      <Menu
        defaultIndex="0"
        defaultOpenSubMenus={['3']}
        onSelect={index => {
          console.log(index)
        }}
      >
        <MenuItem index="0">cool link</MenuItem>
        <MenuItem index="1" disabled>
          cool link 2
        </MenuItem>
        <MenuItem index="2">cool link 3</MenuItem>
        <SubMenu index="3" title="dropDown">
          <MenuItem index="3-0">dropdown 1</MenuItem>
          <MenuItem index="3-0">dropdown 2</MenuItem>
        </SubMenu>
      </Menu>
      <Button autoFocus>Default</Button>
      <Button
        btnType="danger"
        size="lg"
        onClick={e => {
          console.log(e)
        }}
      >
        Danger
      </Button>
      <Button className="custom" btnType="primary" size="sm">
        Primary
      </Button>
      <Button btnType="link" href="https://www.google.com/" target="_blank">
        Google
      </Button>
      <Button btnType="link" href="https://www.google.com/" disabled>
        Disabled
      </Button>
    </>
  )
}

export default App
