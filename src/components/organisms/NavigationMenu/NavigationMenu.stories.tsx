import React, { FunctionComponent } from 'react'
import { Story } from '@storybook/react'
import { NavigationMenu } from './NavigationMenu.component'
import { NavigationMenuProps } from './NavigationMenu.types'
import { mockMenu } from '../Header/Header.constants'
import { StorefrontCoreProvider } from '@teamfabric/storefront-core'
import { createMockStorefrontClient } from 'test/app-test-utils'

const client = createMockStorefrontClient({
  xm: {
    getMenu: () => Promise.resolve(mockMenu),
  },
})

const NavigationMenuComp: FunctionComponent<NavigationMenuProps> = ({
  menu,
}: NavigationMenuProps) => {
  return (
    <div style={{ display: 'flex', height: '110px', margin: '0 2rem' }}>
      <StorefrontCoreProvider client={client}>
        <NavigationMenu menu={menu} />
      </StorefrontCoreProvider>
    </div>
  )
}

const Template: Story<NavigationMenuProps> = args => <NavigationMenuComp {...args} />

export const Default = Template.bind({})
Default.args = {
  menu: {
    items: [
      { id: 1, label: 'Consequat', children: null, path: '/consequat' },
      { id: 2, label: 'Sed', children: null, path: '/sed' },
      { id: 3, label: 'Blandit', children: null, path: '/blandit' },
      { id: 4, label: 'Vel', children: null, path: '/vel' },
    ],
  } as any,
}

export const WithSubmenu = Template.bind({})
WithSubmenu.args = {
  menu: mockMenu,
}

export default {
  title: 'Organisms/Global Elements/Header/NavigationMenu',
  component: NavigationMenuComp,
}
