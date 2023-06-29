import { describe, it, expect } from 'vitest'
import { render, screen } from '@/utils/test-utils'
import Progress, { ProgressProps } from './progress

const defaultProps: ProgressProps = {
  percent: 50,
  strokeHeight: 20
}

const themeProps: ProgressProps = {
  percent: 50,
  theme: 'success'
}

const doNotShowTextProps: ProgressProps = {
  percent: 50,
  showText: false
}

describe('test Progress component', () => {
  it('should render the correct default Progress', () => {
    render(<Progress {...defaultProps} />)
    const element = screen.getByRole('progressbar')
    expect(element).toBeInTheDocument()
    expect(element.querySelector('.a-progress-bar-outer')).toHaveStyle({
      height: '20px'
    })
    expect(element.querySelector('.a-progress-bar-inner')).toHaveClass(
      'color-primary'
    )
    expect(element.querySelector('.a-progress-bar-inner')).toHaveStyle({
      width: '50%'
    })
    expect(
      (element.querySelector('.inner-text') as HTMLElement).innerHTML
    ).toEqual('50%')
  })

  it('should render the success theme Progress', () => {
    render(<Progress {...themeProps} />)
    const element = screen.getByRole('progressbar')
    expect(element.querySelector('.a-progress-bar-inner')).toHaveClass(
      'color-success'
    )
  })

  it('should render the Progress without inner text', () => {
    render(<Progress {...doNotShowTextProps} />)
    const element = screen.getByRole('progressbar')
    expect(element.querySelector('.inner-text')).not.toBeInTheDocument()
  })
})
