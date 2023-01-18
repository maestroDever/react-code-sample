import React from 'react'
import { Story } from '@storybook/react'
import { NavigationCart } from './NavigationCart.component'
import { NavigationCartProps } from './NavigationCart.types'
import styled from 'styled-components'

export default {
  title: 'Organisms/Global Elements/Header/NavigationCart',
  component: NavigationCart,
}

const Container = styled.div`
  width: 100%;
  min-height: 200vh;
  & > div {
    top: 0 !important;
  }
`

const Template: Story<NavigationCartProps> = args => (
  <Container>
    <NavigationCart {...args} />
  </Container>
)

export const Default = Template.bind({})
Default.args = {}
