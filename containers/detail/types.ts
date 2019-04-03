import { withNavigation } from 'react-navigation';
import { ExtractTInner } from '../../hocs/types';
import { Todo } from '../../types/globalTypes';

export interface Props {
  todo: Todo[];
  markAsNotDone: (todos: Todo[], index: number) => void;
  markAsDone: (todos: Todo[], index: number) => void;
}

export type LayoutProps = ExtractTInner<typeof withNavigation> & Props;
