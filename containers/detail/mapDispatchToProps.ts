import { Action } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { Actions } from '../../actions/actions'
import { State, Todo } from '../../types/globalTypes'

export const mapDispatchToProps = (
  dispatch: ThunkDispatch<State, {}, Action>
) => ({
  markAsNotDone: (todos: Todo[], index: number) => {
    dispatch(Actions.markAsNotDone(todos, index))
  },
  markAsDone: (todos: Todo[], index: number) => {
    dispatch(Actions.markAsDone(todos, index))
  }
})
