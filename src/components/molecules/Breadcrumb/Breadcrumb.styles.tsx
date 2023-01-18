import styled from 'styled-components'

export const BreadcrumbRoot = styled.div``
export const BreadcrumbListLi = styled.li`
  padding: 0.125rem;
`

export const BreadcrumbBackToResultWrapperDiv = styled.div`
  margin-left: 1.5rem;
`

export const BreadcrumbDefault = styled.div`
  margin-top: 0.625rem;
`

export const BreadcrumbOl = styled.ol`
  list-style: none;
  display: flex;
  align-items: center;
`

export const NavLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.primary.main};
`

export const BreadcrumbItemLi = styled.li`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.palette.primary.main};
  margin: auto 0.375rem;
  user-select: none;
`

export const BreadcrumbCollapserLi = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  &.bottomDefault {
    position: relative;
    top: 1.5rem;
    text-align: left;
    right: 7.6875rem;
  }
  &.expand {
    width: 0.625rem;
    height: 1.5625rem;
  }

  span {
    cursor: pointer;
    transition: all 0.2s ease-out;
    color: ${({ theme }) => theme.palette.primary.main};

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.palette.gray.main};
      transform: scale(1.15);
    }
    &:active {
      color: ${({ theme }) => theme.palette.primary.main};
    }
  }
`

export const BreadcrumbWrapper = styled.div`
  position: relative;
`

export const BreadcrumbListDiv = styled.div`
  position: absolute;
  z-index: 2;
  background-color: ${props => props.theme.palette.white.main};
  top: 0.5rem;
  left: 0.375rem;
  box-shadow: 0 0.25rem 1.875rem rgba(0, 0, 0, 0.1);
  padding: 0 0.3125rem 0 0.3125rem;
`

export const BreadcrumbListUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0.25rem auto;
`

export const BreadcrumbInsideBlock = styled.div`
  display: flex;
  align-items: center;
`
