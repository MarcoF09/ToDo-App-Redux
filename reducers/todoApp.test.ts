import {
  addToDo,
  changeCheckBoxState,
  clearAllDone,
  deleteItem,
  getReturnedToDoData,
  markAsDone,
  markAsNotDone
} from 'actions/ActionHandlers'
import { ActionsTypes } from 'actions/actionTypes'
import { State } from 'types/globalTypes'
import { Actions } from '../types'
import rootReducer from './todoApp'

jest.spyOn(global.console, 'log')

jest.mock('../actions/ActionHandlers')

const mockedGetReturnedToDoData = getReturnedToDoData as jest.Mock
const mockedAddToDo = addToDo as jest.Mock
const mockedChangeCheckBoxState = changeCheckBoxState as jest.Mock
const mockedClearAllDone = clearAllDone as jest.Mock
const mockedMarkAsNotDone = markAsNotDone as jest.Mock
const mockedMarkAsDone = markAsDone as jest.Mock
const mockedDeleteItem = deleteItem as jest.Mock

const initialState: State = {
  todo: [
    { title: 'Title1', description: 'Description1', completed: false, url: '' },
    { title: 'Title2', description: 'Description2', completed: true, url: '' }
  ]
}

const getActionWithTodo = (props: object) => ({
  type: props.type,
  payload: {
    todo: initialState.todo
  }
})

describe('should execute an action', () => {
  it('should execute the action get data', async () => {
    const action: Actions = getActionWithTodo({
      type: ActionsTypes.GET_TO_DO_DATA_SUCCESS
    })
    await rootReducer(initialState, action)
    expect(mockedGetReturnedToDoData).toHaveBeenCalled()
  })
  it('should fail to get data', () => {
    const action: Actions = {
      type: ActionsTypes.GET_TO_DO_DATA_FAIL
    }
    rootReducer(initialState, action)
    expect(console.log).toHaveBeenCalled()
  })
  it('should execute the action clear all todo done', async () => {
    const action: Actions = getActionWithTodo({
      type: ActionsTypes.CLEAR_ALL_DONE_SUCCESS
    })
    await rootReducer(initialState, action)
    expect(mockedClearAllDone).toHaveBeenCalled()
  })
  it('should fail to clear all done', () => {
    const action: Actions = {
      type: ActionsTypes.CLEAR_ALL_DONE_FAIL
    }
    rootReducer(initialState, action)
    expect(console.log).toHaveBeenCalled()
  })
  it('should execute the action  change checkbox state', async () => {
    const action: Actions = getActionWithTodo({
      type: ActionsTypes.CHANGE_CHECKBOX_STATE_SUCCESS
    })
    await rootReducer(initialState, action)
    expect(mockedChangeCheckBoxState).toHaveBeenCalled()
  })
  it('should fail to change checkbox state', () => {
    const action: Actions = {
      type: ActionsTypes.CHANGE_CHECKBOX_STATE_FAIL
    }
    rootReducer(initialState, action)
    expect(console.log).toHaveBeenCalled()
  })
  it('should execute the action add todo data', async () => {
    const action: Actions = {
      type: ActionsTypes.HANDLE_ADD_DATA_SUCCESS,
      payload: {
        title: 'title3',
        description: 'description3'
      }
    }
    await rootReducer(initialState, action)
    expect(mockedAddToDo).toHaveBeenCalled()
  })
  it('should fail to add todo data', () => {
    const action: Actions = {
      type: ActionsTypes.HANDLE_ADD_DATA_FAIL
    }
    rootReducer(initialState, action)
    expect(console.log).toHaveBeenCalled()
  })
  it('should execute the action mark as not done', async () => {
    const action: Actions = getActionWithTodo({
      type: ActionsTypes.HANDLE_MARK_AS_NOT_DONE_SUCCESS
    })
    await rootReducer(initialState, action)
    expect(mockedMarkAsNotDone).toHaveBeenCalled()
  })
  it('should fail to execute the action mark as not done', () => {
    const action: Actions = {
      type: ActionsTypes.HANDLE_MARK_AS_NOT_DONE_FAIL
    }
    rootReducer(initialState, action)
    expect(console.log).toHaveBeenCalled()
  })
  it('should execute the action mark as done', async () => {
    const action: Actions = getActionWithTodo({
      type: ActionsTypes.HANDLE_MARK_AS_DONE_SUCCESS
    })
    await rootReducer(initialState, action)
    expect(mockedMarkAsDone).toHaveBeenCalled()
  })
  it('should fail to execute the action mark as done', () => {
    const action: Actions = {
      type: ActionsTypes.HANDLE_MARK_AS_DONE_FAIL
    }
    rootReducer(initialState, action)
    expect(console.log).toHaveBeenCalled()
  })
  it('should execute the action delete item', async () => {
    const action: Actions = getActionWithTodo({
      type: ActionsTypes.DELETE_ITEM_SUCCESS
    })
    await rootReducer(initialState, action)
    expect(mockedDeleteItem).toHaveBeenCalled()
  })
  it('should fail to execute the action delete item', () => {
    const action: Actions = {
      type: ActionsTypes.DELETE_ITEM_FAIL
    }
    rootReducer(initialState, action)
    expect(console.log).toHaveBeenCalled()
  })
  it('should return the default state', () => {
    const action: Actions = {
      type: ActionsTypes.CLEAR_ALL_DONE_SUCCESS,
      payload: {
        todo: initialState.todo
      }
    }
    const result = rootReducer(initialState, {})
    expect(result).toEqual(initialState)
  })
})
