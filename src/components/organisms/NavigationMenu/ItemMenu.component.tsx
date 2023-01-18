import React, { useRef, useState } from 'react'
import { Typography } from 'components/Atoms'
import { useClickOutside } from 'hooks/useClickOutside'

import * as Styled from './ItemMenu.styles'
import * as ParentStyled from './NavigationMenu.styles'

export const ItemMenu = ({ item, testId = '' }): JSX.Element => {
  const [isSubMenuVisible, setIsSubMenuVisible] = useState(false)
  const ref = useRef(null)

  const toggleMenu = () => setIsSubMenuVisible(prev => !prev)

  useClickOutside(ref, () => setIsSubMenuVisible(false))

  return (
    <Styled.ListItem data-testid={testId} ref={ref} visible={isSubMenuVisible} key={item._id}>
      {item.label ? (
        <>
          {!item?.children?.length ? (
            <Typography variant="subhead1">
              <Styled.Link href={item.path}>{item.label}</Styled.Link>
            </Typography>
          ) : (
            <Styled.Button onClick={toggleMenu} onKeyDown={toggleMenu}>
              <Typography variant="subhead1">{item.label}</Typography>
            </Styled.Button>
          )}
        </>
      ) : null}
      {item?.children?.length ? (
        <ParentStyled.List data-testid="navigation-subMenu-list">
          {item.children.map((item, index) => (
            <ItemMenu testId={`navigation-subMenu-item`} key={index} item={item} />
          ))}
        </ParentStyled.List>
      ) : null}
    </Styled.ListItem>
  )
}
