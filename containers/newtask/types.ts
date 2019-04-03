import { NavigationRoute, NavigationScreenProp } from 'react-navigation';

interface Props {
  navigation: NavigationScreenProp<NavigationRoute>;
  addToDo: (title: string, description: string) => void;
  onChangeTitle: (text: string) => void;
  onChangeDescription: (text: string) => void;
  onFocusTitle: () => void;
  onBlurTitle: () => void;
  onFocusDescription: () => void;
  onBlurDescription: () => void;
}

interface NewTaskState {
  firstInputColor: string;
  secondInputColor: string;
  title: string;
  description: string;
}

export type LayoutProps = Props & NewTaskState;
