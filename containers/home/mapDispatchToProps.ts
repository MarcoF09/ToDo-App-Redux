import { Dispatch } from 'react';
import { MapDispatchToProps } from 'react-redux';
import { Actions } from '../../actions/actions';
import { State, Todo } from '../../types/globalTypes';
import { Actions as ActionCreator } from '../../types/types';

export const mapDispatchToProps: MapDispatchToProps<
  Dispatch<ActionCreator>,
  State
> = dispatch => ({
  getToDoData: () => {
    dispatch(Actions.getToDoData());
  },
  clearAllDone: (todos: Todo[]) => {
    dispatch(Actions.clearAllDone(todos));
  },
  changeCheckBoxState: (todos: Todo[], index: number) => {
    dispatch(Actions.changeCheckBoxState(todos, index));
  },
  deleteItem: (todos: Todo[], index: number) => {
    dispatch(Actions.deleteItem(todos, index));
  }
});
