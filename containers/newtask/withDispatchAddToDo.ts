import { withHandlers } from 'recompose';
import { LayoutProps } from './types';

const addToDo = (props: LayoutProps) => {
  props.addToDo(props.title, props.description);
};

export const withDispatchAddToDo = withHandlers({
  addToDo: (props: LayoutProps) => () => addToDo(props)
});
