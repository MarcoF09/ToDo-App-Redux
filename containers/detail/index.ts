import { withNavigation } from 'react-navigation'
import { compose } from 'recompose'
import { Layout } from './Layout'
import { LayoutProps } from './types'
import { withNavigationHeader } from './withNavigationHeader'
import { withRedux } from './withRedux'

export default compose<LayoutProps, LayoutProps>(
  withNavigationHeader,
  withNavigation,
  withRedux
)(Layout)
