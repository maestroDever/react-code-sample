import React from 'react'
import { Breadcrumb } from './Breadcrumb.component'
import { render, screen, act, userEvent } from 'test/app-test-utils'

const items = [
  { to: '/hello', label: 'Home' },
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/contact', label: 'Contact' },
  { to: '/about', label: 'About' },
]

const defaultProps = {
  breadcrumbItems: items,
  designSize: 'default',
}
describe('Rendering the Breadcrumb component', () => {
  it('checking breadcrum with default props', () => {
    render(<Breadcrumb {...defaultProps} />)
    const breadcrumb = screen.getByTestId('breadcrumb-root-default')
    expect(breadcrumb).toBeInTheDocument()
  })

  it('checking breadcrumb without items ', () => {
    const defaultProps = {
      breadcrumbItems: [],
      designSize: 'default',
    }
    render(<Breadcrumb {...defaultProps} />)
    const breadcrumb = screen.getByTestId('breadcrumb-failed-back-to-result')
    expect(breadcrumb).toBeInTheDocument()
    expect(breadcrumb).toBeEmptyDOMElement()
  })

  it('checking breadcrum with small size props', () => {
    const sizeProps = {
      breadcrumbItems: items,
      designSize: 'small',
    }
    render(<Breadcrumb {...sizeProps} />)
    const breadcrumb = screen.getByTestId('breadcrumb-root-small')
    expect(breadcrumb).toBeInTheDocument()
    expect(breadcrumb.lastElementChild?.innerHTML).toMatch('About')
  })
  it('checking breadcrum with shortend size props', () => {
    const sizeProps = {
      breadcrumbItems: items,
      designSize: 'shortened',
    }
    render(<Breadcrumb {...sizeProps} />)
    const breadcrumb = screen.getByTestId('breadcrumb-root-shortend')
    expect(breadcrumb).toBeInTheDocument()
  })

  it('checking breadcrum with only one item', () => {
    const sizeProps = {
      breadcrumbItems: [{ to: '/', label: 'home' }],
      designSize: 'small',
    }
    render(<Breadcrumb {...sizeProps} />)
    const breadcrumb = screen.getByTestId('breadcrumb-root-main')

    expect(breadcrumb.innerHTML).toMatch('home')
  })

  it('is from search result rendering breadcrumb', () => {
    render(<Breadcrumb isFromSearch={true} {...defaultProps} />)
    const breadcrumb = screen.getByTestId('breadcrumb-back-to-result-link')
    expect(breadcrumb).toBeInTheDocument()
    expect(breadcrumb).toHaveAccessibleName('Back to Result Page')
    expect(breadcrumb).toHaveAttribute('href', defaultProps.breadcrumbItems[0].to)
    expect(breadcrumb).toHaveAttribute('target')
  })
})
