import React from 'react'
import { Story } from '@storybook/react'
import { Breadcrumb } from './Breadcrumb.component'
import { BreadcrumbProps } from './Breadcrumb.types'
import { BADGES } from 'utils/common'
import docs from './Breadcrumb.docs.mdx'
export default {
  title: 'Molecules/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    docs: {
      page: docs,
    },
    badges: [BADGES.STABLE],
  },
  argTypes: {
    breadcrumbItems: {
      description: 'List of URLs/Links',
      required: true,
      table: {
        type: {
          summary: 'Breadcrumb Items',
          detail: '(XM - String)',
        },
      },
    },
    isFromSearch: {
      description: 'If the page is redirected from Search results',
      table: {
        type: {
          summary: 'If it is from search results',
          detail: '(XM - String)',
        },
      },
    },
    designSize: {
      description: 'Design size to display the breadcrumb list items',
      control: {
        type: 'select',
        options: ['default', 'small', 'shortened'],
      },
      table: {
        type: {
          summary: 'Design Size',
          detail: '(XM - String)',
        },
      },
    },
    onClickBreadcrumb: {
      description: 'Callback on click of breadcrumb item',
      control: 'string',
      table: {
        type: {
          summary: 'Onclick Callback',
          detail: '(XM - String)',
        },
      },
    },
  },
}

const items = [
  { to: '?path=/story/atoms-accordion--default', label: 'Home' },
  { to: '/?path=/story/organisms-hero-module--hero-default', label: 'Dashboard' },
  { to: '/?path=/story/organisms-product-listing--product-listing-mock', label: 'Contact' },
  { to: '/?path=/story/organisms-footer--footer-default', label: 'About' },
]

const defaultArgs = {
  breadcrumbItems: items,
  isFromSearch: false,
} as BreadcrumbProps

const BreadcrumbTemplate: Story<BreadcrumbProps> = args => <Breadcrumb {...args} />

export const Default = BreadcrumbTemplate.bind({})
Default.args = {
  ...defaultArgs,
}

export const Small = BreadcrumbTemplate.bind({})
Small.args = {
  ...defaultArgs,
  onClickBreadcrumb: value => {
    console.log('value', value)
  },
  designSize: 'small',
}

export const Shortend = BreadcrumbTemplate.bind({})
Shortend.args = {
  ...defaultArgs,
  onClickBreadcrumb: value => {
    console.log('value', value)
  },
  designSize: 'shortened',
}

export const BackToResult = BreadcrumbTemplate.bind({})
BackToResult.args = {
  ...defaultArgs,
  breadcrumbItems: [{ to: '/?path=/story/molecules-emailsubscriber--header', label: 'search' }],
  isFromSearch: true,
}
