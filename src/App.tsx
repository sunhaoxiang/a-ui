import Button, {ButtonSize, ButtonType} from '@/components/Button/button.tsx'

function App() {
  return (
    <>
      <Button btnType={ButtonType.Primary}>Primary</Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>Danger</Button>
      <Button btnType={ButtonType.Link} href="https://www.google.com/">Google</Button>
      <Button btnType={ButtonType.Link} href="https://www.google.com/" disabled>Disabled</Button>
    </>
  )
}

export default App
