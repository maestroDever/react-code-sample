import React from 'react'
import { act, fireEvent, render, screen, userEvent } from 'test/app-test-utils'
import { NavigationCart } from './NavigationCart.component'

const renderNavigationCart = (props = {}) => {
  return render(<NavigationCart {...props} />)
}

beforeEach(() => {
  renderNavigationCart()
})

describe('check side cart visibility', () => {
  it('hide cart icon and side cart by default', () => {
    const navigationCartIcon = screen.getByTestId('nav-cart-icon')
    const navigationCartContainer = screen.getByTestId('nav-cart-container')

    expect(navigationCartIcon).toBeVisible()
    expect(navigationCartContainer).not.toBeVisible()
  })

  describe('side cart visibility by events', () => {
    beforeEach(() => {
      const navigationCartIcon = screen.getByTestId('nav-cart-icon')
      act(() => userEvent.hover(navigationCartIcon))
    })

    it('hide side cart when user leave on side cart container', () => {
      const navigationCartContainer = screen.getByTestId('nav-cart-container')
      fireEvent.mouseLeave(navigationCartContainer)
      expect(navigationCartContainer).not.toBeVisible()
    })

    it('hide side cart when user click close icon', () => {
      const navigationCloseIcon = screen.getByTestId('nav-close-icon')
      const navigationCartContainer = screen.getByTestId('nav-cart-container')
      act(() => userEvent.click(navigationCloseIcon))
      expect(navigationCartContainer).not.toBeVisible()
    })
  })
})
