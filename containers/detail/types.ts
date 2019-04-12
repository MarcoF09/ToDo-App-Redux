import {
  NavigationParams,
  NavigationRoute,
  NavigationScreenProp
} from 'react-navigation'
import { Todo } from '../../types/globalTypes'

export interface Props {
  todo: Todo[]
  markAsNotDone: (todos: Todo[], index: number) => void
  markAsDone: (todos: Todo[], index: number) => void
  navigation: NavigationScreenProp<
    NavigationRoute<NavigationParams>,
    NavigationParams
  >
}

export type LayoutProps = Props
