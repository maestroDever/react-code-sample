import { descriptor } from 'descriptors/decorators'

type design = 'default' | 'small' | 'shortened'

const defaultProps = {
  breadcrumbItems: [{ to: '?path=/story/atoms-accordion--default', label: 'Home' }],
  designSize: 'default',
  isFromSearch: false,
}
export class BreadcrumbItem {
  @descriptor('To', 'String')
  to: string
  @descriptor('Label', 'String')
  label: string

  constructor(props) {
    this.to = props?.to
    this.label = props?.label
  }
}

export class BreadcrumbProps {
  breadcrumbItems: BreadcrumbItem[]

  @descriptor('Variant', 'Enum', 'default', ['default', 'small', 'shortened'])
  designSize: design | string

  isFromSearch?: boolean

  onClickBreadcrumb?: (...arg) => void

  constructor(props = defaultProps) {
    this.breadcrumbItems = props?.breadcrumbItems?.map(i => new BreadcrumbItem(i))
    this.designSize = props?.designSize
    this.isFromSearch = props?.isFromSearch
  }
}
