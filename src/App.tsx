import Button, {ButtonSize, ButtonType} from '@/components/Button/button.tsx'

function App() {
  return (
    <>
      <Button>Default</Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Large}>Danger</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>Primary</Button>
      <Button btnType={ButtonType.Link} href="https://www.google.com/">Google</Button>
      <Button btnType={ButtonType.Link} href="https://www.google.com/" disabled>Disabled</Button>
    </>
  )
}

export default App
