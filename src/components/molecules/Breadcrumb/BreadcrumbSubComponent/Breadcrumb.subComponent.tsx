import React, { useState } from 'react'
import * as Styled from '../Breadcrumb.styles'
import { Typography } from 'components/Atoms/Typography'

export const BreadcrumbCollapser = props => {
  return (
    <Styled.BreadcrumbWrapper>
      <Styled.BreadcrumbCollapserLi className="breadcrumb-collapser" {...props}>
        ... /
      </Styled.BreadcrumbCollapserLi>
    </Styled.BreadcrumbWrapper>
  )
}

export const useBreadcrumb = () => {
  const [expanded, setExpanded] = useState(false)
  const open = () => setExpanded(true)
  return {
    expanded,
    open,
  }
}

export const BreadcrumbItem = ({ children, ...props }) => (
  <Styled.BreadcrumbItemLi className="breadcrumb-item" {...props}>
    {children}
  </Styled.BreadcrumbItemLi>
)

export const ToBreadcrumbItem = (child, index, breadcrumbs) => {
  return (
    <>
      {index === breadcrumbs.length - 1 ? (
        <BreadcrumbItem key={`breadcrumb-item-${index}`}>{child}</BreadcrumbItem>
      ) : (
        [<BreadcrumbItem key={`breadcrumb-item---${index}`}>{child}</BreadcrumbItem>, '/']
      )}
    </>
  )
}

export const ShortEnd = (
  first,
  last,
  refBreadcrumb,
  openList,
  centerForShortend,
  handleBreadCrumbClick,
  onClickBreadcrumb,
  ...props
) => {
  return (
    <>
      <Styled.BreadcrumbOl className={'breadcrumb-ol'} data-testid={'breadcrumb-root-shortend'}>
        {first}{' '}
        <Styled.BreadcrumbWrapper>
          <Styled.BreadcrumbCollapserLi
            className="breadcrumb-collapser"
            {...props}
            onClick={() => handleBreadCrumbClick()}
            data-testid={'breadcrumb-collapsible'}
          >
            {' /... /'}
          </Styled.BreadcrumbCollapserLi>
          {openList && (
            <Styled.BreadcrumbListDiv className={'dropdown'}>
              <Styled.BreadcrumbListUl ref={refBreadcrumb}>
                {centerForShortend.props.shortendBreadcrumbItems.map((items, key) => (
                  <Styled.BreadcrumbListLi
                    key={key}
                    onClick={() => {
                      onClickBreadcrumb('')
                    }}
                  >
                    <Styled.NavLink
                      href={`${items['to']}`}
                      target="_self"
                      rel="noreferrer"
                      key={key}
                    >
                      <Typography variant={'h3'}>{items['label']}</Typography>
                    </Styled.NavLink>
                  </Styled.BreadcrumbListLi>
                ))}
              </Styled.BreadcrumbListUl>
            </Styled.BreadcrumbListDiv>
          )}
        </Styled.BreadcrumbWrapper>
        {last}
      </Styled.BreadcrumbOl>
    </>
  )
}
