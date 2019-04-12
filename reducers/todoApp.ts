import { Reducer } from 'redux'
import {
  addToDo,
  changeCheckBoxState,
  clearAllDone,
  deleteItem,
  getReturnedToDoData,
  markAsDone,
  markAsNotDone
} from '../actions/ActionHandlers'
import { ActionsTypes } from '../actions/actionTypes'
import { Actions } from '../types'
import { State } from '../types/globalTypes'

const initialState: State = {
  todo: []
}

export const rootReducer: Reducer<State, Actions> = (
  state = initialState,
  action: Actions
): State => {
  switch (action.type) {
    case ActionsTypes.GET_TO_DO_DATA_SUCCESS:
      return getReturnedToDoData(state, action)
    case ActionsTypes.GET_TO_DO_DATA_FAIL:
      console.log('error return data')
    case ActionsTypes.CLEAR_ALL_DONE_SUCCESS:
      return clearAllDone(state, action)
    case ActionsTypes.CLEAR_ALL_DONE_FAIL:
      console.log('error clear all')
    case ActionsTypes.CHANGE_CHECKBOX_STATE_SUCCESS:
      return changeCheckBoxState(state, action)
    case ActionsTypes.CHANGE_CHECKBOX_STATE_FAIL:
      console.log('error checkbox state')
    case ActionsTypes.HANDLE_ADD_DATA_SUCCESS:
      return addToDo(state, action)
    case ActionsTypes.HANDLE_ADD_DATA_FAIL:
      console.log('error add data')
    case ActionsTypes.HANDLE_MARK_AS_NOT_DONE_SUCCESS:
      return markAsNotDone(state, action)
    case ActionsTypes.HANDLE_MARK_AS_NOT_DONE_FAIL:
      console.log('error mark as not done')
    case ActionsTypes.HANDLE_MARK_AS_DONE_SUCCESS:
      return markAsDone(state, action)
    case ActionsTypes.HANDLE_MARK_AS_DONE_FAIL:
      console.log('error mark as done')
    case ActionsTypes.DELETE_ITEM_SUCCESS:
      return deleteItem(state, action)
    case ActionsTypes.DELETE_ITEM_FAIL:
      console.log('Error delete')
    default:
      return state
  }
}

export default rootReducer
