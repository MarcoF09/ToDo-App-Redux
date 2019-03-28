import { Dispatch } from 'react';
import { MapDispatchToProps } from 'react-redux';
import { Actions } from '../../actions/actions';
import { State } from '../../types/globalTypes';
import { Actions as ActionCreator } from '../../types/types';

export const mapDispatchToProps: MapDispatchToProps<
  Dispatch<ActionCreator>,
  State
> = dispatch => ({
  addToDo: (title: string, description: string) => {
    dispatch(Actions.addToDo(title, description));
  }
});
