import React, { useState, useRef } from 'react'
import * as Styled from './Breadcrumb.styles'
import { Typography } from 'components/Atoms/Typography'
import { useClickOutside } from 'hooks/useClickOutside'
import { BreadcrumbProps } from './Breadcrumb.types'
import {
  BreadcrumbCollapser,
  useBreadcrumb,
  ToBreadcrumbItem,
  ShortEnd,
} from './BreadcrumbSubComponent/Breadcrumb.subComponent'

const BreadcrumbOperation = ({ breadcrumbItems, designSize, onClickBreadcrumb, ...props }) => {
  let children = React.Children.toArray(props.children)
  const { expanded, open } = useBreadcrumb()
  const itemsBefore = 1
  const itemsAfter = 1
  const totalItems = children.length
  const first = children.slice(0, itemsBefore)
  const last = children.slice(totalItems - itemsAfter, totalItems)

  children = children.map(ToBreadcrumbItem)

  const [openList, setOpenList] = useState(false)
  const refBreadcrumb = useRef(null)
  useClickOutside(refBreadcrumb, () => setOpenList(false))

  const updatedBreadcrumb = breadcrumbItems.slice(1, breadcrumbItems.length - 1)
  const centerForShortend = (
    <BreadcrumbCollapser
      title="Expand"
      key="collapsed-seperator"
      onClick={open}
      shortendBreadcrumbItems={updatedBreadcrumb}
    />
  )
  if (breadcrumbItems.length === 1) {
    return (
      <Styled.BreadcrumbOl className={'breadcrumb-ol'} data-testid={'breadcrumb-root'}>
        {children}
      </Styled.BreadcrumbOl>
    )
  }

  if (designSize === 'shortened') {
    if (breadcrumbItems.length < 3) {
      return (
        <Styled.BreadcrumbOl className={'breadcrumb-ol'} data-testid={'breadcrumb-root'}>
          {children}
        </Styled.BreadcrumbOl>
      )
    }

    const handleBreadCrumbClick = () => {
      setOpenList(!openList)
    }

    return (
      <>
        {ShortEnd(
          first,
          last,
          refBreadcrumb,
          openList,
          centerForShortend,
          handleBreadCrumbClick,
          onClickBreadcrumb,
          {
            ...props,
          },
        )}
      </>
    )
  } else if (designSize === 'default') {
    return (
      <>
        <Styled.BreadcrumbOl className={'breadcrumb-ol'} data-testid={'breadcrumb-root-default'}>
          {children}
        </Styled.BreadcrumbOl>
        <Styled.BreadcrumbDefault>
          <Typography variant={'h1'}>
            <Styled.NavLink href={breadcrumbItems[breadcrumbItems.length - 1].to}>
              {breadcrumbItems[breadcrumbItems.length - 1].label}
            </Styled.NavLink>
          </Typography>
        </Styled.BreadcrumbDefault>
      </>
    )
  }

  return (
    <Styled.BreadcrumbOl className={'breadcrumb-ol'} data-testid={'breadcrumb-root-small'}>
      {children}
    </Styled.BreadcrumbOl>
  )
}

const Breadcrumb = (props: BreadcrumbProps): JSX.Element => {
  const { breadcrumbItems, designSize = 'default', isFromSearch = false, onClickBreadcrumb } = props
  if (!breadcrumbItems || !breadcrumbItems.length) {
    return (
      <Styled.BreadcrumbBackToResultWrapperDiv
        data-testid={'breadcrumb-failed-back-to-result'}
      ></Styled.BreadcrumbBackToResultWrapperDiv>
    )
  }

  if (isFromSearch) {
    return (
      <Styled.BreadcrumbBackToResultWrapperDiv data-testid={'breadcrumb-back-to-result'}>
        <Styled.NavLink
          href={breadcrumbItems[0].to}
          target="_self"
          rel="noreferrer"
          data-testid={'breadcrumb-back-to-result-link'}
        >
          <Typography variant={'subhead1'}>{'Back to Result Page'}</Typography>
        </Styled.NavLink>
      </Styled.BreadcrumbBackToResultWrapperDiv>
    )
  }

  return (
    <BreadcrumbOperation
      breadcrumbItems={breadcrumbItems}
      designSize={designSize}
      onClickBreadcrumb={onClickBreadcrumb}
    >
      {breadcrumbItems.map(({ to, label }) => {
        return (
          <Styled.BreadcrumbRoot key={to} data-testid={'breadcrumb-root-main'}>
            <Styled.NavLink href={to} target="_self" rel="noreferrer">
              <Typography variant={'subhead1'}>{label}</Typography>
            </Styled.NavLink>
          </Styled.BreadcrumbRoot>
        )
      })}
    </BreadcrumbOperation>
  )
}

export { Breadcrumb }
