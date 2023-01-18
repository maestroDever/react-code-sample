import React, { Fragment, useState } from 'react'
import { useCart } from '@teamfabric/storefront-core'
import { useLockBodyScroll } from 'hooks/useLockBodyScroll'
import { useRouter } from 'hooks/useRouter'
import { useFillRemainingHeight } from 'hooks/useFillRemainingHeight'
import { CartSummary } from 'components/Molecules/Cart/CartSummary'
import { CartItemList } from 'components/Molecules/Cart/CartItemList'
import {
  CartContainerRoot,
  CartHeaderRoot,
  CartTitleWrapperRoot,
  CartTitleRoot,
  CartQuantityRoot,
  CloseButtonRoot,
  CartContentRoot,
  CartListRoot,
  CartSummaryRoot,
  CartIconRoot,
  CartOverlayRoot,
} from './NavigationCart.styles'
import { NavigationCartProps } from './NavigationCart.types'
import { Portal } from 'react-portal'

const NavigationCart: React.FC<NavigationCartProps> = ({
  sideCartTitle = 'Cart',
  checkoutPagePath,
  cartPagePath,
}) => {
  const [cartModalOpen, setCartModalOpen] = useState(false)
  const { targetElementRef, lockBodyScroll, unlockBodyScroll } = useLockBodyScroll()
  const { data } = useCart()
  const router = useRouter()

  useFillRemainingHeight(targetElementRef)

  const onCartModalOpen = () => {
    lockBodyScroll()
    setCartModalOpen(true)
  }

  const onCartModalClose = () => {
    unlockBodyScroll()
    setCartModalOpen(false)
  }

  return (
    <Fragment>
      {/* Cart Container */}
      <CartContainerRoot
        ref={targetElementRef}
        $isOpen={cartModalOpen}
        data-testid="nav-cart-container"
        aria-label="Side Cart"
        onMouseLeave={onCartModalClose}
      >
        <CartHeaderRoot>
          <CartTitleWrapperRoot>
            <CartTitleRoot variant="display2">{sideCartTitle}</CartTitleRoot>
            <CartQuantityRoot variant="numberXL" data-testid="nav-cart-quantity">
              {data?.quantity ? `${data?.quantity} items` : null}
            </CartQuantityRoot>
          </CartTitleWrapperRoot>
          <CloseButtonRoot data-testid="nav-close-icon" onClick={onCartModalClose} />
        </CartHeaderRoot>
        <CartContentRoot>
          <CartListRoot>
            <CartItemList />
          </CartListRoot>
          <CartSummaryRoot>
            <CartSummary checkoutPagePath={checkoutPagePath} />
          </CartSummaryRoot>
        </CartContentRoot>
      </CartContainerRoot>

      {/* Overlay */}
      {cartModalOpen && (
        <Portal>
          <CartOverlayRoot />
        </Portal>
      )}

      {/* Cart Icon */}
      <CartIconRoot
        data-testid="nav-cart-icon"
        onMouseEnter={onCartModalOpen}
        onClick={() => router?.push(cartPagePath as string)}
      />
    </Fragment>
  )
}

NavigationCart.defaultProps = {}

export { NavigationCart }
