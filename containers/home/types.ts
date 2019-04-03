import { Animated } from 'react-native';
import { NavigationRoute, NavigationScreenProp } from 'react-navigation';
import { State, Todo } from '../../types/globalTypes';

export interface Props {
  todo: Todo[];
  navigation: NavigationScreenProp<NavigationRoute>;
  getToDoData: () => void;
  clearAllDone: (todos: Todo[]) => void;
  changeCheckBoxState: (todos: Todo[], index: number) => void;
  deleteItem: (todos: Todo[], index: number) => void;
  animateDeleteButton: (
    deleteButtonState: boolean,
    moveAnimation: Animated.ValueXY
  ) => void;
}

export interface HomeState extends State {
  deleteButtonState: boolean;
  moveAnimation: Animated.ValueXY;
}

export type LayoutProps = Props & HomeState;
