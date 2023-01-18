import React, { Ref, forwardRef } from 'react'
import { Button } from 'components/Atoms'

import { AddToCartProps, AddToCartState } from './AddToCart.types'
import * as Styled from './AddToCart.styles'

export const AddToCartComponent = (
  {
    helperText,
    state = AddToCartState.Default,
    children,
    onAddToCartClick,
    customAriaLabel = 'Add to Cart',
  }: AddToCartProps,
  ref: Ref<HTMLDivElement>,
) => (
  <Styled.Wrapper ref={ref}>
    <Styled.ButtonsWrapper>
      <Button
        aria-label={customAriaLabel}
        color={'primary'}
        variant="contained"
        size="large"
        disabled={state === AddToCartState.OutOfStock}
        loading={state === AddToCartState.Loading}
        onClick={onAddToCartClick}
      >
        {children}
      </Button>
    </Styled.ButtonsWrapper>
    {helperText ? <Styled.HelperText variant="caption">{helperText}</Styled.HelperText> : null}
  </Styled.Wrapper>
)

export const AddToCart = forwardRef(AddToCartComponent)
