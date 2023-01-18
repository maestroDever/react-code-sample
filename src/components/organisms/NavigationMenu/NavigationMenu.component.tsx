import React, { Ref, forwardRef } from 'react'
import { useMenu, MenuItem } from '@teamfabric/storefront-core'
import { NavigationMenuProps } from './NavigationMenu.types'
import * as Styled from './NavigationMenu.styles'
import { ItemMenu } from './ItemMenu.component'

export const NavigationMenuComponent = (
  { menu }: NavigationMenuProps,
  ref: Ref<HTMLDivElement>,
): JSX.Element | null => {
  const { data, isLoading } = useMenu({ initialData: menu })

  if (isLoading) {
    return null
  }

  const buildMenu = (items: MenuItem[] = []) =>
    items.map((item, index) => <ItemMenu testId="navigation-menuItem" key={index} item={item} />)

  return (
    <Styled.Wrapper ref={ref}>
      <Styled.List data-testid="navigation-menu-list">{buildMenu(data?.items)}</Styled.List>
    </Styled.Wrapper>
  )
}

export const NavigationMenu = forwardRef(NavigationMenuComponent)
