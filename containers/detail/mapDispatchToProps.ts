import { Dispatch } from 'react';
import { MapDispatchToProps } from 'react-redux';
import { Actions } from '../../actions/actions';
import { State, Todo } from '../../types/globalTypes';
import { Actions as ActionCreator } from '../../types/types';

export const mapDispatchToProps: MapDispatchToProps<
  Dispatch<ActionCreator>,
  State
> = dispatch => ({
  markAsNotDone: (todos: Todo[], index: number) => {
    dispatch(Actions.markAsNotDone(todos, index));
  },
  markAsDone: (todos: Todo[], index: number) => {
    dispatch(Actions.markAsDone(todos, index));
  }
});
