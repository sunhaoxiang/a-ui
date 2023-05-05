import { render } from '@/utils/test-utils'
import Button from './button'

test('our first react test case', () => {
  const wrapper = render(<Button>Nice</Button>)
  const element = wrapper.queryByText('Nice')
  expect(element).toBeTruthy()
})
