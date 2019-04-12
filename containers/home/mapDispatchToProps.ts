import { Action } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { Actions } from '../../actions/actions'
import { State, Todo } from '../../types/globalTypes'

export const mapDispatchToProps = (
  dispatch: ThunkDispatch<State, {}, Action>
) => ({
  getToDoData: () => {
    dispatch(Actions.getToDoData())
  },
  clearAllDone: (todos: Todo[]) => {
    dispatch(Actions.clearAllDone(todos))
  },
  changeCheckBoxState: (todos: Todo[], index: number) => {
    dispatch(Actions.changeCheckBoxState(todos, index))
  },
  deleteItem: (todos: Todo[], index: number) => {
    dispatch(Actions.deleteItem(todos, index))
  }
})
