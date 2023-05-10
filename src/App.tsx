import Button, { ButtonSize, ButtonType } from '@/components/Button/button.tsx'
import Menu from '@/components/Menu/menu.tsx'
import SubMenu from '@/components/Menu/subMenu.tsx'
import MenuItem from '@/components/Menu/menuItem.tsx'

const App = () => {
  return (
    <>
      <Menu defaultIndex="0" onSelect={(index) => { console.log(index) }}>
        <MenuItem index="0">cool link</MenuItem>
        <MenuItem index="1" disabled>cool link 2</MenuItem>
        <MenuItem index="2">cool link 3</MenuItem>
        <SubMenu index="3" title="dropDown">
          <MenuItem index="3-0">dropdown 1</MenuItem>
          <MenuItem index="3-0">dropdown 2</MenuItem>
        </SubMenu>
      </Menu>
      <Button autoFocus>Default</Button>
      <Button
        btnType={ButtonType.Danger}
        size={ButtonSize.Large}
        onClick={(e) => { console.log(e) }}
      >
        Danger
      </Button>
      <Button className="custom" btnType={ButtonType.Primary} size={ButtonSize.Small}>Primary</Button>
      <Button btnType={ButtonType.Link} href="https://www.google.com/" target="_blank">Google</Button>
      <Button btnType={ButtonType.Link} href="https://www.google.com/" disabled>Disabled</Button>

    </>
  )
}

export default App
