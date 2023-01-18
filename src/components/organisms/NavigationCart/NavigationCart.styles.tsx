import styled from 'styled-components'
import { Typography } from 'components/Atoms/Typography'
import { ShoppingCart as CartIcon, Close } from 'components/Icons'
import { hexToRGBA } from 'styles/utils/misc'

export const CartContainerRoot = styled.div<{ $isOpen?: boolean }>`
  display: none;
  flex-direction: column;
  background: ${props => props.theme.palette.body};
  right: 0;
  width: 40.8125rem;
  padding: 0 2.625rem;
  position: absolute;
  top: 100%;
  z-index: 100;
  ${({ theme, $isOpen }) =>
    theme.breakpoints.respondToDesktop(`
    display: ${$isOpen ? 'flex' : 'none'};
  `)}
`

export const CartOverlayRoot = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${p => hexToRGBA('#000', 0.5)};
`

export const CartHeaderRoot = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1.625rem;
  padding-bottom: 1.4375rem;
  border-bottom: 0.0625rem solid ${props => props.theme.palette.gray.main};
`

export const CartTitleWrapperRoot = styled.div`
  display: flex;
  align-items: flex-end;
`

export const CartTitleRoot = styled(Typography)`
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.1em;
`

export const CartQuantityRoot = styled(Typography)`
  margin-left: 0.5rem;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.4em;
`

export const CloseButtonRoot = styled(Close)`
  width: 1.5rem;
  object-fit: contain;
  fill: ${props => props.theme.palette.primary.main};
  cursor: pointer;
`

export const CartContentRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`

export const CartListRoot = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  flex-basis: 0;
  flex-grow: 1;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`

export const CartSummaryRoot = styled.div`
  position: sticky;
  bottom: 0;
  border-top: 0.0625rem solid ${props => props.theme.palette.gray.main};
  padding: 0.625rem 0 3.5rem;
  display: flex;
  justify-content: flex-end;

  > div {
    width: 27.375rem;
  }
`

export const CartIconRoot = styled(CartIcon)`
  width: 1.5rem;
  height: 1.5rem;
  fill: ${props => props.theme.palette.primary.main};
`
