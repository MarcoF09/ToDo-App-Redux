import { MapStateToProps } from 'react-redux';
import { State } from '../../types/globalTypes';

export const mapStateToProps: MapStateToProps<State, null, State> = (
  state: State
) => {
  return {
    todo: state.todo
  };
};
