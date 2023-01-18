import { BADGES } from 'utils/common'
import { Story } from '@storybook/react'
import React from 'react'
import { AddToCart } from './AddToCart.component'
import { AddToCartProps, AddToCartState } from './AddToCart.types'
import docs from './AddToCart.docs.mdx'

export default {
  component: AddToCart,
  title: 'Molecules/AddToCart',
  parameters: {
    docs: {
      page: docs,
    },
    badges: [BADGES.STABLE, BADGES.XM_COMPONENT],
  },
  argTypes: {
    children: {
      description: 'Children/Content to be inserted within the CTA',
    },
    helperText: {
      description: 'Helper text shown at the bottom of the CTA',
    },
    state: {
      description: 'State of the CTA - Enabled/Out of Stock/Loading',
      control: {
        type: 'select',
        options: ['Enabled', 'Out of Stock', 'Loading'],
      },
    },
    onAddToCartClick: {
      description: 'Callback to handle the add to cart button click.',
    },
    customAriaLabel: {
      description: 'Custom label for CTA',
      control: 'string',
    },
  },
}

const Template: Story<AddToCartProps> = args => <AddToCart {...args} />

export const Default = Template.bind({})
Default.args = {
  children: '$200 - Add to cart',
}

export const HelperText = Template.bind({})
HelperText.args = {
  children: '$200 - Add to cart',
  helperText: '*Shipping is free on all orders to the United States',
}

export const OutOfStock = Template.bind({})
OutOfStock.args = {
  children: 'Out of stock',
  helperText: '*Shipping is free on all orders to the United States',
  state: AddToCartState.OutOfStock,
}

export const LoadingState = Template.bind({})
LoadingState.args = {
  children: '$200 - Add to cart',
  helperText: '*Shipping is free on all orders to the United States',
  state: AddToCartState.Loading,
}
