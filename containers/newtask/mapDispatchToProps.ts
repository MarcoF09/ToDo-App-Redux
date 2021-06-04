import { Action } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { Actions } from '../../actions/actions'
import { State } from '../../types/globalTypes'

export const mapDispatchToProps = (
  dispatch: ThunkDispatch<State, {}, Action>
) => ({
  addToDo: (title: string, description: string) => {
    dispatch(Actions.addToDo(title, description))
  }
})
