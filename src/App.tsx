import Button, {ButtonSize, ButtonType} from '@/components/Button/button.tsx'
import Menu from '@/components/Menu/menu.tsx'
import MenuItem from '@/components/Menu/menuItem.tsx'

const App = () => {
  return (
    <>
      <Menu defaultIndex={1} onSelect={(index) => {alert(index)}}>
        <MenuItem index={0}>cool link</MenuItem>
        <MenuItem index={1} disabled>cool link 2</MenuItem>
        <MenuItem index={2}>cool link 3</MenuItem>
      </Menu>
      <Button autoFocus>Default</Button>
      <Button
        btnType={ButtonType.Danger}
        size={ButtonSize.Large}
        onClick={(e) => {e.preventDefault(); alert('123')}}
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
