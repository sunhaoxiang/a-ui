import { describe, it, expect, vi } from 'vitest'
import { fireEvent, render, screen, waitFor } from '@/utils/test-utils'
import Form, { FormProps } from './form'
import Item from './formItem'
import Input from '@/components/Input'
import Button from '@/components/Button'

const testProps: FormProps = {
  name: 'test-form',
  initialValues: { name: 'alex', password: '12345', confirmPwd: '23456' },
  onFinish: vi.fn(),
  onFinishFailed: vi.fn()
}
let nameInput: HTMLInputElement,
  pwdInput: HTMLInputElement,
  conPwdInput: HTMLInputElement,
  submitButton: HTMLButtonElement

describe('testing Form component', () => {
  beforeEach(() => {
    render(
      <Form {...testProps}>
        <Item
          label="Name"
          name="name"
          rules={[
            { type: 'string', required: true, message: 'name error' },
            { type: 'string', min: 3, message: 'less than 3' }
          ]}
        >
          <Input />
        </Item>
        <Item
          label="Password"
          name="password"
          rules={[
            { type: 'string', required: true, message: 'password error' },
            { type: 'string', min: 4, message: 'less then 4' }
          ]}
        >
          <Input type="password" />
        </Item>
        <Item
          label="Confirm"
          name="confirmPwd"
          rules={[
            {
              type: 'string',
              required: true,
              message: 'confirm password error'
            },
            { type: 'string', min: 4, message: 'less then 4' },
            ({ getFieldValue }) => ({
              asyncValidator(_rule, value) {
                return new Promise((resolve, reject) => {
                  if (value !== getFieldValue('password')) {
                    reject('Do not match!')
                  }
                  resolve()
                })
              }
            })
          ]}
        >
          <Input type="password" />
        </Item>
        <Button type="submit" btnType="primary">
          Log in
        </Button>
      </Form>
    )
    const { getByDisplayValue, getByText } = screen
    nameInput = getByDisplayValue('alex')
    pwdInput = getByDisplayValue('12345')
    conPwdInput = getByDisplayValue('23456')
    submitButton = getByText('Log in')
  })

  it('should render the correct Form component', () => {
    const { getByText } = screen
    // should contain two labels
    expect(getByText('Name')).toBeInTheDocument()
    expect(getByText('Password')).toBeInTheDocument()
    expect(getByText('Confirm')).toBeInTheDocument()
    // should fill in three inputs
    expect(nameInput).toBeInTheDocument()
    expect(pwdInput).toBeInTheDocument()
    expect(conPwdInput).toBeInTheDocument()
    // should render the submit button
    expect(submitButton).toBeInTheDocument()
  })

  it('submit form with invalid values should show the error message', async () => {
    const { findByText } = screen
    fireEvent.change(nameInput, { target: { value: '' } })
    fireEvent.change(pwdInput, { target: { value: '' } })
    fireEvent.click(submitButton)
    expect(await findByText('name error')).toBeInTheDocument()
    expect(await findByText('password error')).toBeInTheDocument()
    await waitFor(() => {
      expect(testProps.onFinishFailed).toHaveBeenCalled()
    })
  })

  it('change single input to invalid values should trigger the validate', async () => {
    const { findByText } = screen
    // name input, type: string
    fireEvent.change(nameInput, { target: { value: '' } })
    fireEvent.blur(nameInput)
    expect(await findByText('name error')).toBeInTheDocument()
    // waitFor(() => {
    //   expect(getByText('name error')).toBeInTheDocument()
    // })
    fireEvent.change(nameInput, { target: { value: '12' } })
    fireEvent.blur(nameInput)
    expect(await findByText('less than 3')).toBeInTheDocument()
    // waitFor(() => {
    //   expect(getByText('less than 3')).toBeInTheDocument()
    // })
  })

  it('custom rules should work', async () => {
    const { findByText } = screen
    // change and blur confirmPwd
    fireEvent.change(conPwdInput, { target: { value: '23456' } })
    fireEvent.blur(conPwdInput)
    expect(await findByText('Do not match!')).toBeInTheDocument()
    // change to the same
    fireEvent.change(conPwdInput, { target: { value: '12345' } })
    fireEvent.blur(conPwdInput)
    expect(await findByText('Do not match!')).not.toBeInTheDocument()
    fireEvent.click(submitButton)
    // submit the form with the right data
    await waitFor(() => {
      expect(testProps.onFinish).toHaveBeenCalled()
    })
  })
})
