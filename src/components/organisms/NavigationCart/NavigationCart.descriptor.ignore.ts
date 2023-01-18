import { Types } from '@teamfabric/xpm'

export default Types.Component({
  id: 'NavigationCart',
  label: 'Header: Navigation Cart',
  isGlobal: false,
  attributes: {
    sideCartTitle: Types.String({ label: 'Side Cart Title (default: Cart)' }),
    checkoutPagePath: Types.String({ label: 'Checkout Page Path (eg. /checkout)' }),
    cartPagePath: Types.String({ label: 'Cart Page Path (eg. /cart)' }),
  },
})
