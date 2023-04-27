import Button, { ButtonType, ButtonSize } from './components/Button/button.tsx'

function App() {
  return (
    <>
      <Button btnType={ButtonType.Danger}>Danger</Button>
      <Button btnType={ButtonType.Link} href="www">Link</Button>
    </>
  )
}

export default App
