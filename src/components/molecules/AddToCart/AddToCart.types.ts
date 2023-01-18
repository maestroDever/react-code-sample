import { ComponentPropsWithoutRef } from 'react'
import { ButtonColor } from 'components/Atoms/Buttons/shared/types'

export enum AddToCartState {
  Default = 'Enabled',
  OutOfStock = 'Out of stock',
  Loading = 'Loading ',
}

export type AddToCartProps = ComponentPropsWithoutRef<'div'> & {
  color: ButtonColor
  helperText?: string
  state?: AddToCartState
  customAriaLabel?: string
  onAddToCartClick: () => void
}
