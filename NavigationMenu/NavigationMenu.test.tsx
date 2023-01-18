import { FabricStorefront } from '@teamfabric/storefront-core'
import React from 'react'
import { act } from 'react-dom/test-utils'
import { render, screen, userEvent, waitFor } from 'test/app-test-utils'
import { mockMenu } from '../Header/Header.constants'
import { NavigationMenu } from './NavigationMenu.component'

const mockStoreFrontCore = {
  xm: {
    getMenu: () => {
      return Promise.resolve(mockMenu)
    },
  },
}

const renderNavigationMenu = (props = {}, client = mockStoreFrontCore) => {
  return render(<NavigationMenu {...props} />, {
    client: client as FabricStorefront,
  })
}

describe('<NavigationMenu />', () => {
  test('renders all the menu items and sub menu items correctly', async () => {
    renderNavigationMenu()

    const navigationMenu = await screen.findByTestId('navigation-menu-list')
    expect(navigationMenu).toBeInTheDocument()

    await waitFor(() => {
      expect(screen.getAllByTestId('navigation-menuItem').length).toBe(mockMenu.items.length)
    })
  })

  test('clicking on menu that has children opens sub menu', async () => {
    renderNavigationMenu()

    const menuItemWithChildren = mockMenu.items[0]

    const itemEl = screen.getByText(menuItemWithChildren.label)
    await waitFor(() => {
      expect(itemEl).toBeInTheDocument()
    })
    const subMenu = screen.queryByTestId(`navigation-subMenu-list`)

    expect(subMenu).not.toBeVisible()
    act(() => userEvent.click(itemEl))
    expect(subMenu).toBeVisible()
  })
})
