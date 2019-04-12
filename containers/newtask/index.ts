import {
  NavigationRoute,
  NavigationScreenProp,
  withNavigation
} from 'react-navigation'
import { compose } from 'recompose'
import { Layout } from './Layout'
import { LayoutProps } from './types'
import { withDispatchAddToDo } from './withDispatchAddToDo'
import { withLifecycleMethods } from './withLifecycleMethods'
import { withNavigationHeader } from './withNavigationHeader'
import { withRedux } from './withRedux'
import { stateEnhacer } from './withStateHandlers'

export interface Props {
  navigation: NavigationScreenProp<NavigationRoute>
  addToDo: (title: string, description: string) => void
}

export default compose<LayoutProps, Props>(
  withNavigationHeader,
  withNavigation,
  withRedux,
  stateEnhacer,
  withDispatchAddToDo,
  withLifecycleMethods
)(Layout)
