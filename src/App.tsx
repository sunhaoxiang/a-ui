import Button, {ButtonSize, ButtonType} from '@/components/Button/button.tsx'

const App = () => {
  return (
    <>
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
